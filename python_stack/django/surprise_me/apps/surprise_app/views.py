from django.shortcuts import render, redirect
import random
VALUES = ['Arif', 'it is me, Mario!', 'Eugene', 'validation', 'jill gets beer every day', 'pizza', 'pasta']

def index(request):
    random.shuffle(VALUES)
    print VALUES
    return  render(request,'surprise_app/index.html')

def process(request):
    request.session['number'] = request.POST['number']
    number = request.session['number']
    i = 0
    request.session['log'] = []
    while i < int(number):

        i += 1
        request.session['log'].insert(0,(VALUES[i]))

    return redirect ('/surprise')


def surprise(request):

    return render (request, 'surprise_app/surprises.html')


# Create your views here.
