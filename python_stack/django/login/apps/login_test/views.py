from django.shortcuts import render, redirect
from .models import User, UserManager
from django.contrib import messages


def index(request):

    return render(request, 'login_test/index.html')

def login(request):
    result = User.objects.login(request.POST)

    if result == True:
        return redirect ('/success')
    else:
        for i in result[1]:
            messages.info(request,i)
        return redirect('/')

def registration (request):
    result2 = User.objects.register(request.POST)
    context = {
    'all_users':User.objects.all(),
    'new_user' : result2
    }
    print result2[1]
    if result2[0]:
        return render(request, 'login_test/success.html', context)
    else:
        for i in result2[1]:
            messages.info(request,i)
        return redirect('/')

def success(request):


    return render(request, 'login_test/success.html')
# Create your views here.
