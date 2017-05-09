# l = ['magical unicorns',19,'hello',98.98,'world']
#
# def typelist(x):
#     newlist=[]
#
#     for i in range (0, len(x)):
#
#         print "The array you entered is integer type"
#         print "Sum:", sum(x)
#
#
# typelist([1,2,38,6, "charlie"])



def typeList(x):
    Int = 0
    Str = 0
    newString = ""
    summ = 0

    for i in range (0, len(x)):
        if type(x[i]) == int or type(x[i]) == float:
            Int += 1
            summ += x[i]
        elif type(x[i]) == str:
            Str += 1
            newString = newString + x[i] + " "

    if Str > 0 and Int > 0:
        print "The array you entered is of mixed type"
        print "String:", newString
        print "Sum:", summ
    elif Str > 0:
        print "The array you entered is of string type"
        print "string:", newString
    else:
        print "The array you entered is of integer type"
        print "Sum:", summ

typeList(['magical unicorns',19,'hello',98.98,'world'])
