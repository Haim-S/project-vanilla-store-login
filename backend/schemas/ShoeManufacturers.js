const {Schema, model} = require("mongoose");

const SchemaManufacturers = new Schema({
    name: {
        type: String,
        required:[true, 'Name is required']
    },
    Headquarters: {
        type: String
    },
    Founded: {
        type: Number,
        min: [1900, 'Please Enter a number bigger then 1900, got {VALUE}'],
        mix: [()=> Date.now(), 'Please check, you have a mistake, got {VALUE}'],
    }
})


module.exports = model("Manufacturer", SchemaManufacturers);