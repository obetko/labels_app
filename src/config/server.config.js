import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
const app = express();

import labelRoutes from "../routes/label.routes.js";

dotenv.config({ path: "src/env/.env" });
app.set("port", process.env.PORT || 4000);
app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true })),
  app.use(express.static("src/public/"));
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.render("index");
});
app.use("/", labelRoutes);
app.use("*", (req, res) => {
  res.send("Page not found!");
});

app.listen(app.get("port"), () => {
  try {
    console.log(
      colors.yellow("Server running on http://localhost:" + app.get("port"))
    );
  } catch (error) {
    console.log(colors.red("Server down!"));
  }
});

export default app;
