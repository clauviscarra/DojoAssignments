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

#############################################################
# Consider what each line of code is doing in this function.#
# Write short comments in your code!                        #
#############################################################

def compareArray(x,y):
    counter = 0

    # before you run a for loop, could you write a quick fail that quickly checks if list lenghts are different? If they are different would that mean that the lists are not the same?

    for i in range (0, len(x)):
        # for each iteration, compare the values at x and y and sub i, are the lengths going to change on each iteration?
        if x[i] == y[i] and len(x) == len(y):
            counter = counter + 1
    if counter == len(y): # would the quick fail you write above your for loop make it so that you don't need a counter?
        print "The lists are the same"
    else:
        print "The lists are different"

compareArray([1,2,5,6,5,3],[1,2,5,6,5,3]
)
