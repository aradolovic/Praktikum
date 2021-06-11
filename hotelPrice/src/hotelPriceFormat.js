let data = [
    {from: "2020-01-01", 
     to: "2020-02-01", 
     price: 34.5
    },

    {from: "2020-02-02",
     to: "2020-03-01",
    price: 37.0
    },

    {from: "2020-03-02",
     to: "2020-05-15",
     price: 39.0
    },

    {from: "2020-02-02",
     to: "2020-03-01",
     price: 37.0
    },
    ]


function priceListFormatter(pricelist) {
    
    if( !(pricelist instanceof Object) ) throw Error()

    let reducedPrice = pricelist.reduce( (accumulator, currentValue) => {
        if( !accumulator[currentValue.price] ){
            accumulator[currentValue.price] = []
        }
        accumulator[currentValue.price].push(currentValue)
        return accumulator
    }, {} )

    let list = []

    Object.getOwnPropertyNames(reducedPrice).forEach( (price) => {
        list.push(price + ' : ' + reducedPrice[price].map(x => x.from + ' do ' + x.to).join(' , '))
    })
    
    return list.sort()

}


console.log(priceListFormatter(data))

module.exports = {priceListFormatter, data}