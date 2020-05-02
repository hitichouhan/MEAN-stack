                
const express = require('express')

const routerProduct = require('./routes/product')

const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.json())

app.get('/', (request, response) => {
    response.send('<h1>Welcome to my APIs</h1>')
})

// add the routes
app.use('/product', routerProduct)

app.listen(4000, '0.0.0.0', () => {
    console.log('server started  on port 4000')
})