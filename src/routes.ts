import { Router, Request, Response } from "express";
import Logger from '../config/logger'
import { allMovies, createMovie } from "./controllers/moviesController";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('API Ok!');
});

router.get('/movies', allMovies);

router.post('/movie', createMovie);


export default router;