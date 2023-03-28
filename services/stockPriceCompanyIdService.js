const db = require('./db');
const helper = require('../helpers');

async function getStockPriceByCompanyId(companyId){
    const rows = await db.query("SELECT * FROM StockPrice WHERE company_id = (?)", [companyId]);
    const data = helper.emptyOrRows(rows);
    return{
        data
    }
}

module.exports = {
    getStockPriceByCompanyId
}