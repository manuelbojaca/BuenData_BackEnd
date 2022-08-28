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
const db_1 = __importDefault(require("@src/db"));
const indexContorller = {
    getUsers(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield db_1.default.query('SELECT * FROM users');
                if (!users.rowCount)
                    throw new Error('Empty');
                res.status(200).json({ message: 'Users found', data: users.rows });
            }
            catch (err) {
                let message;
                if (err instanceof Error)
                    message = err.message;
                else
                    message = String(err);
                res.status(400).json({ message: 'Users not found', error: message });
            }
        });
    },
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userid = parseInt(req.params.userid, 10);
                const user = yield db_1.default.query('SELECT * FROM users WHERE id = $1', [userid]);
                if (!user.rowCount)
                    throw new Error('Invalid userid');
                res.status(200).json({ message: 'User found', data: user.rows });
            }
            catch (err) {
                let message;
                if (err instanceof Error)
                    message = err.message;
                else
                    message = String(err);
                res.status(400).json({ message: 'User not found', error: message });
            }
        });
    },
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, birthday } = req.body;
                const user = yield db_1.default.query('INSERT INTO users (name, birthday) VALUES ($1, $2)', [
                    name,
                    birthday,
                ]);
                console.log('User: ', user);
                res.status(200).json({ message: 'User created', data: user.rows });
            }
            catch (err) {
                let message;
                if (err instanceof Error)
                    message = err.message;
                else
                    message = String(err);
                res.status(400).json({ message: 'User could not be created', error: message });
            }
        });
    },
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, birthday } = req.body;
                const userid = parseInt(req.params.userid, 10);
                const user = yield db_1.default.query('UPDATE users SET name = $1, birthday = $2 WHERE id = $3', [
                    name,
                    birthday,
                    userid,
                ]);
                if (!user.rowCount)
                    throw new Error('Invalid userid');
                res.status(200).json({ message: 'User updated', data: user.rows });
            }
            catch (err) {
                let message;
                if (err instanceof Error)
                    message = err.message;
                else
                    message = String(err);
                res.status(400).json({ message: 'User could not be updated', error: message });
            }
        });
    },
    destroyUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userid = parseInt(req.params.userid, 10);
                yield db_1.default.query('DELETE FROM users WHERE id = $1', [userid]);
                res.status(200).json({ message: 'User deleted' });
            }
            catch (err) {
                let message;
                if (err instanceof Error)
                    message = err.message;
                else
                    message = String(err);
                res.status(400).json({ message: 'User could not be deleted', error: message });
            }
        });
    },
};
exports.default = indexContorller;
