const yup = require('yup');

const categoryCreateValidation = yup.object().shape({
    name: yup.string().required(),
});
const categoryUpdateValidation = yup.object().shape({
    name: yup.string(),
});

module.exports = { categoryCreateValidation, categoryUpdateValidation };
