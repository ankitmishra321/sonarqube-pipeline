# sonarqube-pipeline
This repository contains the implementation of sonarqube in nodejs using github actions.

## Dummy API

A tiny Express-based dummy API was added for quick testing and demos.

- **Files:** `index.js`, `package.json`
- **Endpoints:**
	- `GET /health` — returns `{ status: 'ok' }`
	- `GET /api/dummy` — returns a sample JSON message
	- `POST /api/echo` — echoes back JSON sent in the request body

Run locally:

```bash
# install dependencies
npm install

# start server
npm start

# health check
curl http://localhost:3000/health

# dummy
curl http://localhost:3000/api/dummy

# echo (example)
curl -X POST -H "Content-Type: application/json" -d '{"name":"you"}' http://localhost:3000/api/echo
```

TypeScript & tests

This project has been converted to TypeScript and includes tests using `jest` + `ts-jest` and `supertest`.

Run tests:

```bash
# install deps
npm install

# run tests
npm test

# run in dev (auto-reload)
npm run dev
```
