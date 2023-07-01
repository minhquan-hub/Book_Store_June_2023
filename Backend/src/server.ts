import dotenv from "dotenv";
import "reflect-metadata";
import mongoose, { MongooseOptions } from "mongoose";
import { NextFunction, Request, Response } from "express";

import app from "./app";
import ApiError from "./error_handling/errors/api_error";

dotenv.config();
const port = process.env.PORT || 5002;

const uri = process.env.MONGODB_URL;

mongoose
  .connect(String(uri), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as MongooseOptions)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const error = err as ApiError;
  res
    .status(error.statusCode ? error.statusCode : 500)
    .json(error.statusCode ? error.message : "Internal Server Error");
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
