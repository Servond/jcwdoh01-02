"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const user_service_1 = require("../services/user.service");
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.userService = new user_service_1.UserService();
        this.userController = new user_controller_1.UserController(this.userService);
        this.initializeRouter();
    }
    initializeRouter() {
        this.router.post("/", this.userController.createUserController.bind(this.userController));
        this.router.get("/schedule", this.userController.taskScheduler.bind(this.userController));
    }
}
exports.UserRouter = UserRouter;
