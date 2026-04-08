import statistics
num = int(input("enter a number"))
i = 1
number =[]
while i<num:
    eleme = int(input(" enter elemn"))
    number.append(eleme)
    i+=1
print(" mean of the enterd number is ",statistics.mean(number))
print(" mode of the enterd number is ",statistics.mode(number))
print(" median  of the enterd number is",statistics.median(number))