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
exports.UserDAL = void 0;
const db_1 = __importDefault(require("../lib/db"));
class UserDAL {
    static findUserByEmail(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield db_1.default.user.findFirst({
                    where: Object.assign({}, params),
                });
                return user;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static createUserDAL(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield db_1.default.user.create({
                    data: Object.assign({}, params),
                });
                return user;
            }
            catch (err) {
                throw err;
            }
        });
    }
    static updateActiveUserDal() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield db_1.default.user.updateMany({
                    data: {
                        isActive: true,
                    },
                    where: {
                        isActive: false,
                    },
                });
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.UserDAL = UserDAL;
