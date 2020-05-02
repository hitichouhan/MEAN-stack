try {
	db.product.createIndex({"productID":1}, { unique: true });
	db.product.insertMany([
		{
				
				"productID" : 1,
				"productName" : "Dove",
				"productType" : "soap",
				"price" : 2,
				"purchaseDate" : new Date("2020-04-10")
		},
		{
				
				"productID" : 2,
				"productName" : "Hersheys",
				"productType" : "chocolate",
				"price" : 10,
				"purchaseDate" : new Date("2020-03-20")
		},
		{
				
				"productID" : 3,
				"productName" : "SunnyD",
				"productType" : "juice",
				"price" : 5,
				"purchaseDate" : new Date("2020-03-22")
		},
		{
				
				"productID" : 4,
				"productName" : "FirstStreet",
				"productType" : "bread",
				"price" : 2,
				"purchaseDate" : new Date("2020-03-25")
		},
		{
				
				"productID" : 5,
				"productName" : "Kirkland",
				"productType" : "eggs",
				"price" : 16,
				"purchaseDate" : new Date("2020-02-02")
		},
		{
				
				"productID" : 6,
				"productName" : "Darigold",
				"productType" : "milk",
				"price" : 3,
				"purchaseDate" : new Date("2020-01-02")
		},
		{
				
				"productID" : 7,
				"productName" : "HeartHealthy",
				"productType" : "oil",
				"price" : 20,
				"purchaseDate" : new Date("2020-02-11")
		},
		{
				
				"productID" : 8,
				"productName" : "ShutterHome",
				"productType" : "wine",
				"price" : 10,
				"purchaseDate" : new Date("2020-03-19")
		},
		{
				
				"productID" : 9,
				"productName" : "Lays",
				"productType" : "chips",
				"price" : 5,
				"purchaseDate" : new Date("2020-03-09")
		},
		{
				
				"productID" : 10,
				"productName" : "Colgate",
				"productType" : "toothpaste",
				"price" : 5,
				"purchaseDate" : new Date("2020-04-01")
		},
		{
				
				"productID" : 11,
				"productName" : "Detol",
				"productType" : "sanitizer",
				"price" : 7,
				"purchaseDate" : new Date("2020-02-21")
		},
		{
				
				"productID" : 12,
				"productName" : "Royal",
				"productType" : "rice",
				"price" : 20,
				"purchaseDate" : new Date("2020-01-21")
		},
		{
				
				"productID" : 13,
				"productName" : "Vedaka",
				"productType" : "almonds",
				"price" : 50,
				"purchaseDate" : new Date("2020-04-04")
		},
		{
				
				"productID" : 14,
				"productName" : "Kelloggs",
				"productType" : "cereal",
				"price" : 20,
				"purchaseDate" : new Date("2020-04-14")
		},
		{
				
				"productID" : 15,
				"productName" : "Kraft",
				"productType" : "cheese",
				"price" : 4,
				"purchaseDate" : new Date("2020-01-14")
		},
		{
				
				"productID" : 16,
				"productName" : "Hank",
				"productType" : "sauce",
				"price" : 8,
				"purchaseDate" : new Date("2020-03-24")
		},
		{
				
				"productID" : 17,
				"productName" : "CocoCola",
				"productType" : "coke",
				"price" : 4,
				"purchaseDate" : new Date("2020-01-24")
		},
		{
				
				"productID" : 18,
				"productName" : "Traderjoe",
				"productType" : "butter",
				"price" : 5,
				"purchaseDate" : new Date("2020-01-04")
		},
		{
				
				"productID" : 19,
				"productName" : "Bounty",
				"productType" : "papertowel",
				"price" : 15,
				"purchaseDate" : new Date("2020-02-11")
		},
		{
				
				"productID" : 20,
				"productName" : "Fugi",
				"productType" : "apple",
				"price" : 25,
				"purchaseDate" : new Date("2020-01-11")
		},
		{
				
				"productID" : 21,
				"productName" : "Kisan",
				"productType" : "jam",
				"price" : 15,
				"purchaseDate" : new Date("2020-02-21")
		},
		{
				
				"productID" : 22,
				"productName" : "Softsoap",
				"productType" : "handwash",
				"price" : 10,
				"purchaseDate" : new Date("2020-02-02")
		},
		{
				"productID" : 23,
				"productName" : "Softcare",
				"productType" : "bodywash",
				"price" : 10,
				"purchaseDate" : new Date("2020-02-04")
		}
	]);
} catch(e) {
	print(e);
}

db.product.find( { productID: { $type : 1 } } )
db.product.find({},{productID:1 , _id:0}).sort({productID:-1}).limit(1).pretty()

db.product.aggregate(
   [
     {
       $project:
         {
           year: { $year: "$purchaseDate" },
           month: { $month: "$purchaseDate" },
           day: { $dayOfMonth: "$purchaseDate" }
		 }
	 },
	 {
			 $match: {month: 3}
	 }
   ]
 )  