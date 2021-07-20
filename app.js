const Color         = require('./models/color')
const Fabric        = require('./models/fabric')
const Size          = require('./models/size')
let myColors        = new Color({ Red: 'RED', Orange: 'ORANGE', Yellow: 'YELLOW', Green: 'GREEN', Blue: 'BLUE', Indigo: 'INDIGO', Violet: 'VIOLET' })
let mySizes         = new Size({ XS: 'XS', S: 'S', M: 'M', L: 'L', XL: 'XL', XXL: 'XXL', XXXL: 'XXXL' })
let myFabrics       = new Fabric({ Wool: 'WOOL', Cotton: 'COTTON', Polyester: 'POLYESTER', Rayon: 'RAYON', Linen: 'LINEN', Cashmere: 'CASHEMERE', Silk: 'SILK' })
const TShirt        = require('./models/tshirt') 
const Insertion     = require('./sorting/insertion')
const BubbleSort    = require('./sorting/bubble')
const randomArray   = require('./randomarray')
const RandomTShirt  = require('./models/randomtshirt')
const Timer = require('./timer')
var myInsertionSort = new Insertion()
var myBubbleSort = new BubbleSort(myColors, mySizes, myFabrics)

// let myTShirt1 = new RandomTShirt(myColors, mySizes, myFabrics)
// console.log(myTShirt1)

// let myArray = randomArray(20)
// myBubbleSort.sort(myArray, true, true) // 1st param: array, 2nd param: timer, 3rd param: printout

let randomTShirts = generateRandomTShirts(2)
myBubbleSort.sort(randomTShirts, true, true)


function generateRandomTShirts(number) {
    let myArray = []
    for(let i = 0; i < number; i++) myArray.push(new RandomTShirt(myColors, mySizes, myFabrics))
    return myArray
}
