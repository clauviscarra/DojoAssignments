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

    # Useage of Int and Str here is great. Consider this, would a simple change in boolean value work better or worse that 0 or not 0? Why or why not?

    Int = 0 # False -> flag
    Str = 0 # False -> flag
    newString = ""
    summ = 0

    for i in range (0, len(x)):
        if type(x[i]) == int or type(x[i]) == float:
            Int += 1 # Int = True -> flag change
            summ += x[i]
        elif type(x[i]) == str:
            Str += 1
            newString = newString + x[i] + " "
    # if Str and Int -> compare flag
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
