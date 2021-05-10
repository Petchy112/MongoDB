var express = require('express')
var router = express.Router();
var User = require('./user')

router.get('/',(req,res) => {
    User.find().exec((err,data) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(data);
    })
})
router.get('/:id',(req,res) => {
    User.findById(req.params._id).exec((err,data) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(data);
    })
})
router.post('/',(req,res) => {
    var obj = new User (req.body);
    obj.save((err,data) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(data);
    })

})
module.exports = router