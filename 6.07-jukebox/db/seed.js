import db from "#db/client";
import { faker } from "@faker-js/faker";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // clear it first
  await db.query("DELETE FROM playlists_tracks");
  await db.query("DELETE FROM playlists");
  await db.query("DELETE FROM tracks");

  // 20 tracks
  const tracks = [];
  for (let i = 0; i < 20; i++) {
    const { rows } = await db.query(
      `INSERT INTO tracks (name, duration_ms) VALUES ($1, $2) RETURNING id`,
      [faker.music.songName(), faker.number.int({ min: 60000, max: 300000 })],
    );
    tracks.push(rows[0].id);
  }

  // 10 playlists
  const playlists = [];
  for (let i = 0; i < 10; i++) {
    const { rows } = await db.query(
      `INSERT INTO playlists (name, description) VALUES ($1, $2) RETURNING id`,
      [faker.music.genre(), faker.lorem.sentence()],
    );
    playlists.push(rows[0].id);
  }

  // 15 playlists_tracks (unique combos)
  const used = new Set();
  let count = 0;
  while (count < 15) {
    const playlistId = faker.helpers.arrayElement(playlists);
    const trackId = faker.helpers.arrayElement(tracks);
    const key = `${playlistId}-${trackId}`;

    // checks for uniqueness
    if (used.has(key)) continue;
    used.add(key);

    await db.query(
      `INSERT INTO playlists_tracks (playlist_id, track_id) VALUES ($1, $2)`,
      [playlistId, trackId],
    );
    count++;
  }
}
