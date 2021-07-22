const Color         = require('./models/color')
const Fabric        = require('./models/fabric')
const Size          = require('./models/size')
let myColors        = new Color({ Red: 'RED', Orange: 'ORANGE', Yellow: 'YELLOW', Green: 'GREEN', Blue: 'BLUE', Indigo: 'INDIGO', Violet: 'VIOLET' })
let mySizes         = new Size({ XS: 'XS', S: 'S', M: 'M', L: 'L', XL: 'XL', XXL: 'XXL', XXXL: 'XXXL' })
let myFabrics       = new Fabric({ Wool: 'WOOL', Cotton: 'COTTON', Polyester: 'POLYESTER', Rayon: 'RAYON', Linen: 'LINEN', Cashmere: 'CASHEMERE', Silk: 'SILK' })
const TShirt        = require('./models/tshirt') 
const Insertion     = require('./sorting/insertion')
const BubbleSort    = require('./sorting/bubble')
const QuickSort     = require('./sorting/quick')
const randomArray   = require('./randomarray')
const RandomTShirt  = require('./models/randomtshirt')
const Timer         = require('./timer')
var myInsertionSort = new Insertion()
var myBubbleSort    = new BubbleSort(myColors, mySizes, myFabrics)
var myQuickSort     = new QuickSort(myColors, mySizes, myFabrics)

// let myTShirt1 = new RandomTShirt(myColors, mySizes, myFabrics)
// console.log(myTShirt1)

// let myArray = randomArray(20)
// myBubbleSort.sort(myArray, true, true) // 1st param: array, 2nd param: timer, 3rd param: printout

let randomTShirts = generateRandomTShirts(3)
// myBubbleSort.sort(randomTShirts, true, true, { attribute: 'fabric', sort: 'DESC'})

// myQuickSort.sort(randomTShirts, true, false, { attribute: 'size', sort: 'ASC' } )
// console.log(`QuickSort Time: ${myQuickSort.time}`)

// let [b0, b1, b2, b3, b4, b5, b6] = [[], [], [], [], [], [], []]
let buckets = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: []
}

// console.log(randomTShirts)
console.log(randomTShirts[0].size)
console.log(mySizes.getIndexBySizeValue(randomTShirts[0].size))
buckets[mySizes.getIndexBySizeValue(randomTShirts[0].size)].push(randomTShirts[0])
// buckets[mySizes.getIndexBySizeValue(randomTShirts[1].size)].push(randomTShirts[1])
// buckets[mySizes.getIndexBySizeValue(randomTShirts[2].size)].push(randomTShirts[2])
// console.log(buckets)

function generateRandomTShirts(number) {
    let myArray = []
    for(let i = 0; i < number; i++) myArray.push(new RandomTShirt(myColors, mySizes, myFabrics))
    return myArray
}


