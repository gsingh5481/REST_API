var express = require('express');
var router = express.Router();

/*all mysql routes*/
var mysql = require('./routes/mysql/mysqlRoutes')(router);

/*all mongo Routes*/
var mysql = require('./routes/mysql/mongoRoutes')(router);

/*all promise routes */
var mysql = require('./routes/mysql/promiseRoutes')(router);

/*all functional Routes */
var mysql = require('./routes/mysql/functionalRoutes')(router);









module.exports = router;
