claudia = {
"name" : "Claudia Maria Viscarra",
"age" : 23,
"husband" : "Roger",
"pets" : ["Dash", "Figaro"],
"sisters" : ["Vale", "Pedoui"],
}

pets = ["Dash", "Figaro"],
sisters = ["Vale", "Pedoui"],

for data in claudia:
    print data

for key in claudia.iterkeys():
    print key

for val in claudia.itervalues():
    print val

for key,data in claudia.iteritems():
    print key, "=", data

print claudia["husband"]

claudia.copy()



pets = ["figaro", "dash", "ginger"]
sisters = ["adri", "vale", "clau", "maria"]

pets_sisters = zip(pets, sisters)
print pets_sisters
pet_sisters_dict = dict(pets_sisters)
print pet_sisters_dict
