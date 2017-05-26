# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import User, Message, Comment

from django.shortcuts import render

def index(request):
    return render(request,'wall_app/index.html')
# Create your views here.
