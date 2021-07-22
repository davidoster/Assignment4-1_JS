const Timer = require('../timer')
let myTimer = new Timer()

class BubbleSort {
    constructor(myColors, mySizes, myFabrics) {
        this.colors = myColors
        this.sizes = mySizes
        this.fabrics = myFabrics
    }
    
    sort(array, timer, printout, options) { // options = { attribute: 'size/color/fabric', sort: 'ASC/DESC' }
        var arr = [...array] // var arr = Object.assign([], array)
        var i, j;
        var len = arr.length;
        var isSwapped = false;
        if(printout) {
            console.log(`Bubble SORT, ${options.attribute} - ${options.sort} - UNSORTED Array`)
            array.forEach(element => console.log(element.toString())) // Original array
        } 
        if(timer) myTimer.start()
        for (i = 0; i < len; i++) {
            isSwapped = false;
            for (j = 0; j < len - 1; j++) { // Amend in order to work for the Size values of a RandomTShirt
                if(this.compareTShirtsByAttribute(arr[j], arr[j+1], options)) { // ASC
                // if (arr[j] > arr[j + 1]) {
                    var temp = arr[j]
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    isSwapped = true;
                }
            }
            // IF no two elements were swapped by inner loop, then break 
            if (!isSwapped) {
                break;
            }
        }
        if(timer) {
            myTimer.stop()
            console.log(myTimer.time)
        }
        if(printout) {
            console.log(`Bubble SORT, ${options.attribute} - ${options.sort} - SORTED Array`)
            arr.forEach(element => console.log(element.toString()))  // Sorted array
        }
        return arr
    }

    compareTShirtsByAttribute(tshirt1, tshirt2, options) {
        if(options.sort == 'ASC') {
            switch(options.attribute) { // options = { attribute: 'color', sort: 'ASC'}
                case 'size':
                    return this.sizes.getIndexBySizeName(tshirt1.size) > this.sizes.getIndexBySizeName(tshirt2.size)
                case 'color':
                    // console.log(tshirt1.color, this.colors.getIndexByColorName(tshirt1.color), tshirt2.color, this.colors.getIndexByColorName(tshirt2.color))
                    return this.colors.getIndexByColorName(tshirt1.color) > this.colors.getIndexByColorName(tshirt2.color)
                case 'fabric':
                    return this.fabrics.getIndexByFabricName(tshirt1.fabric) > this.fabrics.getIndexByFabricName(tshirt2.fabric)
            }
        } else {
            switch(options.attribute) {
                case 'size':
                    return this.sizes.getIndexBySizeName(tshirt1.size) < this.sizes.getIndexBySizeName(tshirt2.size)
                case 'color':
                    return this.colors.getIndexByColorName(tshirt1.color) < this.colors.getIndexByColorName(tshirt2.color)
                case 'fabric':
                    return this.fabrics.getIndexByFabricName(tshirt1.fabric) < this.fabrics.getIndexByFabricName(tshirt2.fabric)
            }
        }
        return false
    }
}

module.exports = BubbleSort