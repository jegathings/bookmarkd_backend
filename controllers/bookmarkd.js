const express = require('express');
const router = express.Router();
const Bookmark = require('../models/bookmarkd.js');
// const jwt = require('jsonwebtoken');



router.post('/', async (req, res) =>{
    try{
        console.log(req.body);
        const createdBookmark = await Bookmark.create(req.body);
        res.status(200).json(createdBookmark);
    } catch(error){
        res.status(400).json(error)
    }
});


router.get('/', async (req, res) =>{
    try{
        const bookmarks = await Bookmark.find({})
        res.status(200).json(bookmarks);
    }catch(error){
        res.status(400).json(error);
    }
})


router.delete('/:id', async (req, res) =>{
    try{
        const deletedBookmark = await Bookmark.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedBookmark)
    }catch(error){
        res.status(400).json(error)
    }
})


router.put('/:id', async (req, res) =>{
    try{
        const updatedBookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json(updatedBookmark)
    }catch(error){
        res.status(400).json(error)
    }
})




module.exports = router;