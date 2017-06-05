from __future__ import unicode_literals
from django.shortcuts import render,redirect
from .models import User
from django.contrib import messages


def index(request):

    return render(request,'login_app/login.html')

def login(request):
    result = User.objects.login(request.POST)
    request.session['user_email'] = request.POST['email']

    if result == True:
        return redirect('/quotes')
    else:
        for i in result[1]:
            messages.info(request,i)
        return redirect ('/')

def register(request):
    return render (request,'login_app/register.html')

def register_process(request):
    result2 = User.objects.register(request.POST)
    request.session['user_email'] = request.POST['email']

    if result2[0]:
        return redirect ('/quotes')

    else:
        for i in result2[1]:
            messages.info(request,i)
        return redirect ('/register')

def logout(request):
    print request.session['user_email']
    request.session.clear()
    return redirect ('/')


# Create your views here.
