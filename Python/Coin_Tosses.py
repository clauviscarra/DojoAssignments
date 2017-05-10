import random


def cointosses():

    attempt_count = 0
    head_count = 0
    tail_count = 0


    for y in range(0,5000):
        coin = random.random()
        coin = round(coin)
        if coin  == 0:
            head_count +=  1
            attempt_count += 1
            print "Attempt #", attempt_count, "Throwing a coin...It's a head! Got", head_count, "so far and", tail_count, "so far"
        else:
            tail_count += 1
            attempt_count += 1
            print "Attempt #", attempt_count, "Throwing a coin...It's a tail! Got", head_count, "so far and", tail_count, "so far"

print cointosses()
