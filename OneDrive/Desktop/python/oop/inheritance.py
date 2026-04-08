class car:
 @staticmethod
 def start():
    print("car is start= 🙌")
 @staticmethod
 def stop():
    print("car stop(●'◡'●)")


class toyota(car):
   def __init__(self,name):
     self.name=name 


car1=toyota("gdfgg")
car1=toyota("dsafg")
print(car1.name)     
    
class A:
   varA="welcome jack"
class B:
   varB="welcome dammy"
class C(A,B):
   varC="wlcome mom dad"
c1= C()
print(c1.varC) 
print(c1.varB)     
print(c1.varA) 



    