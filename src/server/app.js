// Initialize the express framework
var express 	 	= require('express');

// Initialize the body-parser
// in order to receive the request body
// in POST, PUT and DELETE
var	bodyParser		= require('body-parser');

// Express setup 
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

// Routes set up
var router 	= express.Router();
var product = require('./routes/api/product');

// Get all products
router.get('/api/products', product.getAll);

// Create a product
router.post('/api/product', product.create);

// Get one product, update one product, delete one product
router.route('/api/product/:id')
	.get(product.read)
	.put(product.update)
	.delete(product.delete);

// Register the routing
app.use('/', router);

// Start up the server
var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Listening on port ' + port);
})