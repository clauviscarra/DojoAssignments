class Bike(object):
    def __init__(self, price, max_speed, miles):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles
    def displayInfo(self):
        print self.price, self.max_speed, self.miles
        return self
    def ride(self):
        self.miles += 10
        print "Riding", self.miles
        return self
    def reverse(self):
        self.miles -= 5
        print "Reversing", abs(self.miles)
        return self


Bike1 = Bike("$9,000", "120mph", 0)
Bike2 = Bike("$5,000", "80mph", 0)
Bike3 = Bike("$8,000", "95mph", 0)

Bike1.ride().ride().ride().reverse()
Bike1.displayInfo()

Bike2.ride().ride().reverse().reverse()
Bike2.displayInfo()

Bike3.reverse().reverse().reverse()
Bike3.displayInfo()
