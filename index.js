require('dotenv').config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const stockPricesRouter = require("./routesHandlers/stockPrices");
const stockPriceCompanyIDRouter = require("./routesHandlers/stockPriceCompanyID.js");
const searchCompaniesRouteHandler = require("./routesHandlers/searchCompanies")

// load middleware
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({extended: true}));

// stock prices endpoint
app.get("/stock-prices", stockPricesRouter);
app.get("/stock-prices/:companyId", stockPriceCompanyIDRouter);
// search company by names
app.get("/search-companies", searchCompaniesRouteHandler);
// search by ticker symbol

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
});
