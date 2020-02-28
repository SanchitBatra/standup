var mongoose = require("mongoose");

var passportLocalMongoose = require("passport-local-mongoose");
var ComedianSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String,
    reviews : [{title : String , links : []}],
});

ComedianSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Comedian",ComedianSchema);