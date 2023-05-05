const yup = require('yup');

const userValidation = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
});

module.exports = userValidation;
