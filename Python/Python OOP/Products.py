class Product(object):
    def __init__(self, price, item_name, weight, brand, status, tax):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.cost = price + tax
        self.status = status
        self.tax = tax

    def sell(self):
        self.status = "sold"
        print "Status: ", self.status
        return self

    def addTax(self):

        print "Tax added: ", self.cost
        return self

    def return_(self):
        if self.status == "defective":
            self.price = 0
            self.cost = 0
            self.status = "Item defective"
        elif self.status == "returned":
            self.status = "Item for sale"
        elif self.status == "used":
            self.status = "This item is used, you get 20 percent off!"
            self.cost = self.cost - (self.price * .20)
        else:
            self.status ="Item for sale"
        return self

    def display_all(self):
        self.return_()
        print "Price: ", "$", self.price
        print "Item Name: ", self.item_name
        print "Weight: ", self.weight
        print "Brand: ", self.brand
        print "Cost: ", "$", self.cost
        print "Status: ", self.status
        print "----------------------------------"
        return self
Product1 = Product(80, "Jeans", "2lbs", "J.Crew", "used", 4.98)

Product1.display_all().sell()
