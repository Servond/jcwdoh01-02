"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// ROUTER
const expense_route_1 = __importDefault(require("./routes/expense.route"));
const PORT = 8080;
const app = (0, express_1.default)();
// MIDDLEWARE
app.use(express_1.default.json());
// ROUTE
app.use("/expenses", expense_route_1.default);
// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
    res.status(500).send(err === null || err === void 0 ? void 0 : err.message);
});
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
