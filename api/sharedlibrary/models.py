from typing import Text
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql.expression import column
# from sqlalchemy.sql.sqltypes import TEXT
from sharedlibrary.database import Base


# class User(Base):
#     __tablename__ = "user_detail"

#     id = Column(Integer, primary_key=True, index=True)
#     user_name = Column(String)
#     email = Column(String)
#     password = Column(String)


# class Course(Base):
#     __tablename__="course_detail"
    
#     id = Column(Integer, primary_key=True, index=True)
#     course_name= Column(String)
#     image_url=Column(String)
#     price=Column(String)
#     rating=Column(String)

# class Favourite(Base):
#      __tablename__ = 'favourite'  
#      id = Column(Integer, primary_key=True, index=True)
#      user_name=Column(String)
#      course_name= Column(String)
#      image_url=Column(String)
#      price=Column(String)
#      rating=Column(String)
class Favourite(Base): 
    __tablename__ = "favourite"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    course_id = Column(Integer, ForeignKey('courses.id')) 
    user = relationship("User", back_populates="courses")
    course = relationship("Course", back_populates="users")

class User(Base):
    __tablename__= "users"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)
    courses = relationship('Favourite', back_populates='user')
class Course(Base):
    __tablename__ = "courses"
    id = Column(Integer, primary_key=True)
    course_name= Column(String)
    image_url=Column(String)
    price=Column(String)
    rating=Column(String)
    users = relationship('Favourite', back_populates='course')
