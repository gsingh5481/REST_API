var express = require('express');
var router = express.Router();

/*all mysql routes*/
var mysql = require('./routes/mysql/mysqlRoutes')(router);

/*all mongo Routes*/
var mongo = require('./routes/mongo/mongoRoutes')(router);

/*all promise routes */
var promise = require('./routes/mysql/promiseRoutes')(router);

/*all functional Routes */
var functional = require('./routes/mysql/functionalRoutes')(router);

/*all newModel Routes */
var newModel = require('./routes/mysql/newModelRoutes')(router);







module.exports = router;
