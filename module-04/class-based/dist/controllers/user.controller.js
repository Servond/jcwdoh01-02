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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_dal_1 = require("../dal/user.dal");
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    createUserController(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.userService.createUserService(req.body);
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
    taskScheduler(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_dal_1.UserDAL.updateActiveUserDal();
                res.json({
                    message: "OK",
                });
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.UserController = UserController;
