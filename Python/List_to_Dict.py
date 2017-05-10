name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

# name_favorite_animal = zip(name, favorite_animal)
#
# name_favorite_animal_dict = dict(name_favorite_animal)
#
# print name_favorite_animal_dict

def make_dict(arr1, arr2):
    if len(arr1) >= len(arr2):
        arr1_arr2 = zip(arr1,arr2)
        arr1_arr2_dict = dict(arr1_arr2)
        print arr1_arr2_dict
    else:
        arr2_arr1 = zip(arr2,arr1)
        arr2_arr1_dict = dict(arr2_arr1)
        print arr2_arr1_dict

make_dict(name, favorite_animal)
