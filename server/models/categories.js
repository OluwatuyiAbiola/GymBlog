const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "This is required"]
    },
    image:{
        type: String,
        required: [true, "THis is required"]
    }
});

module.exports = mongoose.model("Category", categorySchema);