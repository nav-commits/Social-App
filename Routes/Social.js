const express = require('express');
const router = express.Router()
const Social = require('../Models/database.js')

// get all socialposts
router.get('/', async (req,res)=>{
    try {
        const socials = await Social.find();
        res.json(socials);
    }
    catch(err){
     res.status(500).json({message:err});
    }
    
});


// creating a socialpost
router.post('/',(req,res)=>{
    const socials = new Social ({
        title: req.body.title,
        message:req.body.message
    });
    socials.save()
    .then((data)=>{
      res.json(data);
    })
    .catch((err)=>{
     res.json({message:err})
    });
 })





module.exports = router; 