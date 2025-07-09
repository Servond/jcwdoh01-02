"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    try {
        throw new Error("oops");
    }
    catch (error) {
        next(error);
    }
}, user_controller_1.getAll);
router.get("/:id", user_controller_1.getById);
router.post("/", user_controller_1.create);
exports.default = router;
