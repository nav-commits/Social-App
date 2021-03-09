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
        message:req.body.message,
        creater: req.body.creater,
    });
    socials.save()
    .then((data)=>{
      res.json(data);
    })
    .catch((err)=>{
     res.json({message:err})
    });
 })


// socialposts by id
router.get('/:id', async(req,res)=>{
    try {
        const socials = await Social.findById(req.params.id);
        res.json(socials);
    }
    catch(err){
     res.status(500).json({message:err});
    }
});


// delete all socialposts
router.delete('/', async(req,res)=>{
    try {
        const deletesocialposts = await Social.remove();
        res.json(deletesocialposts);
    }
    catch(err){
     res.status(500).json({message:err});
    }
})


// delete socialposts by id
router.delete('/:id', async(req,res)=>{
    try {
        const removesocialPost = await Social.remove({_id:req.params.id});
        res.json(removesocialPost);
    }
    catch(err){
     res.status(500).json({message:err});
    }
})


// updated post by id
router.patch('/:id',async(req,res)=>{
    try {
        const updatesocialPost = 
        await Social.updateOne({_id:req.params.id}, 
        {$set:{title: req.body.title, 
        message: req.body.message ,
        creater:req.body.creater, 
        }});
        res.json(updatesocialPost);
    }
    catch(err){
     res.status(500).json({message:err});
    }
})




module.exports = router; 