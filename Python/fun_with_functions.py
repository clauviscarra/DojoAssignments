# #Odd/Even
def odd_even():
    for i in range(1,2001):
        if i % 2 == 1:
            print "Number is", i, "This is an odd number."
        else:
            print "Number is", i, "This is an even number."

odd_even_list = odd_even()

print odd_even_list

#Multiply

def multiply(a,b):
    x = []

    for i in range(0,len(a)):
        if type(a[i]) == int:
            x.append(a[i] * b)
        else:
            x.append("nan")
    return x

print multiply([2,4,10,16], 5)
#
# #OR
# a = [2, 4, 10, 16]
# b = [i * 5 for i in a]
#
# print b

#Hacker Challenge

def layered_multiples(arr, num):
    newarr = [i * num for i in arr]
    newArray = []
    for i in range(0,len(newarr)):
        newArray.append([])
        for x in range(0,newarr[i]):
            newArray[i].append(1)

    return newArray

    # c = ["1" * x * num for x in arr]
    # d = [c[0]]
    # e = [c[1]]
    # f = [c[2]]
    # g = [d, e, f]
    # return c

print layered_multiples([2,4,5], 2)
