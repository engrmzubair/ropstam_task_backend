const yup = require('yup');

const carCreateValidation = yup.object().shape({
    category: yup.string().required(),
    color: yup.string().required(),
    model: yup.string().required(),
    make: yup.string().required(),
    year: yup.string().required(),
    price: yup.number().required()
});
const carUpdateValidation = yup.object().shape({
    category: yup.string(),
    color: yup.string(),
    model: yup.string(),
    make: yup.string(),
    year: yup.string(),
    price: yup.number(),
});

module.exports = { carCreateValidation, carUpdateValidation };
