import express from "express";
import  { 
    updatedDoctor,
    deleteDoctor,
    getAllDoctor, 
    getSingleDoctor, 
    getDoctorProfile
    } from "../Controllers/doctorController.js";
import { authenticate , restrict } from "../auth/verifyToken.js";

import reviewRouter from "./review.js";

const router = express.Router();

// nested routex
router.use("/:doctorId/reviews", reviewRouter);

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put("/:id",authenticate, restrict(["doctor"]), updatedDoctor);
router.delete("/:id" ,authenticate, restrict(["doctor"]), deleteDoctor);

router.get("/profile/me", authenticate, restrict(['doctor']),getDoctorProfile);


export default router;