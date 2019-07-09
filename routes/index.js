'use strict'

const express = require('express');
const api = express.Router();
const productCtrlls = require('../controllers/product')
const auth = require('../middlewares/auth');


api.get('/product', productCtrlls.getProducts);
api.get('/product/:productId', productCtrlls.getProduct);
api.post('/product', productCtrlls.saveProduct);
api.put('/product/:productId', productCtrlls.updateProduct);
api.delete('/product/:productId', productCtrlls.deleteProduct);
api.get('/private', auth.isAuth, function(req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = api;
