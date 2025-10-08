"use strict"
import Joi from "joi"

export const UserQueryValidation = Joi.object({
    id_user: Joi.number()
        .integer()
        .positive()
        .messages({
            "number.base": "Porfavor, ingresa un número",
            "number.integer": "Porfavor, ingresa un número entero",
            "number.positive": "Porfavor, ingresa un número positivo",
        }),
    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.empty": "Porfavor, ingresa un correo electrónico",
            "any.required": "El correo electrónico es obligatorio",
            "string.email": "Porfavor, ingresa un correo electrónico válido",
        }),
    password: Joi.string()
        .min(8)
        .max(30)
        .pattern(/[a-zA-Z0-9]+$/)
        .messages({
            "string.empty": "Porfavor, ingresa una contraseña",
            "any.required": "La contraseña es obligatoria",
            "string.min": "La contraseña debe tener al menos 8 caracteres",
            "string.max": "La contraseña no debe exceder los 30 caracteres",
            "string.base": "La contraseña es de tipo texto",
            "string.pattern.base": "La contraseña solo puede contener letras y números (mayusculas y minúsculas",
        }),

})