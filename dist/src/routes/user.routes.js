"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("@src/controllers/user.controller"));
const router = (0, express_1.Router)();
router.route('/').get(user_controller_1.default.getUsers);
router.route('/:userid').get(user_controller_1.default.getUserById);
router.route('/').post(user_controller_1.default.createUser);
router.route('/:userid').patch(user_controller_1.default.updateUser);
router.route('/:userid').delete(user_controller_1.default.destroyUser);
exports.default = router;
