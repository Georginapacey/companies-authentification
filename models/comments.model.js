const mongoose = require('mongoose');

module.exports = mongoose.model("Comment", new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required"
    },
    text: {
        type: String,
        required: "Comment is required"
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true
    }
}, {timestamps: true}));