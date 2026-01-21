require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(__dirname));

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

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

app.get(
  "/api/dog/random",
  asyncHandler(async (req, res) => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    res.json({ success: true, data, error: null });
  }),
);

app.get(
  "/api/breed/:breedName",
  asyncHandler(async (req, res) => {
    const breedName = req.params.breedName;
    const response = await fetch(
      `https://dog.ceo/api/breed/${breedName}/images/random`,
    );
    const data = await response.json();

    if (data.status === "error") {
      return res
        .status(404)
        .json({ success: false, data: null, error: "Breed not found" });
    }

    res.json({ success: true, data, error: null });
  }),
);

app.get(
  "/api/breeds",
  asyncHandler(async (req, res) => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const breed = Object.keys(data.message);
    res.json({ success: true, data: breed, error: null });
  }),
);

app.get(
  "/api/breed/:breedName/images",
  asyncHandler(async (req, res) => {
    const breedName = req.params.breedName;
    const count = Number(req.query.count) || 3;

    if (req.query.count && isNaN(Number(req.query.count))) {
      return res
        .status(400)
        .json({ success: false, data: null, error: "Must input number" });
    }

    if (count < 1 || count > 10) {
      return res.status(400).json({
        success: false,
        data: null,
        error: "Must be positive integer between 1 and 10",
      });
    }

    const response = await fetch(
      `https://dog.ceo/api/breed/${breedName}/images/random/${count}`,
    );
    const data = await response.json();
    res.json({ success: true, data, error: null });
  }),
);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    success: false,
    data: null,
    error: "Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
