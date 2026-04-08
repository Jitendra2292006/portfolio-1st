import random
import string
passwordlen=12
computer=string.ascii_letters+string.punctuation+string.digits
password=""
for i in range(passwordlen):
 password+=random.choice(computer)
print("your random password is= ",password) 