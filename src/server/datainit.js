var mongoose		= require('mongoose'),
	dbname 			= "angular_mongodb";

// Schema
var Product = mongoose.model("Product", {
	prodId		: 	Number, 
	prodTitle	: 	String,
	prodDesc	: 	String, 
	prodPct		: 	Number,
	prodVol		: 	Number,
	prodPrice	: 	Number,
	prodImg		: 	String,
	category	: 	String
});


// Connect Mongoose to MongoDB
mongoose.connect('mongodb://localhost/' + dbname);
var db = mongoose.connection;

db.on('error', logError);
db.once('open', deleteProducts);

function logError(){
	console.log("Ohh noes ErRoR :)");
}

function deleteProducts(){
	console.log("Deleting products");
	Product.remove({}, function(err){
		if(err){
			console.log(err);
		}
		insertProducts();
	});
}

function insertProducts(){
	console.log("Inserting demo-products");
	Product.create(
		{
			"prodId": 1,
			"prodTitle": "ALE NO 16",
			"prodDesc": "Ale No 16 er en mørk, overgæret guldøl, brygget på vand, malt, humle og original engelsk gær. Øllet har en maltet smag med et strejf af nødder, en let ristet aroma og en tilpas sødme. Ale No 16 er brygget af Refsvindinge Bryggeri siden 1995 og har vundet flere priser. Bl.a. er Ale No 16 blev kåret som Danmarks bedste øl i både 1997 og 2000. I år 2000 fik den tilmed en flot 3. plads blandt verdens bedste øl. Ale No 16 kan fx nydes sammen med friskbagte kerneboller, goudaost med valnødder eller lagret spegepølse. 2001 blev der som følge af kraftigt stigende efterspørgsel indgået tappeaftale mellem Bryggeriet Vestfyen og Refsvindinge Bryggeri.",
			"prodPct": "5.7",
			"prodVol": "50",
			"prodPrice": 4,
			"prodImg": "./app/img/AleNo16.png",
			"category": "ale"
		},
		{
			"prodId": 2,
			"prodTitle": "Harboe Guldøl",
			"prodDesc": "Harboe Guldøl 5,7% er en stærkøl brygget af mørke malttyper, som giver øllen en god kraftig maltsmag med en afrundet sødme, som sammen med bitterheden fra humlen gør Harboe Guldøl til en god smagsoplevelse.",
			"prodPct": "5.7",
			"prodVol": "33",
			"prodPrice": 7,
			"prodImg": "./app/img/HarboeGuldøl.png",
			"category": "lager"
		},
		{
			"prodId": 3,
			"prodTitle": "Guld Tuborg",
			"prodDesc": "Fyldt med elegance og brygget med respekt for historien. Den gyldne dame er en elegant luksusøl med smag og kraft til både gården og gaden. Kompleks og raffineret, som alle dejlige damer er. ",
			"prodPct": "5.6",
			"prodVol": "33",
			"prodPrice": 9,
			"prodImg": "./app/img/guld_tuborg.png",
			"category": "lager"
		}
		, function(err, data){
			if(err){
				console.log(err);
			}
		}
	);
}


/*		
{
	prodTitle	: 	"Goldie1",
	prodDesc	: 	"fin guldøl", 
	prodPct		: 	9.5,
	prodVol		: 	33,
	prodPrice	: 	8.37,
	prodImg		: 	"bottle.jpg",
	category	: 	"lager"
},
{
	prodTitle	: 	"Goldie2",
	prodDesc	: 	"fin guldøl", 
	prodPct		: 	10.5,
	prodVol		: 	50,
	prodPrice	: 	13.37,
	prodImg		: 	"bottle.jpg",
	category	: 	"lager"
}
*/