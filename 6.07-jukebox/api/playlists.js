import { Router } from "express";
import db from "#db/client";

const router = Router();

// GET /playlists
router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query(`SELECT * FROM playlists`);
    res.json(rows);
  } catch (e) {
    next(e);
  }
});

// POST /playlists
router.post("/", async (req, res, next) => {
  try {
    // body => body.name => body.descripption
    if (!req.body || !req.body.name || !req.body.description) {
      return res
        .status(400)
        .send({ message: "name and description are required" });
    }

    const { rows } = await db.query(
      `
      INSERT INTO playlists (name, description)
      VALUES ($1, $2)
      RETURNING *
      `,
      [req.body.name, req.body.description],
    );
    res.status(201).send(rows[0]);
  } catch (e) {
    next(e);
  }
});

// GET /playlists/:id
router.get("/:id", async (req, res, next) => {
  try {
    if (isNaN(req.params.id)) {
      return res.status(400).send({ message: "id must be a number" });
    }

    const { rows } = await db.query(
      `
      SELECT * FROM playlists
      WHERE id = $1
      `,
      [req.params.id],
    );

    if (!rows.length) {
      return res.status(404).send({ message: "playlist not found" });
    }

    res.send(rows[0]);
  } catch (e) {
    next(e);
  }
});

// GET /playlists/:id/tracks
router.get("/:id/tracks", async (req, res, next) => {
  try {
    if (isNaN(req.params.id)) {
      return res.status(400).send({ message: "id must be a number" });
    }

    const { rows: playlist } = await db.query(
      `SELECT * FROM playlists WHERE id = $1`,
      [req.params.id],
    );

    if (!playlist.length) {
      return res.status(404).send({ message: "playlist not found" });
    }

    const { rows: tracks } = await db.query(
      `
      SELECT t.*
      FROM tracks t
      JOIN playlists_tracks pt ON t.id = pt.track_id
      WHERE pt.playlist_id = $1
      `,
      [req.params.id],
    );

    res.json(tracks);
  } catch (e) {
    next(e);
  }
});

// Need to review post into juction tables
// POST /playlists/:id/tracks
router.post("/:id/tracks", async (req, res, next) => {
  // Check exist
  try {
    if (isNaN(req.params.id)) {
      return res.status(400).send({ message: "id must be a number" });
    }

    if (!req.body || !req.body.trackId) {
      return res.status(400).send({ message: "trackId is required" });
    }

    if (isNaN(req.body.trackId)) {
      return res.status(400).send({ message: "trackId must be a number" });
    }

    const { rows: playlist } = await db.query(
      `SELECT * FROM playlists WHERE id = $1`,
      [req.params.id],
    );

    if (!playlist.length)
      return res.status(404).send({ message: "playlist not found" });

    // Check if track exists
    const { rows: track } = await db.query(
      `SELECT * FROM tracks WHERE id = $1`,
      [req.body.trackId],
    );

    if (!track.length) {
      return res.status(400).send({ message: "track does not exist" });
    }

    // Check if track is already in playlist
    const { rows: existing } = await db.query(
      `SELECT * FROM playlists_tracks WHERE playlist_id = $1 AND track_id = $2`,
      [req.params.id, req.body.trackId],
    );

    if (existing.length) {
      return res.status(400).send({ message: "track is already in playlist" });
    }

    // Insetr it into the junction table
    const { rows } = await db.query(
      `
      INSERT INTO playlists_tracks (playlist_id, track_id)
      VALUES ($1, $2)
      RETURNING *
      `,
      [req.params.id, req.body.trackId],
    );

    // send it
    res.status(201).send(rows[0]);
  } catch (e) {
    next(e);
  }
});

export default router;
