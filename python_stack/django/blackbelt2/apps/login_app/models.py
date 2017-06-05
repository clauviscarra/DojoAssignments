from __future__ import unicode_literals

from django.db import models
from datetime import datetime
import re
date_regex = re.compile(r'^(\d+-\d+-\d+)+$')
email_regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
    def login(self, login_data):
        flag = True
        errors = []

        if  len(login_data['password']) < 8:
            flag = False
            errors.append('Please enter password')
        if not User.objects.filter(email = login_data['email']):
            flag = False
            errors.append('You are not in our data base, please register.')
        if not User.objects.filter(password = login_data['password']):
            flag = False
            errors.append('Your password is incorrect.')


        if flag:
            return True
        else:
            return (False, errors)
    def register(self, register_data):
        flag = True
        errors =[]
        if len(register_data['name']) < 1:
            flag = False
            errors.append('Please enter name.')

        if len(register_data['alias']) < 1:
            flag = False
            errors.append('Please enter alias.')

        if len(register_data['email']) < 1:
            flag = False
            errors.append('Please enter email.')

        elif  not email_regex.match(register_data['email']):
            flag = False
            errors.append('Please enter valid email.')


        if User.objects.filter(email=register_data['email']):
            flag = False
            errors.append('You cannot register twice.')

        if  len(register_data['password']) < 8:
            flag = False
            errors.append('Password not long enough.')
        elif (register_data['password']) != (register_data['confirm']):
            flag = False
            errors.append('Password does not match.')
        if not date_regex.match(register_data['dob']):
            errors.append('Please enter a date with the correct format.')
            return (False,errors)

        if not register_data['dob']:
            return (False, errors)
            errors.append('Please fill your date file propperly.')

        startdate = datetime.strptime(register_data['dob'],'%Y-%m-%d')

        if startdate > datetime.now():
            flag = False
            errors.append('You cannot be born in the past.')


        if flag:
            new_user = User.objects.create(name=register_data['name'], alias = register_data['alias'], email=register_data['email'], password=register_data['password'])
            return (True, new_user)
        else:
            return (False, errors)

class User(models.Model):
    name=models.CharField(max_length=255)
    alias=models.CharField(max_length=255)
    email =models.CharField(max_length=255)
    password=models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()


# Create your models here.
