import { Router, Request, Response } from "express";
import { allMovies, createMovie, findMovieById, removeMovie, updateMovie } from "../controllers/moviesController";
import { createValidator, removeValidator } from "../middlewares/moviesValidationMiddleware";
import { validate } from "../middlewares/validationMiddleware";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('API Ok!');
});

router.get('/movies', allMovies);

router.get('/movie/:id', findMovieById);

router.post('/movie', createValidator(), validate, createMovie);

router.delete('/movie', removeValidator(), validate, removeMovie);

router.put('/movie/:id', updateMovie);


export default router;