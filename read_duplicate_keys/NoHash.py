path = "C:/Users/nonnimartin/Desktop/Palamida/packages_20160321/packages_201603212.txt"
lines     = []
dupes     = []
setlines = set()
instances = set()

for line in open(path, 'r'):
    lines.append(line)

lines[len(lines)-1] = lines[len(lines)-1] + '\n'

lines.sort(key=str.lower)

for i in lines:
    setlines.add(i.upper())

for counter in range(len(lines)):
    if counter == 0:
        if lines[counter].upper() == lines[counter+1].upper():
            dupes.append(lines[counter])
            instances.add(lines[counter].upper())
    elif counter == len(lines)-1:
        if lines [counter].upper() == lines[counter-1].upper():
            dupes.append(lines[counter])
            instances.add(lines[counter].upper())
    else:
        if (lines[counter].upper() == lines[counter+1].upper()) or lines[counter].upper() == lines[counter-1].upper():
            dupes.append(lines[counter])
            instances.add(lines[counter].upper())
             
print "Total number of strings = " + str(len(lines))
print "Total number of duplicates = " + str(len(dupes))
print "instances = " + str(len(instances))
##print "List of duplicates: "
#for i in instances:
#    print i
            
        


