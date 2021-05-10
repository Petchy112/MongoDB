// user.js
var mongoose  = require('mongoose');
var userSchema = mongoose.Schema(
    {
        FirstName : {
            type : String
        },
        LastName : {
            type : String
        },
        Email : {
            type : String
        },
        Phone : {
            type : Number
        }
    }
)


var User = mongoose.model('Users',userSchema);
module.exports = User;