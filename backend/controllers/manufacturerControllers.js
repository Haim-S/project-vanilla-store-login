const Manufacturer = require("../schemas/ShoeManufacturers");

exports.getAll = async(req, res) => {
    try {
        const manufacturer = await Manufacturer.find();
        res.status(200).json({success:true, data: manufacturer})
    } catch (error) {
        res.status(400).json({success:false, error: error.massege});
    }
}