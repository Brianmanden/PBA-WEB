var mongoose = require('mongoose');

// Schema
var schema = {
	prodId		: 	Number, 
	prodTitle	: 	String,
	prodDesc	: 	String, 
	prodPct		: 	Number,
	prodVol		: 	Number,
	prodPrice	: 	Number,
	prodImg		: 	String,
	category	: 	String
}


var Products = mongoose.model("Products", schema);

module.exports = Products;