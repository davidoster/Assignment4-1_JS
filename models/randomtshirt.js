const TShirt = require('./tshirt')

class RandomTShirt extends TShirt {
    constructor(myColors, mySizes, myFabrics) {
        super(Object.keys(myColors.colors)[Math.floor(Math.random()  * Object.keys(myColors.colors).length)], 
        Object.keys(mySizes.sizes)[Math.floor(Math.random()   * Object.keys(mySizes.sizes).length)],
        Object.keys(myFabrics.fabrics)[Math.floor(Math.random() * Object.keys(myFabrics.fabrics).length)])
    }
}

module.exports = RandomTShirt