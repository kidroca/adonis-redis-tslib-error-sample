"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const standalone_1 = require("@adonisjs/core/build/standalone");
const Application_1 = tslib_1.__importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
exports.default = standalone_1.listDirectoryFiles(__dirname, Application_1.default.appRoot, ['./commands/index']);
//# sourceMappingURL=index.js.map