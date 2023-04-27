import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

dotenv.config();

connectDb();

const app = express();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/products", productRouter);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
