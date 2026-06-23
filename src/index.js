import express from "express";
import { config } from "./lib/env.js";
import { iniDb } from "./db/models/index.js";
import { teacherRouter } from "./routes/teacher.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

const app = express();
app.use(express.json());


app.use("/teachers", teacherRouter);
app.use(errorMiddleware);

app.listen(config.port, async () => {
  await iniDb();
  console.log(`server running`);
});

//this is student branch
//this is a new line from main