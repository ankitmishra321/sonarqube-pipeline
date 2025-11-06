"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});
app.get('/api/dummy', (_req, res) => {
    res.json({ message: 'Hello from dummy API', timestamp: Date.now() });
});
app.post('/api/echo', (req, res) => {
    res.json({ youSent: req.body });
});
exports.default = app;
