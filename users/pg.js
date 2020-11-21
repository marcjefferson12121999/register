const express = require('express');
const user = require('../require/requirements');
const router = express.Router();
const User = require ('../require/requirements');

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
 const user = new User({
    name:req.body.name,
    email: req.body.email
 })
 try{
    const newUser = await user.save()
    res.status(201).json(newUser)
} catch (err) {
    res.status(400).json({message: err.message})
}
})

async function getUser(req, res, next){
    let user
try{
    user = await User.findById(req.params.id)
    if (user == null) {
        return res.status(404).json({message: 'cannot find user'})

    }
} catch (err) {
    return res.status(500).json({message:err.message})

}
res.user = user
next()
}
module.exports = router