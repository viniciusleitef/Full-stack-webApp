from pydantic import BaseModel

class UserCredentials(BaseModel):
    email: str
    password: str

    class Config:
        orm_mode =True