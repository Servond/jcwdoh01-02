"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = writeJson;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function writeJson(params) {
    try {
        const filePath = path_1.default.join(__dirname, "./db/db.json");
        fs_1.default.readFile(filePath, "utf-8", (err, data) => {
            if (err) {
                throw new Error("Error reading data");
            }
            let { expense } = JSON.parse(data);
            const newExpense = Object.assign({ id: expense.length + 1, date: new Date() }, params);
            expense.push(newExpense);
            fs_1.default.writeFile(filePath, JSON.stringify({ expense }, null, 2), "utf-8", (err) => {
                if (err)
                    throw new Error("Error writing data");
            });
        });
    }
    catch (err) {
        throw err;
    }
}
