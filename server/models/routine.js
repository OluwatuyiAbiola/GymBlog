const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema({
    name:{
        type: String,
        required:  "This is required"
    },
    description:{
        type: String,
        required: "This is required"
    },
    email:{
        type: String,
        required: "This is required"
    },
    routines:{
        type: Array,
        required: "This is required"
    },
    category:{
        type: String,
        enum:  ["Ropes", "PullUps", "Weight", "Legs", "Biceps", "Running"],
        required: "This is required"
    },
    image:{
        type: String,
        required: "This is required"
    }
});

//to search through the database
routineSchema.index({name: "text", description: "text"});
//wildcard
//routineSchema.index({"$**": "text"});

module.exports = mongoose.model("Routine", routineSchema);