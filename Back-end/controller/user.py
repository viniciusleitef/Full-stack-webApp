from schemas.user import UserSchema
from model.models import User
from fastapi import HTTPException
from sqlalchemy.orm import Session


def get_all_users_db(db:Session):
    users = db.query(User).all
    if len(users) <= 0:
        raise HTTPException(status_code=404, detail="Não tem nenhum cliente cadastrado")
    return users

def get_user_by_email_db(db:Session, email):
    user = db.query(User).filter(User.email == email).first()
    if user is None:
        raise HTTPException(status_code=400, detail= "Usuário não encontrado")
    
    return user


def create_user_db(db:Session, user:UserSchema):
    
    db_user = db.query(User). filter(User.email == user.email).first()
    if db_user is not None:
        raise HTTPException(status_code=400,detail="Usuário já cadastrado")

    new_user = User(
        firstName = user.firstName,
        lastName = user.lastName,
        email = user.email,
        cel = user.cel,
        password = user.password,
        gender = user.gender
    )

    db.add(new_user)
    db.commit()

    return new_user 