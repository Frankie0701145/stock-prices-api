const db = require('./db');
const helper = require('../helpers');

async function searchCompanyByTicker(searchVal){
    const rows = await db.query("SELECT company_id, company_name, symbol FROM StockPrice WHERE MATCH (symbol) AGAINST (?)", [searchVal]);
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

module.exports = {
    searchCompanyByTicker
}