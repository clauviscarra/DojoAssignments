from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
@app.route('/')

def index():
    return render_template('index.html')

@app.route('/submission', methods = ['POST'])

def submission_():
    print "Got your imput"
    name = request.form['name']
    # value = request.form['value']
    textarea = request.form['textarea']

    return render_template('submission.html', name = name, textarea = textarea)


app.run(debug=True)
