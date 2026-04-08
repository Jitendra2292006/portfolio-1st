import time 
import sys
import os
def print_lyrics():
    os.system('')
    print("\033[1;33m]")
    lyrics=[
            "arz kiya hai...",
            "haatho ko sambhale mere haathon mein",
            "kaise haatho ko sambhale mere haatho mein...",
            "jab tak neend na aaye, in lakeeron mein...",
            "baatein ho........",
            "haaye"
    ]
    line_delay=3.5
    for line in lyrics:
        print(line)
        time.sleep(line_delay)
print_lyrics()            
