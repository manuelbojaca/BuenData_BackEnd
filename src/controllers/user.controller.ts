import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import pool from '@src/db';

const indexContorller = {
  async getUsers(_req: Request, res: Response) {
    try {
      const users: QueryResult = await pool.query('SELECT * FROM users');
      if (!users.rowCount) throw new Error('Empty');
      res.status(200).json({ message: 'Users found', data: users.rows });
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      res.status(400).json({ message: 'Users not found', error: message });
    }
  },
  async getUserById(req: Request, res: Response) {
    try {
      const userid = parseInt(req.params.userid, 10);
      const user: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [userid]);
      if (!user.rowCount) throw new Error('Invalid userid');
      res.status(200).json({ message: 'User found', data: user.rows });
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      res.status(400).json({ message: 'User not found', error: message });
    }
  },
  async createUser(req: Request, res: Response) {
    try {
      const { name, birthday } = req.body;
      const user: QueryResult = await pool.query('INSERT INTO users (name, birthday) VALUES ($1, $2)', [
        name,
        birthday,
      ]);
      console.log('User: ', user);
      res.status(200).json({ message: 'User created', data: user.rows });
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      res.status(400).json({ message: 'User could not be created', error: message });
    }
  },
  async updateUser(req: Request, res: Response) {
    try {
      const { name, birthday } = req.body;
      const userid = parseInt(req.params.userid, 10);
      const user: QueryResult = await pool.query('UPDATE users SET name = $1, birthday = $2 WHERE id = $3', [
        name,
        birthday,
        userid,
      ]);
      if (!user.rowCount) throw new Error('Invalid userid');
      res.status(200).json({ message: 'User updated', data: user.rows });
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      res.status(400).json({ message: 'User could not be updated', error: message });
    }
  },
  async destroyUser(req: Request, res: Response) {
    try {
      const userid = parseInt(req.params.userid, 10);
      await pool.query('DELETE FROM users WHERE id = $1', [userid]);
      res.status(200).json({ message: 'User deleted' });
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      res.status(400).json({ message: 'User could not be deleted', error: message });
    }
  },
};

export default indexContorller;
