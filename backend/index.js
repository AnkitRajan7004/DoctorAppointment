import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Import route files
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// ✅ Allow both local and deployed frontend
const allowedOrigins = [
  "http://localhost:3000", // for local development
  "https://ankitdoctorappointment.vercel.app" // your deployed frontend
];

// ✅ CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ MongoDB connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
  }
};

// ✅ API routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);

// ✅ Test route - Default response
app.get("/", (req, res) => {
  res.send("Hello");
});

// ✅ Start server
app.listen(port, () => {
  connectDB();
  console.log(`🚀 Server is running on port ${port}`);
});
