#!/usr/bin/python3
""" This script lists all states from the database hbtn_0e_0_usa"""
import MySQLdb as mydb
import sys



def hbtn_Connect():
    db = mydb.connect(host='localhost', port=3306, user=sys.argv[1], passwd=sys.argv[2], db=sys.argv[3])

    cursor = mydb.cursor()

    command = "SELECT * FROM states ORDER BY id ASC"
    # excute the sql statement
    cursor.execute(command)
    # Fetch all the rows
    rows = cursor.fetchall()
    #print  each city in the state rows
    for row in rows:
        print(row)
    

    cursor.close()
    db.close()

    if __name__ == "__main__":
        hbtn_Connect()