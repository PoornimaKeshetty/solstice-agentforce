import os
import random
import time
from simple_salesforce import Salesforce
from dotenv import load_dotenv

# Load credentials from your .env file
load_dotenv()

def bulk_update_orders():
    print("--- Solstice Data Utility: Bulk Order Update ---")
    
    try:
        # 1. Connect to Salesforce
        print("Connecting to Salesforce...")
        sf = Salesforce(
            username=os.getenv('SF_USERNAME'),
            password=os.getenv('SF_PASSWORD'),
            security_token=os.getenv('SF_SECURITY_TOKEN'),
            domain=os.getenv('SF_DOMAIN', 'login')
        )
        print("Connection successful.")

        # 2. Fetch all Orders and their Account IDs
        print("Fetching existing Orders...")
        orders_query = sf.query("SELECT Id, AccountId, OrderNumber, Status FROM Order")
        orders = orders_query['records']
        print(f"Found {len(orders)} orders to process.")

        # 3. Identify unique Accounts
        unique_account_ids = list(set([o['AccountId'] for o in orders]))
        print(f"Detected {len(unique_account_ids)} unique Accounts requiring matched Contracts.")

        # 4. Create/Find an Activated Contract for each unique Account
        # Salesforce requires the Order Account to match the Contract Account
        account_to_contract = {}
        for acc_id in unique_account_ids:
            try:
                # Check if an activated contract already exists for this account
                existing = sf.query(f"SELECT Id FROM Contract WHERE AccountId = '{acc_id}' AND Status = 'Activated' LIMIT 1")
                
                if existing['totalSize'] > 0:
                    contract_id = existing['records'][0]['Id']
                    account_to_contract[acc_id] = contract_id
                    print(f"  > Using existing contract for Account {acc_id}")
                else:
                    # Create a new contract
                    print(f"  > Creating new Contract for Account {acc_id}...")
                    contract_res = sf.Contract.create({
                        'AccountId': acc_id,
                        'Status': 'Draft',
                        'StartDate': '2026-01-01',
                        'ContractTerm': 12
                    })
                    contract_id = contract_res['id']
                    
                    # Activate the contract immediately (Orders require Activated status)
                    sf.Contract.update(contract_id, {'Status': 'Activated'})
                    account_to_contract[acc_id] = contract_id
            except Exception as e:
                print(f"  ! Warning: Could not process account {acc_id}: {str(e)}")

        # 5. Perform the Bulk Update
        # Using a mix of your new statuses: Confirmed, Processing, Payment Pending, In Transit
        new_statuses = ["Confirmed", "Processing", "Payment Pending", "In Transit"]
        
        print(f"\nUpdating {len(orders)} Orders with realistic statuses...")
        success_count = 0
        
        for order in orders:
            acc_id = order['AccountId']
            if acc_id in account_to_contract:
                try:
                    # Update the Order with the matched Contract and a random status
                    sf.Order.update(order['Id'], {
                        'ContractId': account_to_contract[acc_id],
                        'Status': random.choice(new_statuses)
                    })
                    success_count += 1
                    if success_count % 10 == 0:
                        print(f"  Processed {success_count}/{len(orders)} orders...")
                except Exception as e:
                    print(f"  ! Error updating Order {order['OrderNumber']}: {str(e)}")
            else:
                print(f"  ! Skipping Order {order['OrderNumber']}: No valid contract available.")

        print(f"\nDONE! {success_count} orders successfully updated.")
        print("Refresh your Salesforce Org to see the changes.")

    except Exception as e:
        print(f"\nCRITICAL ERROR: {str(e)}")

if __name__ == "__main__":
    bulk_update_orders()
