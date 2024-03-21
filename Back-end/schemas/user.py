from pydantic import BaseModel

class UserSchema(BaseModel):
    firstName: str
    email: str
    lastName:str
    email: str
    cel: int
    password: str
    gender: str

    class Config:
        orm_mode =True