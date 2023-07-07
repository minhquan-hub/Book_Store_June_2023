import express from "express";
import cors from "cors";
import morgan from "morgan";
import YAML from "yaml";
import * as fs from "fs";
import swaggerUi from "swagger-ui-express";

import { cartRouter, authRouter, bookRouter, userRouter } from "./routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Router
app.use("/api/cart", cartRouter);
app.use("/api/auth", authRouter);
app.use("/api/book", bookRouter);
app.use("/api/user", userRouter);

// Swagger
const apiDocument = fs.readFileSync("./src/swagger/openapi.yaml", "utf8");
const swaggerDocument = YAML.parse(apiDocument);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
