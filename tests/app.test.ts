import request from 'supertest';
import app from '../src/app';

describe('Dummy API', () => {
    test('GET /health returns ok', async () => {
        const res = await request(app).get('/health');
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ status: 'ok' });
    });

    test('GET /api/dummy returns message and timestamp', async () => {
        const res = await request(app).get('/api/dummy');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('timestamp');
    });

    test('POST /api/echo echoes JSON body', async () => {
        const payload = { name: 'you' };
        const res = await request(app)
            .post('/api/echo')
            .send(payload)
            .set('Content-Type', 'application/json');

        expect(res.status).toBe(200);
        expect(res.body.youSent).toEqual(payload);
    });
});
