const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser');

var mongo_uri = 'mongodb+srv://admin:petch15918@cluster1.fs0qx.mongodb.net/User?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri,{ useNewParser: true }).then(
    () => {
        console.log('Connect mongoDB')
    },
    error => {
        console.log(error)
        process.exit();
    }
)

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

const port = process.env.PORT || 5000;

app.listen(port ,() => {
    console.log('Connection Successful !')
})

app.get('/',(req,res) => {
    res.status(200).send("Starting with " + port)
})
app.use((req, res, next) => {
    var err = new Error("ไม่พบ path ที่คุณต้องการ");
    err.status = 404;
    next(err);
  });