import { Router } from "express";
import db from "#db/client";

const router = Router();

// GET /tracks
router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query("SELECT * FROM tracks");
    res.send(rows);
  } catch (e) {
    next(e);
  }
});

// GET /tracks/:id
router.get("/:id", async (req, res, next) => {
  try {
    // We have serial id's so it can only be integers => check isNaN
    if (isNaN(req.params.id)) {
      return res.status(400).send({ message: "id must be a number" });
    }

    const { rows } = await db.query(
      `
      SELECT * FROM tracks
      WHERE id = $1
      `,
      [req.params.id],
    );

    if (!rows.length) {
      return res.status(404).send({ message: "track not found" });
    }

    res.send(rows[0]);
  } catch (e) {
    next(e);
  }
});

export default router;
