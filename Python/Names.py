# students = [
#      {'first_name':  'Michael', 'last_name' : 'Jordan'},
#      {'first_name' : 'John', 'last_name' : 'Rosales'},
#      {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#      {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]
# print "Students"
#
# for i in range(0,len(students)):
#     name_length = len(students[i]["first_name"]) + len(students[i]["last_name"])
#     print i + 1, students[i]["first_name"],students[i]["last_name"], name_length

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

for key,data in users.items():
    count = 1
    print key
    for value in data:
        name_length = len(value["first_name"]) + len(value["last_name"])
        print count, "-", value["first_name"], value["last_name"], "-" , name_length
        count += 1
