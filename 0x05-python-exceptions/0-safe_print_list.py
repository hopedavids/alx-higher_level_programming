def safe_print_list(my_list=[], x=0):
    count = 0
    try:
        for i in range(x):
            print(my_list[i], end=' ')
            count += 1
        print()
        return count
    except IndexError:
        for i in my_list:
            print(i, end=' ')
            count += 1
        print()
        return count

