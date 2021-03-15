const mongoose = require('mongoose')

const socialSchema = mongoose.Schema({
   title: String,
   message: String,
   creater: String,
   selectedFile: String,
   createdAt:{
       type: Date,
       default: Date.now
   }

});

module.exports = mongoose.model('Social',socialSchema)