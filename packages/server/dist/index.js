"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.listen(3333, () => {
    // tslint:disable-next-line: no-console
    console.log('Server running on port 3333');
});
//# sourceMappingURL=index.js.map