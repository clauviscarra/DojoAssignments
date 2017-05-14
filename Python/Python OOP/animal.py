#Create class animal w name and health
#Give animal methods walk, run and display health
#give each new animal 100 health when it gets created
#when walk --> health decreases by 1
# when run --> health decreases by 5
#when the displayHealth() is invoked, display name of animal and health
#create animal instance where walk x3, run x2 and displayHealth() to see health change

class Animal(object):
    def __init__(self, name, health=100):
        self.name = name
        self.health = health


    def walk(self):
        self.health = self.health - 1
        return self
    def run(self):
        self.health = self.health - 5
        return self
    def display_health(self):
        print "Animal name is: ", self.name, " health is: ", self.health
        return self

Animal1 = Animal("Lion")

Animal1.walk().walk().walk().run().run().display_health()

class Dog(Animal):

    def pet(self):
        self.health += 5
        return self
    def display_health(self):
        print "This is a dog. My name is ", self.name, ". My health is: ", self.health + 50
        return self

Dog1 = Dog("Dash")

Dog1.walk().walk().walk().run().run().run().run().pet().pet().pet().pet().pet().display_health()


class Dragon(Animal):

    def fly(self):
        self.health -= 10
        return self
    def display_health(self):
        print "This is a dragon. My name is ", self.name, ". My health is: ", self.health + 70
        return self

Dragon1 = Dragon("Chimuelo")

Dragon1.fly().display_health()
