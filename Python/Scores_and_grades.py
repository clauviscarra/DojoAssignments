import random

def scores():

    for y in range(0,20):
        grade = random.randint(60,100)

        if grade <= 69:
            print "Score: ", grade, ";", " your grade is a D."
        elif grade >= 70 and grade <= 79:
            print "Score: ", grade, ";", " your grade is a C."
        elif grade >= 80 and grade <= 89:
            print "Score: ", grade,  ";", " your grade is a B."
        else:
            print "Score: ", grade,  ";", " your grade is a A."

print scores()
