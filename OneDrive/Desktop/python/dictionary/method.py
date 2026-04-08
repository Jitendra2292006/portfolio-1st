dict={

    "key":"value",
    "name":"jitu",
    "learn":"coding",
    "marks":98.2,
    "jitu":True,
}
print(dict.keys())
# retrun  all keys
print(dict.values())
# return all values
print(dict.items())
# return  all the pairs as tupple
print(dict.get("name"))
# return according to value
dict.update({"city":"new delhi"})
print(dict)
# insert new value and item
len(dict)
print(dict)