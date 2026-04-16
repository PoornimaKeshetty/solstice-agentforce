import os
from simple_salesforce import Salesforce
from events import emit_event
from dotenv import load_dotenv

load_dotenv()

class SalesforceClient:
    def __init__(self):
        self.sf = Salesforce(
            username=os.getenv('SF_USERNAME'),
            password=os.getenv('SF_PASSWORD'),
            security_token=os.getenv('SF_SECURITY_TOKEN'),
            domain=os.getenv('SF_DOMAIN', 'login')
        )

    async def get_order(self, order_number, account_id):
        """Fetch order using only standard fields for initial verification."""
        
        # We removed ScheduledDeliveryDate__c and ShipmentStatus__c for now
        # to ensure the query succeeds on standard objects.
        query = f"""
            SELECT Id, OrderNumber, Status, 
                (SELECT Product2.Name, Quantity 
                 FROM OrderItems) 
            FROM Order 
            WHERE OrderNumber = '{order_number}' 
            AND AccountId = '{account_id}' 
            LIMIT 1
        """
        
        await emit_event('salesforce_query', 'order_status', {"soql": "Standard Order lookup"})
        
        try:
            results = self.sf.query(query)
            return results['records'][0] if results['totalSize'] > 0 else None
        except Exception as e:
            # This will show the specific Salesforce error in your Demo Log
            await emit_event('agent_error', 'order_status', {"error": str(e)})
            raise e