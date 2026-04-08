import math
print("**************************************************")
print("*****code to find the hypotenuse of a triangle****")
print("**************************************************")
def pyth(a,b):
    return math.sqrt(a**2+b**2)
a=int(input("enter first side: "))
b=int(input("enter second side: "))
c=pyth(a,b)
print("the hypotenuse is : ",c)

