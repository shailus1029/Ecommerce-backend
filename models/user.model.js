const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//defining the model properties;
const User = new Schema ({

    userId: { type: String, required: true },

    firstname: { type: String },
    
    lastname: { type: String },
    
    email: { type: String, required: true, unique: true },
    
    password: { type: String, required: true },
    
    mobile: { type: Number }

}, {
    timestamps: true
});

//exporting the model
module.exports = mongoose.model('User', User);
