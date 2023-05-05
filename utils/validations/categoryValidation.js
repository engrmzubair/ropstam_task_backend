const yup = require('yup');

const categoryCreateValidation = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
});
const categoryUpdateValidation = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
});

module.exports = { categoryCreateValidation, categoryUpdateValidation };
