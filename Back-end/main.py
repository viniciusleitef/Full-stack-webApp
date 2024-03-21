from fastapi import FastAPI
from database import SessionLocal, Base, engine
from model import models
from schemas.user import UserSchema
from controller.user import get_user_by_email_db, get_all_users_db, create_user_db

Base.metadata.create_all(bind=engine) 
db = SessionLocal()

app = FastAPI()

@app.get("/")
async def root():
    return {"message":"Hello world!"}

@app.get("/user/all")
async def get_all_user():
    return get_all_users_db(db)

@app.get("/user/email/{email}")
async def get_user_by_email(email:str):
    return get_user_by_email_db(db, email)

@app.post("/user")
async def create_user(user: UserSchema):
    return create_user_db(db, user)


