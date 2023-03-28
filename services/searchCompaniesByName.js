const db = require('./db');
const helper = require('../helpers');

async function searchCompanyByName(searchVal){
    const rows = await db.query("SELECT company_id, company_name FROM StockPrice WHERE MATCH (company_name) AGAINST (?)", [searchVal]);
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

module.exports = {
    searchCompanyByName
}