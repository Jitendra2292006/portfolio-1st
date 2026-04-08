# a built in data type that us creat immutble sequence of values
tup=(24,43,53,24,42) 
# tup[0],tup[1]
# tup[0]=43
# not allowed in python
tup1=()
tup2=(1,)
tup3=(1,2,3)
print(type(tup))
print(tup[:2]) 
# method
# rturns index of first occurrence
print(tup.index(43))
print(tup.count(24))