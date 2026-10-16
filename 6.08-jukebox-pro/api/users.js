import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();
export default router;

import { createToken } from "#utils/jwt";
import requireBody from "#middleware/requireBody";
import { createUser, getUserByUsername } from "#db/queries/users";

// This file is for registering a new user and logging in an existing user
// Remember .hash is for creation && .compare is for login
// 201 = creation, 200 = login

router.post(
  "/register",
  requireBody(["username", "password"]),
  async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(username, hashedPassword);
    const token = createToken({ id: user.id });
    res.status(201).send(token);
  },
);

router.post(
  "/login",
  requireBody(["username", "password"]),
  async (req, res) => {
    const { username, password } = req.body;
    const user = await getUserByUsername(username);
    if (!user) {
      return res.status(400).send({ message: "No user found." });
    }
    const comparedPassword = await bcrypt.compare(password, user.password);
    if (!comparedPassword) {
      return res.status(400).send({ message: "No password match." });
    }
    const token = createToken({ id: user.id });
    res.status(200).send(token);
  },
);
