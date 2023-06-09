const db = require('./db');
const helper = require('../helpers');

async function getStockPrices(){
    const rows = await db.query("SELECT * FROM StockPrice");
    const data = helper.emptyOrRows(rows);
    return{
        data
    }
}

module.exports = {
    getStockPrices
}