/* Question:
a number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.
for example,
44 -> 32 -> 13 -> 10 ->  1 -> 1
85 -> 89 -> 145 -> 42 -> 20 -> 4 -> 16 -> 37 -> 58 -> 89

therefore, any chain that arrives at 1 or 89 will become stuck in an endless loop. what is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

how many numbers below 10 million will arrive at 89?

*/

function getEightyNines() {

    for (let i = 11; i < 1000000000; i++) {

        if((i.toString() == i.toString().split('').reverse().join('')) && (i.toString(2) == i.toString(2).split('').reverse().join(''))) {
            sum_palindrome += i
        }
    }

    console.log(sum_palindrome);
}
// console.time('getNumPalindrome');
// getNumPalindrome()
// console.timeEnd('getNumPalindrome');