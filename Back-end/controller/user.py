from schemas.user import UserSchema
from schemas.userCredentials import UserCredentials
from model.models import User
from fastapi import HTTPException
from sqlalchemy.orm import Session
from services.auth import generate_JWT_token

def get_all_users_db(db:Session):
    users = db.query(User).all
    if users is None:
        raise HTTPException(status_code=404, detail="Não tem nenhum cliente cadastrado")
    return users

def get_user_by_email_db(db:Session, email):
    user = db.query(User).filter(User.email == email).first()
    if user is None:
        raise HTTPException(status_code=400, detail= "Usuário não encontrado")
    
    return user


def create_user_db(db:Session, user:UserSchema):
    
    db_user = db.query(User).filter(User.email == user.email).first()
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

def verify_login_db(db:Session, user:UserSchema):
    email = user.email
    password = user.password

    db_user = db.query(User).filter(User.email == email).first()
    if db_user is None:
        return HTTPException(status_code=400, detail= "Email não existe")
    elif password != db_user.password:
        return HTTPException(status_code=400, detail= "Senha incorreta")
    
    token = {'token': ""}
    token["token"] = generate_JWT_token(db_user.id)
    
    return token