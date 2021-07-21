def square_digits(num):
    num_array = [int(d)**2 for d in str(num)]
    
    print(num_array)
    
    my_string = ""
    
    for digit in num_array:
        my_string += str(digit)
    
    print(int(my_string))
    return int(my_string)

square_digits(9119)

#Best Practices Solution
# def square_digits(num):
#    ret = ""
#    for x in str(num):
#        ret += str(int(x)**2)
#    return int(ret)