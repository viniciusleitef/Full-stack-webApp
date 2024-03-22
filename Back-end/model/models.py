from database import Base
from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import Mapped, mapped_column

class User(Base):
    __tablename__ = "user"
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    firstName: Mapped[str] = mapped_column(String[20], nullable=False, unique=False)
    lastName: Mapped[str] = mapped_column(String[20], nullable=False, unique=False)    
    email: Mapped[str] = mapped_column(String[30], nullable=False, unique=True)
    cel: Mapped[str] = mapped_column(String[11], nullable=False, unique=False)
    password: Mapped[str] = mapped_column(String[55], nullable=False, unique=False)
    gender: Mapped[str] = mapped_column(String[20], nullable=False, unique=False)   
    