from django.shortcuts import render, redirect, HttpResponse
import random


def index(request):
    if not 'total_score' :
        request.session['total_score'] = 0
    else:
        pass

    return render(request,'randomizer/index.html')

def random(request):
    # words = ['cat', 'dog', 'leaf', 'internet']
    #
    # context = {
    # 'random': random.choice(words)
    # }

    if request.method == 'POST':

        request.session['total_score'] += 1



    return redirect('/')
#
def clear(request):
    request.session.clear()
    return redirect('/')
