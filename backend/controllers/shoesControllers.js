const ShoeShop = require("../schemas/shoes");
const AppError = require("../utils/AppError");
const validateShoes = require("../validations/shoeBodySchema");
const PicRandomShoes = require("../pic/picrandom_shoes");


exports.getAll = async (req, res, next) =>{
    try {
        const shoes = await ShoeShop.find().populate('manufacturer')
        res.status(200).json({
            success: true,
            data: shoes
        })
    } catch (err) {
       next(new AppError("Bad Request", 400))
    }
};

exports.getOne = async (req, res, next) => {
    try {
        const shoeById = await ShoeShop.findById(req.params.id).populate('manufacturer')
        if(!shoeById) {return next(new AppError("The shoes you are looking for does not exist", 400))};
        res.status(200).json({
            success: true,
            data: shoeById
        });
    } catch (error) {
            next(new AppError("Sorry but we have a technical problem"))
    }
}

exports.CreateOne = async (req, res, next) => {
    try {
       
        const newShoe = await ShoeShop.create({...req.body, img: PicRandomShoes() });
        res.status(201).json({
            success: true,
            data: await ShoeShop.find().populate('manufacturer'),
            newdata: newShoe,
        })
        
    } catch (error) {
        next(new AppError(`${error.message}`, 400));
    }
}


exports.updateOne = async (req, res, next) => {
    try {
        
        const {
            id
        } = req.params;

        const bodyValid = validateShoes.validate(req.body);
        if (bodyValid.error) {
            console.log(bodyValid.error);
            return next(new AppError(`${bodyValid.error.details[0].message}`, 400))
        }

        const shoeToUpdate = await ShoeShop.findByIdAndUpdate(id, bodyValid, {
            returnDocument: "after",
        });

        res.status(200).json({
            success: true,
            data: await ShoeShop.find().populate('manufacturer'),
            update: shoeToUpdate
        })

    } catch (error) {
        next(new AppError(`${error.message}`, 400));
    }
}


exports.deleteOne = async (req, res, next) => {
    try {
        await ShoeShop.deleteOne({_id: req.params.id})
        res.status(200).json({
            success: true,
            data: await ShoeShop.find().populate('manufacturer')
        })
    } catch (error) {
        next(AppError(`${error.message}`, 400));
    }
}