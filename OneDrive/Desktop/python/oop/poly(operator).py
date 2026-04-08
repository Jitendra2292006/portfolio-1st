class number:
    def __init__(self,real,img):
        self.real=real
        self.img=img 

    def total(self):
      
      print(self.real,"i+",self.img,"j")

    def __add__(self,num2):
# dundder __add__
        newReal=self.real+num2.real 
        newImg=self.img+num2.img
        return number(newReal,newImg)   
    
    def __sub__(self,num2):
# dundder __sub__
        newReal=self.real-num2.real 
        newImg=self.img-num2.img
        return number(newReal,newImg)  
    def __truediv__(self,num2):
# dundder __div__
        newReal=self.real/num2.real 
        newImg=self.img/num2.img
        return number(newReal,newImg)        
    
num1= number(1,3)
num1.total()    
num2= number(3,3)
num2.total()
      
num3=num1-num2
num3.total() 

num4=num1/num2
num4.total()       