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
const BucketSort    = require('./sorting/bucket')
const randomArray   = require('./randomarray')
const RandomTShirt  = require('./models/randomtshirt')
const Timer         = require('./timer')
var myInsertionSort = new Insertion()
var myBubbleSort    = new BubbleSort(myColors, mySizes, myFabrics)
var myQuickSort     = new QuickSort(myColors, mySizes, myFabrics)
var myBucketSort    = new BucketSort(myColors, mySizes, myFabrics)

let randomTShirts = generateRandomTShirts(3)
let bubbleSorted = myBubbleSort.sort(randomTShirts, true, false, { attribute: 'size', sort: 'ASC'})
let commonBubbleSorted = myBucketSort.sort(bubbleSorted, false, true, { attribute: 'size', sort: 'ASC'})
Object.values(commonBubbleSorted).forEach(subArray => {
        // subArray.forEach(element => console.log(element.toString()))
        // console.log(subArray.length)
        if(subArray.length > 1) {
            subArray = myBubbleSort.sort(subArray, true, true, { attribute: 'color', sort: 'ASC'})
            let commonBubbleSortedByColor = myBucketSort.sort(subArray, false, false, 
                                            { attribute: 'color', sort: 'ASC'})
            
            // this if doesn't work!!!! We need to implement as line 23 above!!!!!
            if(commonBubbleSortedByColor.length > 1)
            commonBubbleSortedByColor = myBubbleSort.sort(commonBubbleSortedByColor, false, false, 
                                            { attribute: 'fabric', sort: 'ASC'})
        }
        
    })

// let quickSorted = myQuickSort.sort(randomTShirts, true, false, { attribute: 'size', sort: 'ASC' } )
// console.log(`QuickSort Time: ${myQuickSort.time}`)

// let bucketSorted = myBucketSort.sort(randomTShirts, true, true, { attribute: 'size', sort: 'ASC' })

function generateRandomTShirts(number) {
    let myArray = []
    for(let i = 0; i < number; i++) myArray.push(new RandomTShirt(myColors, mySizes, myFabrics))
    return myArray
}


