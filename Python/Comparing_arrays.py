#
# counter = 0
# x = [1,2,5,6,5,16]
# y = [1,2,5,6,5,16]
#
# for i in range (0, len(x)):
#     if x[i] == y[i]:
#         counter = counter + 1
# if counter == len(y):
#     print "The lists are the same"
# else:
#     print "The lists are different"
#

def compareArray(x,y):

    counter = 0
    for i in range (0, len(x)):
        if x[i] == y[i] and len(x) == len(y):
            counter = counter + 1
    if counter == len(y):
        print "The lists are the same"
    else:
        print "The lists are different"

compareArray([1,2,5,6,5,3],[1,2,5,6,5,3]
)
