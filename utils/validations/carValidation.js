const yup = require('yup');

const carValidation = yup.object().shape({
    category: yup.string().required(),
    color: yup.string().required(),
    model: yup.string().required(),
    make: yup.string().required(),
    registrationNo: yup.string().required(),
});

module.exports = carValidation;
