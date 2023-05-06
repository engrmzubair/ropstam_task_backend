const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const randomstring = require('randomstring');



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
});

userSchema.pre('save', async function (next) {
    try {
        const user = this;
        if (!user.isModified('password')) {
            return next();
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (error) {
        return next(error);
    }
});

userSchema.statics.generateRandomPassword = function () {
    return randomstring.generate(10);
};

userSchema.methods.comparePassword = async function (candidatePassword, next) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (error) {
        return next(error);
    }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
