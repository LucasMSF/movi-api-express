import { body } from 'express-validator'

export const createValidator = () => {
    return [
        body('title').isString(),
        body('rating').isNumeric(),
        body('description').isString(),
        body('stars').isNumeric(),
        body('poster').isString(),

    ]
}