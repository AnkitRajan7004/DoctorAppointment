import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

// Update user
export const updatedUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, message: 'Successfully Updated', data: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update!' });
    }
};

// Delete user
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Successfully Deleted' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete' });
    }
};

// Get single user
export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id).select("-password");
        res.status(200).json({ success: true, message: 'User found', data: user });
    } catch (err) {
        res.status(404).json({ success: false, message: 'No user found' });
    }
};

// Get all users
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({}).select("-password");
        res.status(200).json({ success: true, message: 'Users found', data: users });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Not found' });
    }
};

// Get user profile
export const getUserProfile = async (req, res) => {
    const userId = req.userId;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const { password, ...rest } = user._doc;
        res.status(200).json({ success: true, message: 'Profile info retrieved', data: rest });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Something went wrong' });
    }
};

// Get my appointments
export const getMyAppointments = async (req, res) => {
    try {
        // 1: Retrieve appointments from bookings for specific user
        const bookings = await Booking.find({ user: req.userId });

        // 2: Extract doctor IDs from bookings
        const doctorIds = bookings.map(el => el.doctor.id);

        // 3: Retrieve doctors based on those IDs
        const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password');

        res.status(200).json({ success: true, message: 'Appointments retrieved', data: doctors });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Something went wrong' });
    }
};
