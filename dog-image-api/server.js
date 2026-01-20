require("dotenv").config;
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    const timestamp = new Date().toISOString();
    console.log(
      `[${timestamp}] ${req.method} ${req.path} - ${res.statusCode} (${duration}ms)`,
    );
  });
  next();
});

app.get("/", (req, res) => {
  res.send("Dog Pics");
});

app.get("/api/dog/random", async (req, res) => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/breed/:breedName", async (req, res) => {
  try {
    const breedName = req.params.breedName;
    const response = await fetch(
      `https://dog.ceo/api/breed/${breedName}/images/random`,
    );
    const data = await response.json();

    if (data.status === "error") {
      return res.status(404).json({ error: "Breed not found" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/breeds", async (req, res) => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const breed = Object.keys(data.message);
    res.json(breed);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/breed/:breedName/images", async (req, res) => {
  try {
    const breedName = req.params.breedName;
    const count = Number(req.query.count) || 3;

    if (req.query.count && isNaN(Number(req.query.count))) {
      return res.status(400).json({ error: "Must input number" });
    }

    if (count < 1 || count > 10) {
      return res
        .status(400)
        .json({ error: "Must be positive integer between 1 and 10" });
    }

    const response = await fetch(
      `https://dog.ceo/api/breed/${breedName}/images/random/${count}`,
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
