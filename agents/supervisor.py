import json
import os
from agents.base import BaseAgent
from events import emit_event

class SupervisorAgent(BaseAgent):
    agent_name = "supervisor"

    async def run(self, message):
        await emit_event('agent_start', self.agent_name)
        
        # 1. Intent Classification - Comprehensive Prompt
        system_prompt = """
        You are the Supervisor Agent for Solstice Advanced Materials.
        Classify the user message into one of: GREETING, ORDER_STATUS, PRODUCT_SPEC, EXPEDITE, FAREWELL, or UNKNOWN.
        
        Intent Definitions:
        - GREETING: User says hello, hi, good morning, how are you, etc.
        - FAREWELL: User says thank you, thanks, goodbye, bye, have a good day, etc.
        - ORDER_STATUS: User asks about an order, shipping, delivery, or tracking.
        - PRODUCT_SPEC: User asks about chemical properties, safety data sheets (SDS), or technical specifications.
        - EXPEDITE: User wants to speed up delivery, needs it sooner, or asks to 'expedite'.
        
        Return ONLY valid JSON:
        {
          "intent": "GREETING" | "ORDER_STATUS" | "PRODUCT_SPEC" | "EXPEDITE" | "FAREWELL" | "UNKNOWN",
          "confidence": 0.0-1.0,
          "entities": {
            "order_number": "numeric string if present",
            "product_name": "string if present"
          }
        }
        """
        
        try:
            raw_response = await self.call_llm(system_prompt, message)
            # Remove any markdown formatting if present
            clean_json = raw_response.replace('```json', '').replace('```', '').strip()
            classification = json.loads(clean_json)
            
            intent = classification.get("intent")
            confidence = classification.get("confidence", 0)
            entities = classification.get("entities", {})

            # --- ROUTING LOGIC ---

            # Handle Greetings
            if intent == "GREETING":
                await emit_event('agent_complete', self.agent_name, {"outcome": "greeted"})
                return {
                    "message": "Hello! I'm your Solstice Assistant. I can help you track your orders, check product specifications, answer technical questions about our materials, or even request an expedite for urgent shipments. How can I assist you today?",
                    "status_lines": ["Processing greeting... ✓"]
                }

            # Handle Farewells / Thanks
            if intent == "FAREWELL":
                await emit_event('agent_complete', self.agent_name, {"outcome": "farewell"})
                return {
                    "message": "You're very welcome! If you need anything else, we're right here. Have a stellar day!",
                    "status_lines": ["Processing farewell... ✓"]
                }

            # Handle Order Status
            if intent == "ORDER_STATUS" and confidence >= 0.7:
                order_num = entities.get("order_number")
                
                # REFINEMENT: If order number is missing, ask for it nicely
                if not order_num:
                    await emit_event('agent_complete', self.agent_name, {"outcome": "missing_info"})
                    return {
                        "message": "I'd be happy to check your order status! Could you please provide your order number?",
                        "status_lines": ["Order intent detected... ✓", "Requesting order number... ✓"]
                    }
                
                # If we have the number, proceed to the specialized agent
                from agents.order_status.agent import OrderStatusAgent
                agent = OrderStatusAgent(self.session_id, self.surface, self.account_id)
                result = await agent.run(entities=entities)
                await emit_event('agent_complete', self.agent_name)
                return result

            # Handle Product Spec (Placeholder for Use Case 2)
            if intent == "PRODUCT_SPEC" and confidence >= 0.7:
                # Placeholder logic for RAG implementation
                return {
                    "message": "I see you're asking about product specifications. I'm currently connecting to our technical documentation library to find that for you.",
                    "status_lines": ["Product intent detected... ✓"]
                }

            # 3. Handle Expedite (UC5)
            if intent == "EXPEDITE":
                from agents.expedite.agent import ExpediteAgent
                agent = ExpediteAgent(self.session_id, self.surface, self.account_id)
                return await agent.run(entities=entities)
            # Default fallback for unknown intents or low confidence
            await emit_event('agent_complete', self.agent_name, {"outcome": "unknown"})
            return {
                "message": "I'm not quite sure I understand. To help you best, could you please provide an order number (e.g., 00000150) or ask a specific product question?",
                "status_lines": ["Classification uncertain..."]
            }
            
        except Exception as e:
            await emit_event('agent_error', self.agent_name, {"error": str(e)})
            return {"message": "An error occurred during classification.", "status_lines": ["Error!"]}