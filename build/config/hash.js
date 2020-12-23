"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Env_1 = tslib_1.__importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const hashConfig = {
    default: Env_1.default.get('HASH_DRIVER', 'argon'),
    list: {
        argon: {
            driver: 'argon2',
            variant: 'id',
            iterations: 3,
            memory: 4096,
            parallelism: 1,
            saltSize: 16,
        },
        bcrypt: {
            driver: 'bcrypt',
            rounds: 10,
        },
    },
};
exports.default = hashConfig;
//# sourceMappingURL=hash.js.map