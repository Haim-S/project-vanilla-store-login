const User = require("../schemas/User");
const jwt = require("../tokens/tokens");
const AppError = require("../utils/AppError");

exports.register = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        newUser.password = undefined;
        const token = jwt.createAccessToken(newUser);
        res.status(201).json({
            newUser: newUser._id,
            name: newUser.name,
            token,
            msg: "To log out, click the green button at the top of the page",
        })
    } catch (error) {
        next(new AppError("The email already exists", 400));
    }
}


exports.login = async (req, res, next) => {
    try {
        const {
            email,
            password
        } = req.body;
        if (!email || !password) next(new AppError("Please provide username and password", 400));

        const user = await User.findOne({
            email
        });
        if (!user || !(await user.passwordCorrect(password))) return next(new AppError("Something is wrong or you have not registered or your password is incorrect, try again", 400));

        const token = jwt.createAccessToken(user);

        res.status(200).json({
            newUser: user._id,
            name: user.name,
            token,
            msg: "To log out, click the green button at the top of the page"
        })
    } catch (error) {
        next(new AppError(`${error.message}`));
    }
}




exports.OneUser = async (req, res, next) => {
    try {
        UserById = await User.findById(req.body.id).populate('shoe')
        if (!UserById) {
            return next(new AppError("There is a problem, try to connect again", 401))
        };
        res.status(200).json({
            success: true,
            data: UserById
        });
    } catch (error) {
        next(new AppError("Sorry but we have a technical problem"))
    }
}


exports.updateOne = async (req, res, next) => {
    try {
        const {
            id
        } = req.body;
        const userid = await User.findByIdAndUpdate(req.params.id, {
            $push: {
                shoe: id
            }
        }).exec();
        // userid.shoe.push(id);
        res.status(200).json({
            success: true,
            data: userid
        })
    } catch (error) {
        next(new AppError(`${error.message}`))
    }
}


exports.deletOne = async (req, res, next) => {
    try {
        const {
            id
        } = req.body;
        const userid = await User.findByIdAndUpdate(req.params.id, {
            $pull: {
                shoe: id
            }
        });
        res.status(200).json({
            success: true,
            data: userid
        })
    } catch (error) {
        next(new AppError(`${error.message}`))
    }
}


exports.logout = async (req, res, next) => {
    try {
        return res.json({
           msg: 'Logged out',
        })

    } catch (error) {
        next(new AppError("There is a problem logging out", 400))
    }
}