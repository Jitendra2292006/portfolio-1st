def fab(x):
    if(x==0 ):
        return 0
    if(x==1):
        return 1
    return fab(x-1)+fab(x-2)
a=int(input("enter a number= "))
y=fab(a)
print(y)