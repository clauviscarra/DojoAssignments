from flask import Flask, render_template, request, redirect, session, flash
import re
app = Flask(__name__)
app.secret_key ="KeepItSecretKeepItSafe"

@app.route('/')

def index():
    return render_template('index.html')

@app.route('/submission', methods = ['POST'])

def submission_():

    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comments = request.form['comments']

    if len(request.form['name']) < 1:
        flash('Name cannot be empty!')
        return redirect('/')

    elif len(request.form['location']) < 1:
        flash('Location cannot be empty!')
        return redirect('/')
    elif len(request.form['language']) < 1:
        flash('Location cannot be empty!')
        return redirect ('/')
    elif len(request.form['comments']) < 1:
        flash('Comments cannot be empty!')
        return redirect ('/')
    elif len(request.form['comments']) > 120:
        flash('Comments too long! Keep under 120 characters')
        return redirect ('/')
    else:
        flash('Success! Your name is {}'.format(request.form['name']))#display success message
        return render_template('submission.html', name = name, location = location, language = language ,comments = comments)




app.run(debug=True)
