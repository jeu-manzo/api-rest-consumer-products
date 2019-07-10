'use strict'

const express = require('express');
const api = express.Router();
const productCtrlls = require('../controllers/product');
const userCtrl = require('../controllers/user');
const auth = require('../middlewares/auth');


api.get('/product', auth, productCtrlls.getProducts);
api.get('/product/:productId', productCtrlls.getProduct);
api.post('/product', auth, productCtrlls.saveProduct);
api.put('/product/:productId', auth, productCtrlls.updateProduct);
api.delete('/product/:productId', auth, productCtrlls.deleteProduct);
api.post('/signup', userCtrl.signUp);
api.post('/signin', userCtrl.signIn);
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = api;
