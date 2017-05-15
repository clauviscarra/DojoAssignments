from flask import Flask, render_template, redirect, session, request
import random
app= Flask(__name__)

app.secret_key='Key'

@app.route('/', methods =['GET', 'POST'])
def index():
    session['total_gold'] = 0
    return render_template('index.html')

@app.route('/process_money', methods=['GET', 'POST'])

def gold_earnings():
    if(request.form['building'] == 'farm'):
        gold = random.randrange(10, 20)
        session['total_gold'] += gold
    elif(request.form['building'] =='cave'):
        gold = random.randrange(5,10)
        session['total_gold'] += gold
    elif(request.form['building']=='house'):
        gold = random.randrange(2,5)
        session['total_gold'] += gold
    elif(request.form['building'] =='casino'):
        gold = random.randrange(-50, 50)
        session['total_gold'] += gold
        if session['total_gold'] < 0:
            return render_template('index.html', message = "Oh no!!! You've lost all of your gold!")
    place = request.form['building']
    return render_template('index.html', message = "Golds earned from ", place = place, gold = gold)


app.run(debug=True)
