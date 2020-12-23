"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Logger_1 = tslib_1.__importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Logger"));
const HttpExceptionHandler_1 = tslib_1.__importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/HttpExceptionHandler"));
class ExceptionHandler extends HttpExceptionHandler_1.default {
    constructor() {
        super(Logger_1.default);
        this.statusPages = {
            '404': 'errors.not-found',
            '500..599': 'errors.server-error',
        };
    }
}
exports.default = ExceptionHandler;
//# sourceMappingURL=Handler.js.map