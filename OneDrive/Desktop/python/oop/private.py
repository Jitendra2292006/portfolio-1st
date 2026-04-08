class student:
    def __init__(self,name,marks):
          self.name=name
          self.__marks=marks


    def reset(self):
         print(self.__marks)      

          
s1=student("jack",58)  
# del=delete
print(s1.name)
print(s1.reset())      
# __marks(__)=this means private