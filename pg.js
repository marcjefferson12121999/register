const express = require('express');
const user = require('../models/user');
const router = express.Router()
const User = require ('../models/user')

//getting all
router.get ('/', async (req, res) => {
try{
    const users = await User.find()
    res.json(users)
} catch (err) {
    res.status(500).json({message: err.message})
}

})
//getting one
router.get('/:id', getUser, (req, res) => {
res.send(res.user.name)
})
//creating one
router.post ('/', async (req, res) => {
 const user = new user({
    name:req.body.name,
    registered: req.body.registered
 })
 try{
    const newUser = await User.save()
    res.status(201).json(newUser)
} catch (err) {
    res.status(400).json({message: err.message})
}
})

async function getUser(req, res, next){
    let User
try{
    User = await User.findById(req.params.id)
    if (User == null) {
        return res.status(404).json({message: 'cannot find User'})

    }
} catch (err) {
    return res.status(500).json({message:err.message})

}
res.User = User
next()
}
module.exports = router