"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db"));
// ROUTER
const expense_route_1 = __importDefault(require("./routes/expense.route"));
const PORT = 8080;
const app = (0, express_1.default)();
// MIDDLEWARE
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// ROUTE
app.get("/expenses", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category, type } = req.query;
        const response = yield db_1.default.query("select * from tracker_expense.expense where category = $1 and type = $2", [category, type]);
        res.json({
            message: "OK",
            content: response.rows,
        });
    }
    catch (err) {
        next(err);
    }
}));
app.use("/api/expenses", expense_route_1.default);
// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
    res.status(500).send(err === null || err === void 0 ? void 0 : err.message);
});
db_1.default.connect((err, client, release) => {
    if (err)
        return console.log("Error connection to DB");
    console.log("DB connected successfully");
    release();
});
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
