from django.shortcuts import render, HttpResponse, redirect
import random
from datetime import datetime

def index(request):
    if 'total_gold' not in request.session:
        request.session['total_gold'] = 0
        request.session['log']=[]
    else:
        pass
    return render(request,'ninja_app/index.html')

def process_money(request):
    if request.POST['building'] == 'farm':
        gold = random.randrange(10,20)
        request.session['total_gold'] += gold
        request.session['log'].insert(0,('You have earned {} gold - {}'.format(gold,datetime.now())))
    elif request.POST['building'] == 'cave':
        gold = random.randrange(5,10)
        request.session['total_gold'] += gold
        request.session['log'].insert(0,('You have earned {} gold - {}'.format(gold,datetime.now())))
    elif request.POST['building'] == 'house':
        gold = random.randrange(2,5)
        request.session['total_gold'] += gold
        request.session['log'].insert(0,('You have earned {} gold - {}'.format(gold,datetime.now())))
    elif request.POST['building'] == 'casino':
        gold = random.randrange(-50,50)
        request.session['total_gold'] += gold
        request.session['log'].insert(0,('You have earned {} gold - {}'.format(gold,datetime.now())))

    return redirect ('/')

def reset(request):
    request.session.clear()
    return redirect ('/')
