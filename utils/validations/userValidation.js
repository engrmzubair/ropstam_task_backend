const yup = require('yup');

const signupValidation = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
});

const loginValidation = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
});



module.exports = { loginValidation, signupValidation };
