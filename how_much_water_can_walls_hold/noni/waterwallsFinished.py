import random

high = random.randint(5, 20)
wide = random.randint(5, 20)

def water_walls(high, wide):

    left_wall  = {}
    right_wall = {}
    mid_walls  = {}
    ordered    = []
    structured = []
    space = []

    def fill_columns(x, y, array):
        for x in range(x):
            marlon_rando = random.randint(0, high)
            for y in range(marlon_rando):
                
                array[(x, y)][1] = True
        return array

    def pour_water(x,y, array):

        #Bear in mind that the array reads from the bottom right = (0,0), so + and - are reversed from their intuitive orientation
        for width in range(0, x):
            for height in range(y):
                counter  = 0
                hit_right = False
                hit_left = False
                right_edge = False
                left_edge = False

        #Check for a wall or edge on either side of each block to determine action

                while hit_right == False and right_edge == False and (width+counter <= wide):
                    if width+counter == wide-1 and array[width+counter, height][1] == False:
                        right_edge = True
                    elif array[(width+counter, height)][1] == True:
                        hit_right = True
                    else:
                        counter += 1
                if hit_right == True:
                    counter = 0
                    while hit_left == False and left_edge == False:
                        if width-counter <= 0 and array[width-counter, height][1] == False:
                            left_edge = True
                        elif array[(width-counter, height)][1] == True:
                            hit_left = True
                        else:
                            counter += 1
                if hit_right and hit_left:
                    array[width, height][0] = True
        return array

    def create_space(x, y):

    #     Create border walls =>
    #
    #     dict = {
    #     (x,y) : [water?, wall?]
    #     }

        for height in range(y):
                left_wall[0,height] = [False, False]

        for height in range(y):
                right_wall[x-1,height] = [False, False]

    #    Create non-border columns

        for column in range(x-2):
            for height in range(y):
                mid_walls[column+1,height] = [False, False]

    #    Merge two dictionaries
        all_walls = dict(left_wall.items() + right_wall.items() + mid_walls.items())
        
        return all_walls


    def order_columns(array):
        #order columns for sorting
        for row in reversed(range(high)):
            for column in reversed(range(wide)):
                ordered.append(array[(column, row)])

        return ordered

    def restructure_array(ordered_array):
            #Make structured array
        structured =[ordered[i:i+wide] for i in range(0, len(ordered), wide)]

        
        for row in structured:
            counter = 0
            for each in row:
                if each[1] == True:
                    row[counter] = "[#]"
                elif each[0] == True:
                    row[counter] = "[*]"
                else:
                    row[counter] = "[ ]"
                counter += 1

        generator = ('\n'.join([''.join('{:2}'.format(item) for item in row)]) for row in structured)
        return generator

    space = create_space(wide, high)
    columns_space = fill_columns(wide, high, space)
    poured = pour_water(wide, high, columns_space)
    ordered = order_columns(poured)

    print "Array :" + '\n'

    for i in enumerate(restructure_array(ordered)):
        print i[1]

            
water_walls(high,wide)