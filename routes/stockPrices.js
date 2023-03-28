const express = require('express');
const router = express.Router();
const stockPrices = require("../services/stockPrices")

router.get('/', async function(req, res, next) {
    try{
        let data = await stockPrices.getStockPrices()
        res.json(data)
    }catch(err){
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

module.exports = router;