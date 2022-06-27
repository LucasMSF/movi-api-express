import { Request, Response } from "express";

import Logger from '../../config/logger'
import { Movie } from "../models/Movie";

export const allMovies = async (req: Request, res: Response) => { 
    try {
        res.json(await Movie.findAll()) 
    } catch (error) {
        Logger.error(error)
        res.status(500).json({error: true, message: error})
    }
}

export const createMovie = async (req: Request, res: Response) => {
    try {
        const { title, rating, description, stars, poster } = req.body;
        const newMovie = await Movie.create({ title, rating, description, stars, poster });
        res.json({ success: true, newMovie });
    } catch (error) {
        Logger.error(error)
        res.status(500).json({error: true, message: error})
    }
}

export const findMovieById = async (req: Request, res: Response) => {
    try {
        const movie = await Movie.findByPk(req.params.id)
        if(movie) res.json(movie)
        else res.status(404).json({error: true, message: 'Movie not found'});
    } catch (error) {
        Logger.error(error)
        res.status(500).json({error: true, message: error})
    }
}