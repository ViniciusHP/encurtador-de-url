import express, { NextFunction, Request, Response } from 'express';

const api = express();

api.use('/test', (req: Request, res: Response, next: NextFunction) => {
  res.json({ success: true });
});

api.listen(5000, () => console.log("API iniciada na porta 5000"));