
const mongoose = require("mongoose");

module.exports = mongoose.model("Company", new mongoose.Schema({

    name:{
        type:String,
        required:"insertá nombre",
        unique:true
    },
    code:{
        type:String,
        required:"inserta er código",
        unique:true
    },
    image:{
        type:String,
        required:"insert image",
        default: "http://via.placeholder.com/350x350"
    },
    money:{
        type: Number,
        default: 0
    },
    description:{
        type: String
    },
    allComments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]

}))

