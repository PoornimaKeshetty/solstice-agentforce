import os
import json
import uvicorn
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from sse_starlette.sse import EventSourceResponse
from dotenv import load_dotenv

# Import events, run ID management, and event emitter
from events import event_queue, reset_run_id, emit_event

# Load environment variables (API keys, etc.)
load_dotenv(override=True)

# ── Startup Diagnostics (visible in Render Logs) ──
_api_key = os.getenv('OPENROUTER_API_KEY')
_base_url = os.getenv('OPENROUTER_BASE_URL')
_model = os.getenv('MODEL')
print(f"[STARTUP] OPENROUTER_API_KEY loaded: {bool(_api_key)} (length: {len(_api_key) if _api_key else 0})")
print(f"[STARTUP] OPENROUTER_BASE_URL: {_base_url}")
print(f"[STARTUP] MODEL: {_model}")

app = FastAPI(title="Solstice Agentic Mesh")

# Enable CORS to allow the React frontend to communicate with this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    """Redirects the base URL to the Demo Log dashboard."""
    return RedirectResponse(url="/demo-log")

@app.get("/demo-log", response_class=HTMLResponse)
async def get_demo_log():
    """Serves the dashboard HTML file from the templates folder."""
    try:
        # Note: Ensure you have created a 'templates' folder in your project root
        with open("templates/demo_log.html", "r") as f:
            return f.read()
    except FileNotFoundError:
        return HTMLResponse(
            content="<h1>Error: templates/demo_log.html not found</h1><p>Please ensure you have created the folder and the file.</p>", 
            status_code=404
        )

@app.get("/events")
async def events(request: Request):
    """
    SSE Endpoint for the Demo Log page. 
    Streams agent activity JSON data to the browser.
    """
    async def event_generator():
        while True:
            # Check if the user closed the browser tab
            if await request.is_disconnected():
                break
            
            # Fetch data from the shared event queue
            data = await event_queue.get()
            
            # Yield as a formatted SSE event (must be a JSON string)
            yield {
                "data": json.dumps(data)
            }
            
    return EventSourceResponse(event_generator())

@app.post("/api/message")
async def handle_message(payload: dict):
    """
    Main entry point for chat messages.
    Triggers the Agentic Mesh logic starting with the Supervisor.
    """
    from agents.supervisor import SupervisorAgent
    
    # 1. Reset the dashboard UI for a fresh run
    await emit_event("run_reset", "system")
    
    # 2. Generate a new Run ID for trace tracking
    reset_run_id()
    
    # 3. Initialize the Supervisor with context from the request
    agent = SupervisorAgent(
        session_id=payload.get("session_id", "default-session"),
        surface=payload.get("surface", "portal"),
        account_id=payload.get("account_id")
    )
    
    # 4. Run the agent mesh and return the final response
    response = await agent.run(message=payload.get("message"))
    return response

if __name__ == "__main__":
    # Start the server locally on port 8000
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
