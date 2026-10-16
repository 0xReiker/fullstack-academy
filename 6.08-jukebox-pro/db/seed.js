import db from "#db/client";
import bcrypt from "bcrypt";

import { createUser } from "#db/queries/users";
import { createPlaylist } from "#db/queries/playlists";
import { createPlaylistTrack } from "#db/queries/playlists_tracks";
import { createTrack } from "#db/queries/tracks";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // create user and has pswd first
  const hashedPw1 = await bcrypt.hash("password123", 10);
  const hashedPw2 = await bcrypt.hash("password456", 10);
  const user1 = await createUser("Alissa", hashedPw1);
  const user2 = await createUser("Bobathy", hashedPw2);

  // next is tracks
  const tracks = [];
  for (let i = 1; i <= 20; i++) {
    const track = await createTrack("Track " + i, i * 50000);
    tracks.push(track);
  }

  // and playlists (ea user has >= 1)
  const playlist1 = await createPlaylist(
    "Alissa's Acoustics",
    "Alissa's Aggressive Atomics",
    user1.id,
  );
  const playlist2 = await createPlaylist(
    "Bobathy's Bangers",
    "Bobathy's Bombastic Bangers",
    user2.id,
  );

  // >= 5 tracks per playlis
  for (let i = 0; i < 5; i++) {
    await createPlaylistTrack(playlist1.id, tracks[i].id);
    await createPlaylistTrack(playlist2.id, tracks[i + 5].id);
  }
}
