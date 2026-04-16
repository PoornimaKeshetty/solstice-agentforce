import asyncio
import uuid
import time
from typing import Dict, Any, Optional

event_queue = asyncio.Queue()
_run_id = str(uuid.uuid4())

def reset_run_id():
    """Resets the global run_id to a new uuid4 string."""
    global _run_id
    _run_id = str(uuid.uuid4())
    return _run_id

async def emit_event(type: str, agent: str, payload: Optional[Dict[str, Any]] = None):
    """
    Puts a JSON-serialisable dict onto the event queue.
    """
    if payload is None:
        payload = {}
    
    event = {
        "type": type,
        "agent": agent,
        "timestamp": time.time(),
        "payload": payload,
        "run_id": _run_id
    }
    
    await event_queue.put(event)

__all__ = ["emit_event", "event_queue", "reset_run_id"]
