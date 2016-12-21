'use strict';


 const express = require('express');
 const router = express.Router();
 var knex = require('../../db/knex.js');
 var bcrypt = require('bcrypt-as-promised');

 router.post('/users', function(req, res){
   res.send(req.body)
 })


 module.exports = router;
