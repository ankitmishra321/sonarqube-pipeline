import express, { Request, Response } from 'express';
import { getHealthResponse, getDummyResponse, getEchoResponse } from './lib/responses';

const app = express();
app.disable('x-powered-by');
app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
    res.json(getHealthResponse());
});

app.get('/api/dummy', (_req: Request, res: Response) => {
    res.json(getDummyResponse());
});

app.post('/api/echo', (req: Request, res: Response) => {
    res.json(getEchoResponse(req.body));
});

export default app;
