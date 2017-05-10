# arr = [4,6,1,5,7,25]
# for i in range(0,len(arr)):
#     print arr[i] * "*"


def stars(arr2):
    for x in range(0,len(arr2)):
        if type(arr2[x]) == int:
            print arr2[x] * "*"
        elif type(arr2[x]) == str:
            print arr2[x][0].lower() * len(arr2[x])

print stars([4,1,1,9,7, "Markus", "Eugeneeee"])
