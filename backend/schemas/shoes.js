const {Schema, model} = require("mongoose");

const shoeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: [true, 'This name exists']
    },
    price: {
        type: Number,
        required: [true, `Sorry but you didn't list the price`],
        min: [400, 'Please Enter a number bigger then 400, got {VALUE}']
    },
    type: {
        type: String,
        enum: ['cloth', 'Leather', 'rubber'],
        required: [true, "Only one of these three types must be registered: cloth, Leather, rubber"],
        default: 'Leather'
    },
    img: {
        type: String,
    },
    manufacturer:{
        required: [true, 'Please provide maunfacturer'],
        type: Schema.Types.ObjectId,
        ref: 'Manufacturer'
    },
    saved:{type: Boolean,
        default: false,
    },
    createAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }
})

module.exports = model('Shoe', shoeSchema);