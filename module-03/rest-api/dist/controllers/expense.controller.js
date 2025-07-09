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
exports.readJSON = readJSON;
exports.writeJSON = writeJSON;
exports.getAll = getAll;
exports.getById = getById;
exports.create = create;
exports.updateById = updateById;
exports.deleteById = deleteById;
exports.getTotalExpense = getTotalExpense;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../db/db.json");
function readJSON() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const json = fs_1.default.readFileSync(filePath, "utf-8");
            let { expense } = yield JSON.parse(json);
            return expense;
        }
        catch (err) {
            throw err;
        }
    });
}
function writeJSON(expenses) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            fs_1.default.writeFileSync(filePath, JSON.stringify({ expense: expenses }, null, 2), "utf-8");
        }
        catch (err) {
            throw err;
        }
    });
}
function getAll(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield readJSON();
            res.json({
                message: "OK",
                data: response,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function getById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const response = yield readJSON();
            let findExpense = response.filter((i) => i.id === Number(id))[0];
            if (!findExpense)
                throw new Error("Data not found");
            res.json({
                message: "OK",
                data: findExpense,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield readJSON();
            const newExpense = Object.assign(Object.assign({}, req.body), { id: response.length + 1, date: new Date(req.body.date) });
            response.push(newExpense);
            yield writeJSON(response);
            res.json({
                message: "OK",
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function updateById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const response = yield readJSON();
            const index = response.findIndex((i) => i.id === Number(id));
            console.log(index);
            if (index < 0)
                throw new Error("Data not found");
            const expense = response.filter((i) => i.id === Number(id))[0];
            response.splice(index, 1);
            const editExpense = Object.assign(Object.assign({}, expense), req.body);
            response.splice(index, 0, editExpense);
            yield writeJSON(response);
            res.json({
                message: "OK",
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function deleteById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const response = yield readJSON();
            const index = response.findIndex((i) => i.id === Number(id));
            if (index < 0)
                throw new Error("Data not found");
            response.splice(index, 1);
            yield writeJSON(response);
            res.json({
                message: "OK",
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function getTotalExpense(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { dateFrom, dateTo, category } = req.query;
            let splitCategory = category === null || category === void 0 ? void 0 : category.split(", ");
            console.log(splitCategory);
            let response = yield readJSON();
            response = response.filter((i) => i.type === "EXPENSE");
            if (dateFrom && dateTo) {
                response = response.filter((i) => new Date(i.date).getTime() >= new Date(dateFrom).getTime() &&
                    new Date(i.date).getTime() <= new Date(dateTo).getTime());
            }
            let newArr = [];
            if (category) {
                splitCategory === null || splitCategory === void 0 ? void 0 : splitCategory.map((item) => {
                    let temp = response.filter((i) => i.category === item);
                    newArr.push(...temp);
                });
            }
            else {
                newArr = [...response];
            }
            let totalExpense = 0;
            newArr.map((item) => (totalExpense += item.nominal));
            res.json({
                message: "OK",
                data: {
                    totalExpense,
                    newArr,
                },
            });
        }
        catch (err) {
            next(err);
        }
    });
}
