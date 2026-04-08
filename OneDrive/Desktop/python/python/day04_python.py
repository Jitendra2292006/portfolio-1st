a=int(input("**enter an first number** "))
b=int(input("**enter an second number** "))
c=int(input("**enter an third number** "))
if(a<b and a<c):
 if(b<c):
  print("**ascending order** ",a,b,c)
 else:
  print("ascending order1= ",a,c,b) 
elif(b<a and b<c):
 if(a<c):
  print("**ascending order** ",b,c,a)  
 else:
  print("ascending order2=",b,a,c) 
elif(c<a and c<b):
 if(a<b):
  print("**ascending order**",c,a,b) 
 else:
  print("ascending order3=",c,b,a) 