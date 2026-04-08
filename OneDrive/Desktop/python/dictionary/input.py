# a=int(input("enter an number from user=\n"))
# b=int(input("enter an number from user=\n"))
# a,b=b,a
# print("after swap")
# print(a)
# print(b)
# # input meaning it's take diractly a str from libary
# val=input("enter your age=\n")
# print(type(val),val)
status_code=int(input("enter your number =\n"))
match status_code:
    case 200:
        print("ok")
    case 404:
        print("not found")    
