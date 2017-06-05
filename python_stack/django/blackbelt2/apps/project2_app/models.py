# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from ..login_app.models import User

class UserManager(models.Manager):
    def add_quote(self, quote_data, session):
        flag = True
        errors = []

        if  len(quote_data['quote_by']) < 3:
            flag = False
            errors.append('Please enter quote author')
        if  len(quote_data['message']) < 10:
            flag = False
            errors.append('Please enter quote')


        if flag:
            new_quote = Quote.objects.create(quote_by=quote_data['quote_by'], created_by = session, message = quote_data['message'])
            return (True, new_quote)
        else:
            return (False,errors)

class Quote(models.Model):
    quote_by= models.CharField(max_length=255)
    created_by=models.CharField(max_length=255)
    message = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class User_Quote(models.Model):
    user_quote = models.ForeignKey(User, related_name='userquote')
    my_favorites = models.ForeignKey(Quote, related_name='fave_quote')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

# Create your models here.
