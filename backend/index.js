import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import serverless from "serverless-http";

// Import route files
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// CORS options
const corsOptions = {
  origin: true, // Allow all origins
  credentials: true,
};

// MongoDB Connection Function
mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
  }
};

// Connect to DB at cold start
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);

// Test route
app.get("/", (req, res) => {
  res.send("✅ API is working");
});

// Export as a serverless handler
export const handler = serverless(app);
