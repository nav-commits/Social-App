const mongoose = require('mongoose')

const socialSchema = mongoose.Schema({
   title: String,
   message: String,
   creater: String,
   createdAt:{
       type: Date,
       default: new Date()
   }

});

module.exports = mongoose.model('Social',socialSchema)