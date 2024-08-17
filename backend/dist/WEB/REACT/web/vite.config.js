"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const path_1 = __importDefault(require("path"));
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    root: path_1.default.resolve(__dirname, 'src'),
    resolve: {
        alias: {
            '~bootstrap': path_1.default.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    server: {
        port: 8080,
    }
});
