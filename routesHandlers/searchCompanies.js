const searchCompaniesByName = require("../services/searchCompaniesByName");
const searchCompaniesByTicker = require("../services/searchCompaniesByTicker");

// searchCompaniesByTicker

module.exports = async function(req, res, next){
    try{
        let {companyName, symbol} = req.query;
        if(companyName){
            let data =  await searchCompaniesByName.searchCompanyByName(companyName);
            res.json(data);
        }else if(symbol){
            let data =  await searchCompaniesByTicker.searchCompanyByTicker(symbol);
            res.json(data);
        }else{
            res.json({data: []});
        }
    }catch(err){
        console.log(err);
        next(err);
    }
};