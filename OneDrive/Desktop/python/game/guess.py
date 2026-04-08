import random
print("*****start the game*****")
print("guess the number between 1 to 100: ")
computer=random.randint(1,10)
for el in range(1,7):
 choices=int(input("guess the secret number: "))
 if(computer== choices):
  print("your guess is corract")
 elif(choices>computer):
    print("your guess is greater than secret number: ")
 else:
   print("your guess is less than secret number: ")

print("secret",computer)  