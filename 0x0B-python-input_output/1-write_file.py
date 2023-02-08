#!/usr/bin/python3
"""write to a file
"""
def write_file(filename="", text=""):
    """
        using the write_file
    """
    with open(filename, encoding = "utf-8") as writeFile:
        print(writeFile.write(), end="")
