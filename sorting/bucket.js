const Timer = require('../timer')
let myTimer = new Timer()

class BucketSort {
    constructor(myColors, mySizes, myFabrics) {
        this.colors = myColors
        this.sizes = mySizes
        this.fabrics = myFabrics
    }

    sort(array, timer, printout, options) {
        let buckets = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] }
        if(printout) {
            console.log(`Bucket SORT, ${options.attribute} - ${options.sort} - UNSORTED Array`)
            array.forEach(element => console.log(element.toString())) // Original array
        } 
        if(timer) myTimer.start()
        array.forEach((element, index) => {
            switch(options.attribute) {
                case 'size': 
                    buckets[this.sizes.getIndexBySizeName(element.size)].push(element)
                    break;
                case 'color':
                    buckets[this.colors.getIndexByColorName(element.color)].push(element)
                    break;
                case 'fabric':
                    buckets[this.fabrics.getIndexByFabricName(element.fabric)].push(element)
                    break;
            }
        })
        if(timer) {
            myTimer.stop()
            console.log(myTimer.time)
        }
        if(printout) {
            console.log(`Bucket SORT, ${options.attribute} - ${options.sort} - SORTED Array`)
            // { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] }
            if(options.sort == 'DESC') 
                Object.values(buckets).reverse().forEach(subArray => subArray.forEach(element => console.log(element.toString())))
            else
                Object.values(buckets).forEach(subArray => subArray.forEach(element => console.log(element.toString())))
        }
    }
}

module.exports = BucketSort