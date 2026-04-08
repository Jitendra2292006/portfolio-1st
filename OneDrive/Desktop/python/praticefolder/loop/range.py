# range function return of number start from 0 by default and icrement by 1 byb default and stop before a specified number
seq=range(5)
# range(stop)
for i in seq:
 print(i)
# range(start,stop)
for el in range(1,5):
 print(el)
# range(start,stop,step)
for el in range(2,10,2):
 print(el)
for el in range(2,10,2):
  print("even",el)

#   
n=int(input("enter a number= "))
for el in range(1,11):
 print(n*el)
