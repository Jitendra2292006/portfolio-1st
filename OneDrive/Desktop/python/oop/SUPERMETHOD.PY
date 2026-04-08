class car:
    # its a conustructor
    def __init__(self,type):
       self.type=type

    @staticmethod
    def start():
       print("car is start= 🙌")

@staticmethod
def stop():
    print("car stop(●'◡'●)")


class toyota(car):
   def __init__(self,name,type):
     self.name=name 
     super().__init__(type)
     super().start()

car1= toyota("prius" ,"motor")
print(car1.type)
# super class are used to accsess mtethod of parent class

