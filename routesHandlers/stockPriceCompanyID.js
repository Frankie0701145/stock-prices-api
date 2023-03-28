const stockPriceCompanyID = require("../services/stockPriceCompanyIdService.js")

module.exports  = async function (req, res, next) {
    const companyId = req.params.companyId;
    console.log("companyId", companyId);
    try{
        let data = await stockPriceCompanyID.getStockPriceByCompanyId(companyId)
        res.json(data)
    }catch(err){
        console.error(`Error`, err.message);
        next(err);
    }
}