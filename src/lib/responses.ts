export function getHealthResponse() {
    return { status: 'ok' } as const;
}

export function getDummyResponse() {
    return { message: 'Hello from dummy API', timestamp: Date.now() };
}

export function getEchoResponse(body: unknown) {
    return { youSent: body };
}
