def sum(x):
  if(x==0):
    return 0
  return x+sum(x-1)
m=int(input("enter a number"))
x=sum(m)
print(x)