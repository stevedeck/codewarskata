def find_it(seq):
    for d in seq:
        digit_count = seq.count(d)
        if digit_count % 2 != 0:
            return d
    return None


print(find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))