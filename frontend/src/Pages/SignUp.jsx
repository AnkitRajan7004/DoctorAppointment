import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import signupImg from "../assets/images/signup.gif";
import uploadImageToCloudinary from "../utils/uploadimage";
import { BASE_URL } from '../config.js';
import { toast } from 'react-toastify';
import HashLoader from "react-spinners/HashLoader";

const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '', // added phone number field
    photo: selectedFile,
    gender: '',
    role: 'patient',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    const data = await uploadImageToCloudinary(file);
    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate('/login');
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-5">
          {/*=====img box====*/}
          <div className="hidden lg:block bg-primaryColor rounded-lg shadow-lg">
            <figure className="rounded-lg overflow-hidden">
              <img src={signupImg} alt="Sign Up" className="w-full rounded-lg shadow-md transform transition duration-500 hover:scale-105" />
            </figure>
          </div>

          {/*=====sign up form====*/}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 text-center">
              Create an <span className="text-primaryColor"> account </span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b-2 border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor transition duration-300 ease-in-out transform hover:scale-105"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b-2 border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor transition duration-300 ease-in-out transform hover:scale-105"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b-2 border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor transition duration-300 ease-in-out transform hover:scale-105"
                  required
                />
              </div>

              {/*===== Phone Number field =====*/}
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b-2 border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor transition duration-300 ease-in-out transform hover:scale-105"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label htmlFor="" className="text-headingColor font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-primaryColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-headingColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    <option value="">Select</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && (
                  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                    <img src={preview} alt="User Photo" className="w-full rounded-full" />
                  </figure>
                )}

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customfile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customfile"
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg py-3 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                >
                  {loading ? <HashLoader size={35} color="#ffffff" /> : 'Sign Up'}
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link to="/login" className="text-primaryColor font-medium ml-1">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
