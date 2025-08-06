"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const env_1 = require("./config/env");
const taskScheduler_1 = __importDefault(require("./helpers/taskScheduler"));
const user_router_1 = require("./routers/user.router");
const error_middleware_1 = require("./middlewares/error.middleware");
class App {
    constructor() {
        this.port = Number(env_1.PORT) | 8080;
        this.app = (0, express_1.default)();
        this.initializeMiddlewares();
        // this.initializeTaskScheduler();
        this.initializeRoutes();
        this.initializeErrorMiddleware();
    }
    initializeMiddlewares() {
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    initializeRoutes() {
        this.app.use("/users", new user_router_1.UserRouter().router);
    }
    initializeErrorMiddleware() {
        this.app.use(error_middleware_1.ErrorMiddleware);
    }
    initializeTaskScheduler() {
        (0, taskScheduler_1.default)();
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server started on PORT ${this.port}`);
        });
    }
}
exports.App = App;
