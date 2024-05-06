const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(cors());
