//-------------------------//
// 1. function to reverse a number:

function reverse_num(n) {
    return parseInt(n.toString().split('').reverse().join(''))
}

//console.log(reverse_num(32243))
//-------------------------//
// 2. function to check palindrome

function is_palindrome(s) {
    s = s.replace(/\s/g, '')
    let c = s.split('').reverse().join('')
    if (c == s) {
        return true
    } else {
        return false
    }
}

//console.log(is_palindrome('ooo ooooooo'))
//-------------------------//

// 3. function that generates all combinations of a string (substrings)

function combiner(s) {

    let combined_array = []
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            combined_array.push(s.slice(i, j))
        }
    }
    return combined_array
}

//console.log(combiner('dog'))
//-------------------------//

// 4. return passed string with letters in alphabetical order

function alphabetized_string(s) {
    return s.split('').sort().join('')
}

//console.log(alphabetized_string('webmaster'))
//-------------------------//

//5. takes string, conversts first letter to uppercase:

function upper_first(s) {
    let str_arr = s.split(' ')
    let new_str = []
    for (let i = 0; i < str_arr.length; i++) {
        let str = str_arr[i].charAt(0).toUpperCase() + str_arr[i].slice(1)
        new_str.push(str)
    }
    let full_new = new_str.join(' ')
    return full_new
}

//console.log(upper_first('the quick brown fox'))
//-------------------------//

//6. longest word in the string

function longest(s) {
    let str_arr = s.split(' ')
    let arr_lengths = []

    arr_lengths = str_arr.map((elem) => {
        return elem.length
    })

    let max_length = arr_lengths.reduce(function(a, b) {
        return Math.max(a, b)
    })

    return str_arr[arr_lengths.indexOf(max_length)]
}

//console.log(longest('Web Development Tutorial'))
//-------------------------//

// 7. counts vowels in string

function count_vowels(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            count++;
        }
    }
    return count;
}

//console.log(count_vowels('The quick brown fox'))
//-------------------------//

// 8. check prime. divisible only by itself and 1. 

function isPrime(n) {

    if (n === 0) {
        return "0 or less"
    } else if (n === 1) {
        return false
    } else if (n === 2) {
        return true
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false
            } else {
                return true
            }            
        }
    }
}

//console.log(isPrime(38))
//-------------------------//

// 9. function accepts an argument and returns the type

function giveType(a) {
    return typeof(a)
}

//console.log(giveType([4, 5]))
//-------------------------//

// 10. find second lowest and second greatest in array

function secondLowestGreatest(arr) {
    let max = arr.reduce((a, b) => { return Math.max(a, b) })
    let min = arr.reduce((a, b) => { return Math.min(a, b) })

    arr.splice(arr.indexOf(max), 1)
    arr.splice(arr.indexOf(min), 1)
    console.log(arr)

    let second_max = arr.reduce((a, b) => { return Math.max(a, b) })
    let second_min = arr.reduce((a, b) => { return Math.min(a, b) })

    return `${second_min}, ${second_max}`
}

//console.log(secondLowestGreatest([1,2,3,4,5]))
//-------------------------//

// 11. function to extract unique characters from a string. use a frggin object

function unique_chars(s) {
    let mymap = []

    for (let i = 0; i < s.length; i++) {
        if(!mymap.includes(s[i])) {
            mymap.push(s[i])
        } 
    }

    return mymap.join('')
}

//console.log(unique_chars('thequickbrownfoxjumpsoverthelazydog'))
//-------------------------//

// 12. write a function to binary search through an array


console.log(/\s/ instanceof)