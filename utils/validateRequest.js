const yup = require('yup');

function validateRequest(schema) {
    return async function (req, res, next) {
        try {
            const validatedBody = await schema.validate(req.body, { abortEarly: false });
            req.body = validatedBody;
            next();
        } catch (error) {
            const errors = error.inner.reduce((acc, curr) => {
                acc[curr.path] = curr.message;
                return acc;
            }, {});

            res.status(400).json({ message: 'Validation error', errors });
        }
    };
}

module.exports = validateRequest;
