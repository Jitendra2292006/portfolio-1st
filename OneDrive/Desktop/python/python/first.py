print("hello world")
a=int(input("enter first number= "))
b=int(input("enter second number= "))
print("addition= ",a+b)
print("subtraction= ",a-b)
print("divide =",a/b)
print("module=",a%b)
print("multiplication= ",a*b)
print("expo= ",a**b)

if a>b:
    print("a is max then b mini= ",a)
else:
 print("b is max then a mini= ",b)
print("before swap=",a,b)    
a,b=b,a
print("after swap=")
print(a)
print(b)   

s,c=2,3
 
if c>s:
 print("c max s mini",c)
else:
 print("s max c mini",s)
    