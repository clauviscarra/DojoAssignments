from flask import Flask, render_template, request, session
app = Flask(__name__)
app.secret_key= 'key'

@app.route('/')
def index():

    if 'counter' in session:
        session['counter'] += 1


    return render_template('index.html')

@app.route('/plustwo')
def plustwo_():


    return render_template('plustwo.html')

app.run(debug=True)
