class school:
    def __init__(self,fullname,marks):
        self.name=fullname
        self.marks=marks
        

    def hello(self):
      print("welcome student,",self.name)   

    def get_mark(self):
     return self.marks
    
    def getavg(self):
     sum=0
     for val in self.marks:
      sum+=val  
     print("hi jack",self.name,"your avg score is= ",sum/3)

    @staticmethod
    # @ called decorator   
    def sum():
     print("hello jack") 


s1=school("jack",[99,98,99])
s1.hello()   
print(s1.get_mark() )
s1.getavg()
s1.sum()