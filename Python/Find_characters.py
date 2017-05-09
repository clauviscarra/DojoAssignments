#Pass through list strings
#Pass through the strings
#if list string contains character "o"
    #add string element into new string element?

wordlist = ['hello','world','my','name','is','Anna']

letters = set('o')
newlist = []

for word in wordlist:
    if letters & set(word):
        newlist.append(word)
print newlist
