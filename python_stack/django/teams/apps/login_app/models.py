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
            errors.append('Please enter e-mail.')
        elif  not email_regex.match(login_data['email']):
            errors.append('Please enter valid email')
            flag = False
        if  len(login_data['password']) < 1:
            flag = False
            errors.append('Please enter password.')
        elif not User.objects.filter(email = login_data['email']):
            flag = False
            errors.append('You are not in our data base, please register.')
        elif not User.objects.filter(password = login_data['password']):
            flag = False
            errors.append('Your password is wrong.')

        if flag:
            return True
        else:
            return (False, errors)
    def register(self, register_data):
        flag = True
        errors =[]

        if len(register_data['first_name']) < 1:
            flag = False
            errors.append('Please enter First Name.')
        if len(register_data['last_name']) < 1:
            flag = False
            errors.append('Please enter Last Name.')
        if  len(register_data['email']) < 1:
            flag = False
            errors.append('Please enter e-mail')
        if User.objects.filter(email=register_data['email']):
            flag = False
            errors.append('You cannot register twice.')
        elif  not email_regex.match(register_data['email']):
            errors.append('Please enter valid email.')
            flag = False
        if  len(register_data['password']) < 1:
            flag = False
            errors.append('Please enter password.')
        elif (register_data['password']) != (register_data['confirm']):
            errors.append('Password does not match.')
            flag = False
        if flag:
            new_user = User.objects.create(first_name=register_data['first_name'], last_name=register_data['last_name'], email=register_data['email'], password=register_data['password'])
            return (True, new_user)
        else:
            return (False, errors)

class User(models.Model):
    first_name = models.CharField(max_length=255, default=True)
    last_name = models.CharField(max_length=255, default=True)
    email = models.CharField(max_length=255, default=True)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    objects = UserManager()
# Create your models here.
