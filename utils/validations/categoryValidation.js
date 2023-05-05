const yup = require('yup');

const categoryValidation = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
});

module.exports = categoryValidation;
