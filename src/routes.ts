import { Router, Request, Response } from "express";
import db from '../config/db'
import Logger from '../config/logger'

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('API Ok!');
});

router.get('/users', (req: Request, res: Response) => {
    const con = db.getConnection();
    con.query('SELECT * FROM users', (err, result) => {
        if(err) res.json(err)
        else res.json(result);
    });
});


export default router;