import { Router, Request, Response } from "express";
import { allMovies, createMovie, findMovieById } from "../controllers/moviesController";
import { createValidator } from "../middlewares/moviesValidationMiddleware";
import { validate } from "../middlewares/validationMiddleware";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('API Ok!');
});

router.get('/movies', allMovies);

router.get('/movie/:id', findMovieById);

router.post('/movie', createValidator(), validate, createMovie);


export default router;