
for e in range (0,10):
    if e % 2 == 0:
        print("*" + " " + "*" + " " + "*" + " " + "*" + " " + "*")
    else:
        print (" " + "*" + " " + "*" + " " + "*" + " " + "*" + " "+ "*")

tupl = (2,99,0,5,5)
print tuple(enumerate(tupl))

capitals = {} #create an empty dictionary then add values
capitals["svk"] = "Bratislava"
capitals["deu"] = "Berlin"
capitals["dnk"] = "Copenhagen"

print capitals
for data in capitals:
     print data

for key in capitals.itervalues():
     print key

friends = ["Erin", "Faith", "Rachel", "Katrina"]
last_names = ["Fuhr", "Carter", "Abrego", "Keay"]

friend_names = zip(friends, last_names)
print friend_names

friend_names_dict = dict(friend_names)
print friend_names_dict
