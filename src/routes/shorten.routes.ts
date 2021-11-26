import { NextFunction, Request, Response, Router } from "express";
import shortId from 'shortid';
import { config } from '../config/Constants';

const shortenRoute = Router();

shortenRoute.post('/shorten', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { originURL } = req.body;
  const hash = shortId.generate();
  const shortURL = `${config.API_URL}/${hash}`;

  res.json({ originURL, hash, shortURL });
});

shortenRoute.get('/:hash', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { hash } = req.params;

  const url = {
    originURL: "https://www.google.com/",
    hash: "M8eDs9lfJ",
    shortURL: "http://localhost:5000/M8eDs9lfJ"
  }

  res.redirect(url.originURL);
});

export default shortenRoute;
