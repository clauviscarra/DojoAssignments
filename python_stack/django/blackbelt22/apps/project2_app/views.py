# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import Quote, User_Quote, User
from django.shortcuts import render, redirect
from django.contrib import messages
from sets import Set

def quotes(request):
    a = set(Quote.objects.all())
    b = set(Quote.objects.filter(fave_quote__user_quote__email=request.session['user_email']))
    excluded_quotes = (a.difference(b))

    context = {
    'all_quotes' :  Quote.objects.all(),
    'excluded_quotes':excluded_quotes,
    # 'excluded_quotes' : Quote.objects.exclude(created_by=request.session['user_email']),
    'fave_quotes': User_Quote.objects.filter(user_quote__email=request.session['user_email'])
    }
    return render (request, 'project2_app/index.html', context)

def makequote(request):
    session = request.session['user_email']
    makequote_result =Quote.objects.add_quote(request.POST, session)

    if makequote_result[0]:
        messages.info(request,'You have added a quote!')
        return redirect ('/quotes')

    else:
        for i in makequote_result[1]:
            messages.info(request,i)
        return redirect ('/quotes')

def favequote(request, quote_id):

    q1 = Quote.objects.filter(id= quote_id)
    u1 = User.objects.filter(email =  request.session['user_email'])

    quote_fave = User_Quote.objects.create(user_quote=u1[0], my_favorites=q1[0])
    

    return redirect ('/quotes')

def remove_quote(request, quote_id):
    User_Quote.objects.filter(my_favorites__id= quote_id).filter(user_quote__email=request.session['user_email']).delete()


    return redirect ('/quotes')

def userinfo(request, created_by):
    request.session['created_by'] = created_by
    context = {
    'username' : User.objects.filter(email=request.session['created_by']),
    'userinfo': Quote.objects.filter(created_by=request.session['created_by']),
    'total_quotes':Quote.objects.filter(created_by=request.session['created_by']).count()
    }

    return render (request,'project2_app/users.html', context)

# Create your views here.
