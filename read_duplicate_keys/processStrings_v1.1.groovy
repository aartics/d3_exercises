def fileToProcess = new File('packages_20160321.txt')
def stringList = []
def stringCount = 0

println 'Reading file...'

fileToProcess.eachLine { line ->
  stringList.add(line)
  stringCount++
}

println "Found $stringCount strings."
println 'Processing strings...'

def map = [:]
def processedCount = 0
def dupesCount = 0
def dupeKeyList = []
def numDupeStrings = 0

stringList.each { curString ->
  def lowString = curString.toLowerCase()
  if (!(map.containsKey(lowString))) map.put(lowString,[curString])
  else { // We got a dupe!
    map.get(lowString).add(curString)
    dupesCount++
    numDupeStrings++
    dupeKeyList.add(lowString)
  }
  if (++processedCount%1000==0) println "Processed $processedCount strings so far."
}

numDupeStrings += dupeKeyList.size()

println 'Done processing strings'
println ''
println "Total number of string: $stringCount"
println "Number of duplicate instances: $dupesCount"
println "Number of duplicate strings (ignoring case): $numDupeStrings"
println ''
println 'The duplicates are:'
println ''
dupeKeyList.each { dupeKey ->
  map.get(dupeKey).each { dupeString ->
    println dupeString
  }
  println ''
}

