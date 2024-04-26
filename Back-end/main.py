from fastapi import FastAPI
from database import SessionLocal, Base, engine
from model import models
from schemas.user import UserSchema 
from schemas.userCredentials import UserCredentials
from controller.user import get_user_by_email_db, get_all_users_db, create_user_db, verify_login_db
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine) 
db = SessionLocal()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message":"Hello world!"}

@app.get("/user/all")
async def get_all_user():
    return get_all_users_db(db)

@app.get("/user/email/{email}")
async def get_user_by_email(email:str):
    return get_user_by_email_db(db, email)

@app.post("/user/login")
async def verify_login(user_credentials: UserCredentials):
    return verify_login_db(db, user_credentials)

@app.post("/user")
async def create_user(user: UserSchema):
    return create_user_db(db, user)


