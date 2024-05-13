require("dotenv").config();

import express from "express";

const app = express();

app.use(
  express.static(
    __dirname + "/" + process.env.FOLDER_HTML || __dirname + "/../public"
  )
);

app.get("/", (_, res) => {
  res.sendFile("index.html");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening in ${process.env.PORT}`);
});
