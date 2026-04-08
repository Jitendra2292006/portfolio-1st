def prime(a):
    c=0
    for i in range(1,a+1):
        if a%i==0:
            c=c+1
    if c==2:
        print("prime number")
    else:
        print("not a prime number")
        
a=int(input("eneter a digit to find prime number"))
prime(a)
