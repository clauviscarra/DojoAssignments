class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
    def display_all(self):
        print "Price: " , self.price
        print "Speed: " , self.speed
        print "Fuel: " , self.fuel
        print "Mileage: " , self.mileage
        if self.price > 10000:
            print "Tax: 0.15"
        else:
            print "Tax: 0.12"
        print "-----------------------------------"

        return self


    # def displayTax(self):
    #     if self.price > 10000:
    #         print "Tax: 0.15"
    #     else:
    #         print "Tax: 0.12"
    #     return self

Car1 = Car(90000, "30pmh", "Full", "800 mpg")
Car2 = Car(9000, "90pmh", "Full", "300 mpg")
Car3 = Car(800, "93pmh", "Empty", "600 mpg")
Car4 = Car(7000, "955pmh", "Full", "500 mpg")
Car5 = Car(10, "9pmh", "Empty", "900 mpg")
Car6 = Car(970000, "0pmh", "Full", "80 mpg")

#
# Car1.display_all()
# Car2.display_all()
# Car3.display_all()
# Car4.display_all()
# Car5.display_all()
# Car6.display_all()

import arithmetic
print arithmetic.add(9,98)
