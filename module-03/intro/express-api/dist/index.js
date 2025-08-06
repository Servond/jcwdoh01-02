"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 8080;
const app = (0, express_1.default)();
app.get("/api", (req, res) => {
    res.send("This is Express API");
});
app.get("/api", (req, res) => {
    res.send("This is GET Express API");
});
app.get("/api/users", (req, res) => {
    res.json({
        user: "Budi",
    });
});
app.post("/api", (req, res) => {
    res.send("This is POST Express API");
});
app.delete("/api", (req, res) => {
    res.send("This is DELETE Express API");
});
app.patch("/api", (req, res) => {
    res.send("This is PATCH Express API");
});
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
