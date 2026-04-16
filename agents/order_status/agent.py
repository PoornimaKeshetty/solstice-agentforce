from agents.base import BaseAgent
from salesforce.client import SalesforceClient
from events import emit_event

class OrderStatusAgent(BaseAgent):
    agent_name = "order_status"

    async def run(self, entities):
        await emit_event('agent_start', self.agent_name)
        
        raw_num = entities.get('order_number', '')
        if not raw_num:
            return {"message": "I'd be happy to check that for you. Could you please provide the order number?"}

        # Normalize the number: Salesforce often stores '00000150' but search might be '150'
        # We will try both the raw input and the version with leading zeros stripped
        order_variants = [raw_num, raw_num.lstrip('0')]
        
        try:
            sf_client = SalesforceClient()
            order_data = None

            # Try to find the order using variants
            for num in order_variants:
                if not num: continue
                await emit_event('salesforce_query', self.agent_name, {"searching_for": num})
                
                # Try Global Search immediately for the demo to ensure we find your 100 records
                query = f"""
                    SELECT Id, OrderNumber, Status, Account.Name 
                    FROM Order 
                    WHERE OrderNumber LIKE '%{num}' 
                    LIMIT 1
                """
                results = sf_client.sf.query(query)
                if results['totalSize'] > 0:
                    order_data = results['records'][0]
                    break

            if not order_data:
                await emit_event('agent_complete', self.agent_name, {"found": False})
                return {
                    "message": f"I've searched our database but I can't find order {raw_num}. Could you verify the number on your confirmation email?",
                    "status_lines": ["Searching Salesforce... ✓", "Order not found."]
                }

            status = order_data.get('Status', 'Unknown')
            order_actual_id = order_data.get('OrderNumber')
            account_name = order_data.get('Account', {}).get('Name', 'Customer')
            
            status_map = {
                "Confirmed": "has been confirmed and is in our queue",
                "Processing": "is currently being prepared at the Solstice warehouse",
                "Payment Pending": "is awaiting final payment confirmation",
                "In Transit": "has left our facility and is currently in transit",
                "Activated": "has been successfully delivered",
                "Draft": "is currently in draft status"
            }
            
            friendly_status = status_map.get(status, f"is currently in {status} status")
            display_msg = f"Certainly! Order **{order_actual_id}** for **{account_name}** {friendly_status}. Is there anything else you need?"

            await emit_event('agent_complete', self.agent_name, {"status": status})
            return {
                "message": display_msg,
                "status_lines": ["Accessing Salesforce... ✓", f"Order found for {account_name} ✓"]
            }

        except Exception as e:
            await emit_event('agent_error', self.agent_name, {"error": str(e)})
            return {"message": "I had trouble accessing Salesforce records. Please try again in a moment."}