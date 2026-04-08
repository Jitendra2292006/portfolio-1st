class student:
     def __init__(self,chem,math,phy):
          self.chem=chem
          self.phy=phy
          self.math=math
    # percentage  

     @property
     def percentage(self):
          return str((self.phy+self.math+self.chem)/3)+"%"      
stu1=student(23,34,53)  
stu1.phy=99  
print(stu1.percentage)