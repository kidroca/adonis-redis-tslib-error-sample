"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Env_1 = tslib_1.__importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const sessionConfig = {
    driver: Env_1.default.get('SESSION_DRIVER'),
    cookieName: 'adonis-session',
    clearWithBrowser: false,
    age: '2h',
    cookie: {
        path: '/',
        httpOnly: true,
        sameSite: false,
    },
    file: {
        location: '',
    },
    redisConnection: 'local',
};
exports.default = sessionConfig;
//# sourceMappingURL=session.js.map