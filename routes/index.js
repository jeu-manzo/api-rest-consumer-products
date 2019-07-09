'use strict'

const express = require('express');
const api = express.Router();
const productCtrlls = require('../controllers/product')


api.get('/product', productCtrlls.getProducts);
api.get('/product/:productId', productCtrlls.getProduct);
api.post('/product', productCtrlls.saveProduct);
api.put('/product/:productId', productCtrlls.updateProduct);
api.delete('/product/:productId', productCtrlls.deleteProduct);

module.exports = api;
