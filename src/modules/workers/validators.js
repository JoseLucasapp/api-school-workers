const Joi = require('joi')
const { handleValidation } = require('../../helpers/validators')

const create = (req, res, next) => {
    const schema = Joi.object().keys({
        role: Joi.string().required().messages({
            'string.role': 'Email inválido',
            'string.empty': 'Por favor, insira a função.',
        }),
        name: Joi.string().required().max(100).messages({
            'string.empty': 'Por favor, insira o nome.',
            'string.max': 'O nome ultrapassa limite de 100 caracteres.',
        }),
        age: Joi.number().required().messages({
            'string.empty': 'Por favor, insira a idade.',
        }),
    })

    handleValidation(req, res, next, schema)
}

module.exports = { create }