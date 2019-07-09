'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const productCtrlls = require('./controllers/product')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/product', productCtrlls.getProducts);
app.get('/api/product/:productId', productCtrlls.getProduct);
app.post('/api/product', productCtrlls.saveProduct);
app.put('/api/product/:productId', productCtrlls.updateProduct);
app.delete('/api/product/:productId', productCtrlls.deleteProduct);


module.exports = app;
