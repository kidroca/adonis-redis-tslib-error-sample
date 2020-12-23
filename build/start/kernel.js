"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Server_1 = tslib_1.__importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Server"));
Server_1.default.middleware.register(['Adonis/Core/BodyParserMiddleware']);
Server_1.default.middleware.registerNamed({});
//# sourceMappingURL=kernel.js.map