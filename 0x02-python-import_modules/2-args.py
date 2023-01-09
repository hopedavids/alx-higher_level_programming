#!/usr/bin/python3
import sys
if __name__ == "__main__":
    count = len(sys.argv)
    if count > 2:
        print("{} arguments".format(count))
        print("{}: {}".format(count, sys.argv, sep = ""))
    elif count == 2:
        print("1 argument")
        print("{}: {}".format(count, sys.argv))
    elif count == 1:
        print("0 arguments".format(count))
