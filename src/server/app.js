// Initialize the express framework + 
// Initialize the body-parser
// in order to receive the request body
// in POST, PUT and DELETE
var express 	 	= require('express'),
	bodyParser		= require('body-parser'),
	mongoose		= require('mongoose'),
	dbname 			= "angular_mongodb";

// Express setup 
var app 			= express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

// Routes set up
var router 			= express.Router();
var product 		= require('./controllers/api/product');
var index 			= require('./controllers/index');

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

mongoose.connect('mongodb://localhost/' + dbname);
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', startServer)


// Start up the server
function startServer(){
	var server = app.listen(3000, function(){
		var port = server.address().port;
		console.log('Listening on port ' + port);
	})
}