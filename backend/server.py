from fastapi import FastAPI, HTTPException, status
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from pymongo.collection import ReturnDocument
from bson import ObjectId
from typing import List
import os

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# MongoDB connection
client = MongoClient(os.getenv('MONGO_URI', 'mongodb://localhost:27017'))
db = client['codeshare_db']
sessions_collection = db.sessions

class Session(BaseModel):
    id: str
    time: str
    users: List[str]
    code: str

@app.post("/sessions/", response_model=Session, status_code=status.HTTP_201_CREATED)
def create_session(session: Session):
    new_session = jsonable_encoder(session)
    new_session_id = sessions_collection.insert_one(new_session).inserted_id
    created_session = sessions_collection.find_one({"_id": new_session_id})
    return created_session

@app.get("/sessions/get/{session_id}", response_model=Session)
def read_session(session_id: str):
    session = sessions_collection.find_one({"id": session_id})
    if session is not None:
        return session
    raise HTTPException(status_code=404, detail=f"Id {session_id} not found")

@app.put("/sessions/update/{session_id}", response_model=Session)
def update_session(session_id: str, session: Session):
    updated_session = sessions_collection.find_one_and_update(
        {"id": session_id},
        {"$set": jsonable_encoder(session)},
        return_document=ReturnDocument.AFTER
    )
    if updated_session is not None:
        return updated_session
    raise HTTPException(status_code=404, detail=f"Id {session_id} not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
