import express from "express";
import  { 
    updatedUser, 
    deleteUser, 
    getAllUser, 
    getSingleUser,
    getUserProfile,
    getMyAppointments
} from "../Controllers/usercontroller.js";

import { authenticate , restrict } from "../auth/verifyToken.js";

const router = express.Router()

router.get("/:id", authenticate, restrict(["patient"]), getSingleUser);
router.get("/:id", authenticate, restrict(["addmin"]), getAllUser);
router.put("/:id",authenticate, restrict(["patient"]), updatedUser);
router.delete(":id",authenticate, restrict(["patient"]), deleteUser);
router.get("/:profile/me",authenticate, restrict(["patient"]), getUserProfile);
router.get("/:appointment/my-appointments",authenticate, restrict(["patient"]), getMyAppointments);

export default router;