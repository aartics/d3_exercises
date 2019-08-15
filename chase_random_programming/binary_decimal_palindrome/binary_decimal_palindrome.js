let sum_palindrome = 0;

function getNumPalindrome() {

    for (let i = 11; i < 1000000000; i++) {

        if((i.toString() == i.toString().split('').reverse().join('')) && (i.toString(2) == i.toString(2).split('').reverse().join(''))) {
            sum_palindrome += i
        }
    }

    console.log(sum_palindrome);
}
console.time('getNumPalindrome');
getNumPalindrome()
console.timeEnd('getNumPalindrome');