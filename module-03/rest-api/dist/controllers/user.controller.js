"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = getAll;
exports.getById = getById;
exports.create = create;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../db/db.json");
function getAll(req, res) {
    // GET http://localhost:8080/users?email=budi@gmail.com&umur=22
    const { email, umur } = req.query;
    res.json({
        user: "Budi",
        email,
        umur,
    });
}
function getById(req, res) {
    // GET http://localhost:8080/users/1
    const { id } = req.params;
    res.json({
        id,
    });
}
function create(req, res, next) {
    fs_1.default.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).send("error");
        }
        let { expense } = JSON.parse(data);
        const newExpense = Object.assign({ id: expense.length + 1, date: new Date() }, req.body);
        expense.push(newExpense);
        fs_1.default.writeFile(filePath, JSON.stringify({ expense }, null, 2), "utf-8", (err) => {
            if (err)
                return res.status(500).send("error");
            res.send("Success");
        });
    });
}
