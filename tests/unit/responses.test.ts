import { getHealthResponse, getDummyResponse, getEchoResponse } from '../../src/lib/responses';

describe('responses module (unit)', () => {
    test('getHealthResponse returns expected shape', () => {
        const res = getHealthResponse();
        expect(res).toEqual({ status: 'ok' });
    });

    test('getDummyResponse returns message and numeric timestamp', () => {
        const res = getDummyResponse();
        expect(res).toHaveProperty('message', 'Hello from dummy API');
        expect(typeof res.timestamp).toBe('number');
        // timestamp should be reasonably recent (within 60s)
        expect(Date.now() - res.timestamp).toBeLessThan(60_000);
    });

    test('getEchoResponse echoes arbitrary body', () => {
        const payload = { a: 1, b: 'two' };
        const res = getEchoResponse(payload);
        expect(res).toEqual({ youSent: payload });
    });
});
