const mongoose = require('mongoose');

const herbsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required'],
        minLength:[2,'Herbs name should be at least 2 characters long']
    },
    latin:{
        type:String,
        required:[true, 'Latin Name is required'],
        minLength:[2,'Latin Name should be at least 2 characters long']
    },
    image:{
        type:String,
        required:[true, 'Image color is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength:[2, 'Description should be at least 2 characters long'],
        maxLength:[500, 'Description should be maximum 500 characters long']
    },
    // owner: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
});



const Herbs = mongoose.model('Herbs', herbsSchema);

module.exports = Creature;