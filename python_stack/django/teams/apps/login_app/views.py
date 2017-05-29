from django.shortcuts import render,redirect
from .models import User, UserManager
from django.contrib import messages


def index(request):
    return render(request,'login_app/login.html')

def login(request):
    result = User.objects.login(request.POST)
    request.session['user_email'] = request.POST['email']
    user_email = request.session['user_email']

    if result == True:
        return redirect ('/success')
    else:
        for i in result[1]:
            messages.info(request,i)
        return redirect('/')

def register_page(request):
    return render(request,'login_app/register.html')

def register_process(request):
    result2 = User.objects.register(request.POST)
    request.session['user_email'] = request.POST['email']



    if result2[0]:
        return redirect ('/success')
    else:
        for i in result2[1]:
            messages.info(request,i)
        return redirect('/register')

    return render(request,'login_app/register.html')
def success(request):

    return redirect ('teams/success')
# Create your views here.
