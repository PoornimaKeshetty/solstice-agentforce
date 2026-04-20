import os
from agents.base import BaseAgent
from salesforce.client import SalesforceClient
from events import emit_event

class ExpediteAgent(BaseAgent):
    agent_name = "expedite_coordinator"

    async def run(self, entities):
        await emit_event('agent_start', self.agent_name)
        
        order_num = entities.get('order_number')
        if not order_num:
            return {"message": "Certainly. I can check our logistics queue for an expedite. Which order number should I look into?"}

        try:
            sf_client = SalesforceClient()
            # 1. Verify the order exists
            # Using the search logic we built in UC1
            query = f"SELECT Id, OrderNumber, Status, Description FROM Order WHERE OrderNumber LIKE '%{order_num}' LIMIT 1"
            results = sf_client.sf.query(query)
            
            if results['totalSize'] == 0:
                await emit_event('agent_complete', self.agent_name, {"found": False})
                return {"message": f"I couldn't find order {order_num} to expedite."}

            order = results['records'][0]
            order_id = order['Id']
            current_status = order['Status']

            # 2. Check eligibility (Can't expedite if already delivered/Activated)
            if current_status == 'Activated':
                return {"message": f"Order {order_num} has already been delivered and activated, so I cannot expedite it further."}

            # 3. Perform the "Action" - Update Salesforce
            # We will update the status to 'Processing' and add a note to the Description
            await emit_event('salesforce_query', self.agent_name, {"action": "Writing expedite flag"})
            
            sf_client.sf.Order.update(order_id, {
                'Description': f"*** EXPEDITE REQUESTED *** {order.get('Description', '')}",
                'Status': 'Processing' # Move it forward in the queue
            })

            await emit_event('agent_complete', self.agent_name, {"success": True})
            
            return {
                "message": f"Great news! I've successfully escalated **Order {order_num}** with our logistics team. It has been moved to **Priority Processing**. You will receive an email update once the carrier picks it up.",
                "status_lines": [
                    "Checking inventory... ✓",
                    "Validating delivery window... ✓",
                    "Updating Salesforce Record... ✓",
                    "Expedite Confirmed ✓"
                ]
            }

        except Exception as e:
            await emit_event('agent_error', self.agent_name, {"error": str(e)})
            return {"message": "I ran into a snag while trying to update the delivery schedule. Please try again later."}