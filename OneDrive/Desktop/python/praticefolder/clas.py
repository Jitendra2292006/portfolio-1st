class account:
    def __init__(self,bal,acc):
        self.bal=bal
        self.acc=acc
    def debit(self,ammount):
     self.bal-=ammount
     print("rs.",ammount,"was dabited")
     print("dabited= ",self.bal)

    def cradit(self,ammount):
      self.bal+=ammount
      print("rs.",ammount,"was cratid")
      print("cradit= ",self.bal)

    def get_bal(self):
       return self.bal 
    
s1=account(10000,1234)
s1.debit(1000) 
s1.cradit(500) 
