from pydantic import BaseModel

class UserSchema(BaseModel):
    firstName: str
    lastName:str
    email: str
    email: str
    cel: str
    password: str
    gender: str

    class Config:
        orm_mode =True