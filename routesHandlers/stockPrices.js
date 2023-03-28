const stockPrices = require("../services/stockPrices")

module.exports  = async function (req, res, next) {
    console.log("Stock Prices endpoint");
    try{
        let data = await stockPrices.getStockPrices()
        res.json(data)
    }catch(err){
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
}