def listo(a):
    print(len(a))
    return a 
list=[1,2,3,4,5]
listo(list)

def listo(list):
 for item in list:
    print(item,end=" ") 
    # end use for to do an a single line the output
list=[1,2,3,4,5]
listo(list)

# fact
def fact(a):
    sum=1
    for i in range(1,a+1):
     sum*=i
    print(sum)
x=int(input("enter your nmber= "))
fact(x)     