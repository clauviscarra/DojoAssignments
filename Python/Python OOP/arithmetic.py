class MathDojo(object):
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def add(self):
        print self.x + self.y
        return self
    def subtract(self):
        print  self.x - self.y
        return self

Test1 = MathDojo(97,67)

Test1.add()
Test1.subtract()

class MathDojo(object):
    def __init__(self):
        self.result = 0

    def add(self,*y):
        for x in range(0,len(y)):
            if type(y[x]) == tuple:
                if type(y[x]) == list:
                    for i in range(0,len(y[x])):
                        self.result += y[x][i]
                else:
                    for i in range(0,len(y[x])):
                        self.result += y[x][i]
            elif type(y[x]) == list:
                for i in range(0,len(y[x])):
                    self.result += y[x][i]
            else:
                self.result += y[x]
        return self

    def subtract(self,*a):
        sum = 0
        for x in range(0,len(a)):
            if type(a[x]) == tuple:
                if type(a[x]) == list:
                    for i in range(0,len(a[x])):
                        sum += a[x][i]
                else:
                    for i in range(0,len(a[x])):
                        sum += a[x][i]
            elif type(a[x]) == list:
                for i in range(0,len(a[x])):
                    sum += a[x][i]
            else:
                sum += a[x]
        self.result -= sum
        return self

    def result():
        return

md = MathDojo()
print md.subtract([1],3,4,(1,2,3)).subtract([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3],(1,2)).result
