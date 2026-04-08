import random
choices = ["rock", "paper", "scissors"]
me = input("input rock, paper, or scissors: ").lower()
ai = random.choice(choices)
print("ai chose:", ai)

if me == ai:
    print("draw")
elif (me == "rock" and ai == "scissors") or \
     (me == "scissors" and ai == "paper") or \
     (me == "paper" and ai == "rock"):
    print("You win!")
else:
    print("ai wins!")