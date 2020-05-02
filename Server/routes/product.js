const express = require('express')
const mongojs = require('mongojs')

// db
const db = mongojs('Salesdata', ['product','sale','test'])
const utils = require('../utils')

const router = express.Router()

router.get('/', (request, response) => {
    db.product.find({}, (error, employees) => {
        response.send(utils.createResult(error,employees))
    })
})

router.get('/emp2', (request, response) => {
    db.test.find({}, (error, employees) => {
        response.send(utils.createResult(error,employees))
    })
})

router.post('/', (request, response) => {
    const {id, title, description, price} = request.body
    
    // db.product.find({}, {{productID:1 , _id:0},{sort : {productID:-1} },{limit : 1}}, (error, employees) => {
    //     console.log("======>"+employees.productID)
    // })
    db.product.save({productID: id, productName:title, productType:description, price: price, purchaseDate: new Date()}, (error, data) => {
        response.send(utils.createResult(error,data))
    })

    
    
    // db.emp.save({name:"vk", address:"tasgaon"}, (error, data) => {
    //     response.send(utils.createResult(error,data))
    // })
    // response.send(utils.createResult"Data Saved")
})

router.delete('/:id', (request, response) => {
    const id = request.params.id
    console.log(`vkkk`,id)
    db.product.remove({productID : id},(error, res) =>{
            // response.send(utils.createResult(error,res))
    })

    db.product.remove({productID : parseInt(id)},(error, res) =>{
        response.send(utils.createResult(error,res))
    })
    
})

router.put('/', (request, response) => {
    const {id, title, description, price} = request.body
    console.log(`vkkk`,id)
    db.product.update({productID:id},{ $set: {productName:title, productType:description, price: price}},(error, res) =>{

        console.log(``,res)
       
        response.send(utils.createResult(error,res))
    })
    
})

router.post('/saleData', (request, response) => {
    const year = request.body.year
    // db.sale.find({}, (error, employees) => {
    //     response.send(utils.createResult(error,employees))
    // })
    // db.sale.aggregate([pipelineStep], [pipelineStep], [pipelineStep], ..., [callback])
   /* db.sale.aggregate([
        {
                $project :{
                    'totalSale' : 1,
                    'productID' : 1,
                    'month' : {$month : '$saleDate'},
                    'year': {$year:'$saleDate'}//,
                    // 'saleDate' :1
                }
        },
        {
            // math the year
            $match : { 
                'year': parseInt(year) 
            } 
        },
        {
            // group by id and month
            $group: {
                _id: {productID :'$productID', month :'$month'},
                totalSales: { '$sum': '$totalSale' }
            }
        }    
    ],(error, data) => {
        console.log(``,data)
        response.send(utils.createResult(error,data))
    })
    */
    // db.emp.mapReduce(
    //     function() {emit(this.,value);},
    //     { $set: {address:"pune"}},(error, res) =>{
    //     response.send(res)
    // })
    
	db.sale.mapReduce( 
    function(){emit(this.saleDate.getMonth(),this.totalSale);}, 
    function(key,values){return Array.sum(values)}, 
    {  
        out : "test"
    }
    )
        response.redirect('/product/emp2')
})



module.exports = router