try {
	db.sale.insertMany([
	{
		"productID": 1,
		"saleDate": new Date("2020-04-20"),
		"totalSale": 5
	},
	{
		"productID": 3,
		"saleDate": new Date("2020-04-22"),
		"totalSale": 20
	}, 
	{
		"productID": 4,
		"saleDate": new Date("2020-04-02"),
		"totalSale": 50
	},
	{
		"productID": 1,
		"saleDate": new Date("2020-03-21"),
		"totalSale": 25
	},
	{
		"productID": 6,
		"saleDate": new Date("2020-03-20"),
		"totalSale": 50
	},
	{
		"productID": 7,
		"saleDate": new Date("2020-02-15"),
		"totalSale": 35
	},
	{
		"productID": 6,
		"saleDate": new Date("2020-04-10"),
		"totalSale": 10
	},
	{
		"productID": 8,
		"saleDate": new Date("2020-03-25"),
		"totalSale": 40
	},
	{
		"productID": 9,
		"saleDate": new Date("2020-03-12"),
		"totalSale": 40
	},
	{
		"productID": 10,
		"saleDate": new Date("2020-04-18"),
		"totalSale": 70
	},
	{
		"productID": 11,
		"saleDate": new Date("2020-04-01"),
		"totalSale": 100
	},
	{
		"productID": 12,
		"saleDate": new Date("2020-04-21"),
		"totalSale": 80
	}, 
	{
		"productID": 13,
		"saleDate": new Date("2020-04-16"),
		"totalSale": 40
	}, 
	{
		"productID": 14,
		"saleDate": new Date("2020-04-20"),
		"totalSale": 30
	}, 
	{
		"productID": 15,
		"saleDate": new Date("2020-02-20"),
		"totalSale": 150
	}, 
	{
		"productID": 6,
		"saleDate": new Date("2020-04-20"),
		"totalSale": 50
	}, 
	{
		"productID": 18,
		"saleDate": new Date("2020-03-20"),
		"totalSale": 250
	}, 
	{
		"productID": 19,
		"saleDate": new Date("2020-03-12"),
		"totalSale": 300
	}]);
} catch (e) {
	print(e);
}

db.sale.mapReduce( function(){emit(this.,this.age);}, function(key,values){return Array.sum(values)}, { out : "test"})
db.sale.mapReduce( function(){emit(this.productID,this.totalSale);}, function(key,values){return Array.sum(values)}, 
{ query :[  
	{
		$project:
              {
                   year : {$year:'$saleDate'}
              }
    },
    {
		$match:
              {
                   year: 2020
              }
    }]
, out : "test"})
db.sale.aggregate([
	{
			$project :{
				'totalSale' : 1,
				'productID' : 1,
				'month' : {$month : '$saleDate'},
				'year': {$year:'$saleDate'},
				'saleDate' :1
			}
	},
	{
        // find the salary more than 5700
        $match : { 
			'year': 2020 
		} 
    },
	{
        // group by jobs
        $group: {
            _id: {productID :'$productID',  month :'$month', saleDate : '$saleDate'},
            totalSales: { '$sum': '$totalSale' }
        }
    },
	{
        $sort: { month: 1 }
    }

])

db.sale.aggregate([
	{
			$project :{
				'totalSale' : 1,
				'productID' : 1,
				'month' : {$month : '$saleDate'},
				'year': {$year:'$saleDate'},
				'saleDate' :1
			}
	},
	{
        // find the salary more than 5700
        $match : { 
			'year': 2020 
		} 
    },
	{
        // group by jobs
        $group: {
            _id: {month :'$month', saleDate : '$saleDate'},
            totalSales: { '$sum': '$totalSale' }
        }
    },
	{
        $sort: { month: 1 }
    }

])

db.sale.aggregate([
	{
			$project :{
				'totalSale' : 1,
				'productID' : 1,
				'month' : {$month : '$saleDate'},
				'year': {$year:'$saleDate'},
				'saleDate' :1
			}
	},
	{
        // find the salary more than 5700
        $match : { 
			'year': 2020 
		} 
    },
	{
        // group by jobs
        $group: {
            _id: {month :'$month'},
            totalSales: { '$sum': '$totalSale' }
        }
    },
	{
        $sort: { month: 1 }
    }

])


db.sale.aggregate([
	{
			$project :{
				'totalSale' : 1,
				'productID' : 1,
				'month' : {$month : '$saleDate'},
				'year': {$year:'$saleDate'},
				'saleDate' :1
			}
	},
	{
        // find the salary more than 5700
        $match : { 
			'year': 2020 
		} 
    },
	{
        // group by jobs
        $group: {
            id: {productID :'$productID', month :'$month'},
            totalSales: { '$sum': '$totalSale' }
        }
    },
	{
        $sort: { month: 1 }
    }

])