// returns an array of numbers with noOfElements
// with numbers from 0 to noOfElements - 1
// Algorithm for the function of randomArray()
/*
1. function randomArray accepts a noOfElements of integer positive number
2. initialize a variable array with empty array 
3. loops from [0 to the noOfElements - 1] increased by 1
4. calculate the random number where the resulting random number is between [0 to noOfElements - 1] and store it to a var
5. store the calculated random number (or the previous var) to the destination array
6. repeat steps 3,4 until the end of the loop
7. return the array
*/

/*
Documentation for: function randomArray(noOfElements)
parameters: noOfElements: positive integer
returns: array of integers
description: returns an array of random numbers from 0 to noOfElements - 1
*/
function randomArray(noOfElements) {
    let array = []
    for( let element = 0; element <= noOfElements - 1; element++ ) {
        // randomNumber = Math.floor(Math.random() * 100)
        // randomNumber = Math.random()
        // array.push(randomNumber)
        x = Math.floor(Math.random() * noOfElements)
        array.push(x)
    }
    return array
}

module.exports = randomArray