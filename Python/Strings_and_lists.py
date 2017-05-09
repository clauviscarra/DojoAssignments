#Find and Replace
str = "It's thanksgiving day. It's my birthday, too!"

print str.find("day")

str2 = str.replace ("day", "month")

print str2

#Min and Max
x = [2,54,-2,7,12,98]

print min(x)
print max(x)

#First and last
x = ["hello",2,54,-2,7,12,98,"world"]

y = [x[0], x[-1]]
#           ^same as
print x[0], x[len(x)-1]
print y


#New list
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()

b = x[:len(x)/2]
c = x[len(x)/2:]
c.insert(0,b)
print x
print b
print c
