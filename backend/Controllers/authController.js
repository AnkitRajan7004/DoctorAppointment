import User from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const generateToken = user => {
    return jwt.sign({id:user_id, role:user.role}, process.env.JWT_SECRET_KEY, {
        expiresIn:'15d',
    })

}

export const register = async(req, res) => {
    const {email, password, name, role, photo, gender} =req.body
     
    try {
        let user = null;

        if (role ==='patient'){
           user = User.findOne({email});
        } else if(role === 'doctor'){
            user = await Doctor.findOne({email});
        }

        // check if use does exist
        if (user) {
            return res.status(400).json({message:'User already exist'})
        }


        //hash passsword
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        if (role==='patient') {
            user =new User({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            })
        }
        
        if (role==='doctor') {
            user =new Doctor({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            })
        }

        await user.save();

        res.status(200).json({sucess:true, message:"User successfully created"})



    }  catch (err) {
        res.status(500).json({sucess:false, message:"Internal service error, TRY AGAIN!"})
   }    
};

export const login = async(req, res) => {

    const {email} =req.body
    try{

        let user = null;
        const patient =await User.findOne({email})
        const doctor =await Doctor.findOne({email})

        if(patient){
            user =patient
        }
        if (doctor){
            user = doctor
        }

        //check if user exist or  not
        if(!user){
            return res.status(404).json({message:"User not found"})
            }

        //compare password
        const isPasswordMatch= await bcrypt.compare(req.body.password, user.password)

        if(!isPasswordMatch){
            return  res.status(400).json({status:false, message:"Incorrect password"})
        }

        //get token
        const token = generateToken(user)

        const {password, role, appointments, ...rest}= user._doc
        res
        .satus(200).json({status:true, message:"Succesfully Login", token, data:{...rest} , role});

    } catch (err) {
        res
        .status(500)
        .json({status:false, message:"Failed to login"});
    }
};