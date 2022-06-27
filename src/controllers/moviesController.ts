import { Request, Response } from "express";

import Logger from '../../config/logger'
import { Movie } from "../models/Movie";

export const allMovies = async (req: Request, res: Response) => { 
    try {
        res.json(await Movie.findAll()) 
    } catch (error) {
        res.json({error: true, message: error})
    }
}

export const createMovie = async (req: Request, res: Response) => {
    try {
        const { title, rating, description, stars, poster } = req.body;
        const newMovie = await Movie.create({ title, rating, description, stars, poster });
        res.json({ success: true, newMovie });
    } catch (error) {
        res.json({error: true, message: error})
    }
}