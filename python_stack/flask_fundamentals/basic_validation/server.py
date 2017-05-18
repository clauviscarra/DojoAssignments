from flask import Flask, render_template, redirect, request, session, flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key ="KeepItSecretKeepItSafe"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    if len(request.form['name']) < 1:
        flash('Name cannot be empty!')
        #display validation error
    else:
        flash('Success! Your name is {}'.format(request.form['name']))#display success message
    print len(request.form['name'])
    return redirect('/')

app.run(debug=True)

#Flash messages are strings that exist for oone redirect cycle.
#Flash messages are accessible thru embedded python tags {{}} {%%}
#Flash only lasts one redirect, session stays until manually popped.

#Regular expression/regex --> validates email
