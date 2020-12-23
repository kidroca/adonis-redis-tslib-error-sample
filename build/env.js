"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Env_1 = tslib_1.__importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
exports.default = Env_1.default.rules({
    HOST: Env_1.default.schema.string({ format: 'host' }),
    PORT: Env_1.default.schema.number(),
    APP_KEY: Env_1.default.schema.string(),
    APP_NAME: Env_1.default.schema.string(),
    CACHE_VIEWS: Env_1.default.schema.boolean(),
    SESSION_DRIVER: Env_1.default.schema.string(),
    NODE_ENV: Env_1.default.schema.enum(['development', 'production', 'testing']),
});
//# sourceMappingURL=env.js.map