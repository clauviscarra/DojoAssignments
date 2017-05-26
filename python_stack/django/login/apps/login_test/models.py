from __future__ import unicode_literals
from django.shortcuts import render, redirect
from django.db import models
import re
email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
    def login(self, login_data):
        flag = True
        errors =[]
        if  len(login_data['email']) < 1:
            flag = False
            errors.append('Email too short')
        if  len(login_data['password']) < 1:
            flag = False
            errors.append('Password too short')

        if flag:
            return True
        else:
            return (False, errors)


    def register(self, register_data):
        flag = True
        errors =[]
        if  len(register_data['first_name']) < 1:
            errors.append('Name too short')
            flag = False
        if  len(register_data['last_name']) < 1:
            errors.append('Last name too short')
            flag = False
        if not register_data["first_name"].isalpha() and not register_data["last_name"].isalpha():
            flag = False
            errors.append('Please enter valid characters for name.')
        if  not email_regex.match(register_data['email']):
            errors.append('Invalid email')
            flag = False
        if len(register_data['password']) < 8:
            errors.append('Password too short')
        if (register_data['password']) != (register_data['confirm']):
            errors.append('Password does not match')
            flag = False

        if flag:
            new_user = User.objects.create(first_name=register_data['first_name'], last_name=register_data['last_name'], email=register_data['email'],password=['password'])


            return(True, new_user)
        else:
            return(False, errors)

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, default=True)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    objects = UserManager()




# Create your models here.
