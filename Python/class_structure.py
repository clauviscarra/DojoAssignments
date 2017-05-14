# class User(object):
#     def __init__(self, name, email):
#         self.name = name
#         self.email = email
#         self.logged = True
#     def login(self):
#         self.logged = True
#         print self.name + " is logged in."
#         return self
#     def logout(self):
#         self.logged = False
#         print self.name + " is not logged in"
#         return self
#     def show(self):
#         print "My name is {}. You can email me at {}".format(self.name, self.email)
#         return self
# #
#
#
# new_user = User("clau", "clauvisfoss@gmail.com")
# print new_user.name, new_user.email

# class User(object):
#     name = "Anna"
# anna = User()
# print "anna's name: ", anna.name
# User.name = "Bob"
# print "anna's name after change:", anna.name
# bob = User()
# print "bob's name:", bob.name

class User(object):
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.logged = False
user1 = User("Anna Propas", "anna@anna.com")
print user1.name
print user1.logged
print user1.email
