class circle:
    def __init__(self,r):
        self.r=r
    def area(self):
        return (3.14)*self.r**2        
s1=circle(4)
print(s1.area())
