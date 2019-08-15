// input = 'abccddd'
// output1 = ['c', 'c', 'd', 'd', 'd']
// output2 = false

// input = 'abcd'
// output1 = []
// output2 = true

/*
in ES6, you can do this, to get the unique values in an array
*/

function uniqueCharactersUsingSet(input) {
    let unique = [...new Set(input)]; 
    return unique;
}

console.log(uniqueCharactersUsingSet('abccded'))

/*
in ES6, you can do this also using filter to get unique values in an array
*/

function uniqueCharactersUsingFilterFatArrow(input) {
    //x -> item in array
    //i -> index of item
    //a -> array reference
    input = input.split('').filter((x, i, a) => a.indexOf(x) === i)
    return input;
}

console.log(uniqueCharactersUsingFilterFatArrow('abccded'))

/*
This function is O(n^2). looking for the indexOf and lastIndexOf 
will interate the whole thing twice
*/
function aartiRepeatingCharacters(input) {
    var repeatingCharacters = [];
    
    for (var i = 0; i < input.length; i++) {
        if (input.indexOf(input[i]) !== input.lastIndexOf(input[i])) {
            repeatingCharacters.push(input[i])
        }
    }

    return repeatingCharacters;
}

console.log(aartiRepeatingCharacters('abccded'))

/*
so we learn to sort it first, and check neighboring values.
*/
