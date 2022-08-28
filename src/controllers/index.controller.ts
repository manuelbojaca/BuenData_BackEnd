import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import pool from '@src/db';

const indexContorller = {
  async list(_req: Request, res: Response) {
    try {
      const users: QueryResult = await pool.query('SELECT * FROM users');
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
      res.status(200).json({ message: 'User found', data: user.rows });
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      res.status(400).json({ message: 'User not found', error: message });
    }
  },
};

export default indexContorller;
