const {
    Schema,
    model
} = require("mongoose");
const {
    hash,
    compare
} = require("bcrypt");

const validateEmail = require("../validations/validateEmail");

const UserSchema = new Schema({
    email: {
        type: String,
        require: [true, "Please provide an Email"],
        unique: [true, "Email is already exist"],
        validate: {
            validator: validateEmail,
            message: "Email is invalid",
        },
    },
    name: {
        type: String
    },
    password: {
        type: String,
        require: true
    },
    shoe: [{
        type: Schema.Types.ObjectId,
        ref: 'Shoe',
    }]
});

UserSchema.pre("save", async function (next) {
    this.password = await hash(this.password, 10);
    next()
});

UserSchema.methods.passwordCorrect = async function (password) {
    return await compare(password, this.password);
}

module.exports = model("User", UserSchema);