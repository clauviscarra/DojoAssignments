from flask import Flask, render_template, redirect, request, session, flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key ="KeepItSecretKeepItSafe"

@app.route('/', methods=['GET','POST'])
def index():
  return render_template("index.html")
@app.route('/process', methods=['POST'])
def submit():
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
    # else if email doesn't match regular expression display an "invalid email address" message
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid E-Mail Address!")
    else:
        flash('Success! Your e-mail is {}'.format(request.form['email']))#display success message
    return redirect('/')

app.run(debug=True)


#Regular expression/regex --> validates email
