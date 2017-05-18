from flask import Flask, render_template, redirect, session, request
from datetime import datetime
import random
app= Flask(__name__)

app.secret_key='Key'

@app.route('/', methods =['GET', 'POST'])
def index():
    if 'total_gold' not in session:
        session['total_gold'] = 0
        session['log']=[]
    else:
        pass
    return render_template('index.html')

@app.route('/process_money', methods=['GET', 'POST'])

def gold_earnings():
    if(request.form['building'] == 'farm'):
        gold = random.randrange(10, 20)
        session['total_gold'] += gold
        session['log'].insert(0,('You have earned {} gold - {}'.format(gold,datetime.now())))
    elif(request.form['building'] =='cave'):
        gold = random.randrange(5,10)
        session['total_gold'] += gold
        session['log'].insert(0,('You have earned {} gold - {}'.format(gold,datetime.now())))
    elif(request.form['building']=='house'):
        gold = random.randrange(2,5)
        session['total_gold'] += gold
        session['log'].insert(0,('You have earned {} gold - {}'.format(gold,datetime.now())))
    elif(request.form['building'] =='casino'):
        gold = random.randrange(-50, 50)
        session['total_gold'] += gold
        session['log'].insert(0,('You have earned {} gold - {}'.format(gold,datetime.now())))

    return redirect('/')

@app.route('/reset')
def reset_():
    session.clear()
    return redirect('/')

app.run(debug=True)
