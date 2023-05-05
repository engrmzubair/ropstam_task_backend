const yup = require('yup');

const carCreateValidation = yup.object().shape({
    category: yup.string().required(),
    color: yup.string().required(),
    model: yup.string().required(),
    make: yup.string().required(),
    registrationNo: yup.string().required(),
});
const carUpdateValidation = yup.object().shape({
    category: yup.string(),
    color: yup.string(),
    model: yup.string(),
    make: yup.string(),
    registrationNo: yup.string(),
});

module.exports = { carCreateValidation, carUpdateValidation };
