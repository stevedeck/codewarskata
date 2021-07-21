def open_or_senior(data):
    output_list = []
    for a,h in data:
        if a < 55:
            output_list.append("Open")
        else:
            if h < 8:
                output_list.append("Open")
            else:
                output_list.append("Senior")
                
    return output_list