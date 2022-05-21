const handleValidation = (req, res, next, schema) => {
    const { error } = schema.validate(req.body, { abortEarly: false })
    if (error) {
        const errors = error.details.map((item) => ({
            field: item.path[0],
            message: item.message,
        }))

        return res.status(422).json({
            error: {
                message: 'INVALID_PAYLOAD',
                content: errors,
            },
        })
    }
    next()
}

module.exports = { handleValidation }