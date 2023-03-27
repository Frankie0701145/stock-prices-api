const express = require('express');
const router = express.Router();
const stockPrices = require("../services/stockPrices")

router.get('/', async function(req, res, next) {
    try{
        res.json(await stockPrices.getStockPrices())
    }catch(err){
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

module.exports = router;