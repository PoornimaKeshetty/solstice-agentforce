import os
from openai import OpenAI
from events import emit_event
from dotenv import load_dotenv

load_dotenv(override=True)

class BaseAgent:
    def __init__(self, session_id, surface, account_id):
        self.session_id = session_id
        self.surface = surface
        self.account_id = account_id
        # Use the OpenAI client with OpenRouter's base URL [cite: 31, 465]
        self.client = OpenAI(
            api_key=os.getenv('OPENROUTER_API_KEY'),
            base_url=os.getenv('OPENROUTER_BASE_URL')
        )

    async def run(self, **kwargs):
        """Subclasses must override this."""
        raise NotImplementedError("Subclasses must implement run()")

    async def call_llm(self, system_prompt, user_message):
        """Helper to call OpenRouter via the OpenAI client."""
        model = os.getenv('MODEL', 'nvidia/nemotron-3-super-120b-a12b:free')
        response = self.client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_message}
            ]
        )
        # Emit event for the Demo Log [cite: 106, 465]
        await emit_event('llm_call', self.agent_name, {"model": model})
        return response.choices[0].message.content