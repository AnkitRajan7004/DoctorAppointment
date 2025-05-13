import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import { authContext } from "../context/AuthContext.jsx";
import HashLoader from "react-spinners/HashLoader.js";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      console.log(result, "login data");

      setLoading(false);
      toast.success("Logged in successfully!");
      navigate('/home');
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0 min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-[480px] mx-auto rounded-xl shadow-md bg-white p-6 md:p-10">
        <h3 className="text-headingColor text-[24px] leading-9 font-bold mb-8 text-center">
          Hello! <span className="text-primaryColor">Welcome</span> Back 🥳
        </h3>

        <form className="space-y-6" onSubmit={submitHandler}>
          <div>
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-3 px-4 rounded-md shadow-sm border border-gray-300 focus:outline-none 
              focus:border-primaryColor focus:ring-2 focus:ring-primaryColor text-[16px] text-headingColor 
              placeholder:text-gray-400 transition duration-200"
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-3 px-4 rounded-md shadow-sm border border-gray-300 focus:outline-none 
              focus:border-primaryColor focus:ring-2 focus:ring-primaryColor text-[16px] text-headingColor 
              placeholder:text-gray-400 transition duration-200"
              required
            />
            <span
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-primaryColor cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
              className="w-4 h-4 text-primaryColor"
            />
            <label className="text-sm text-textColor">Remember Me</label>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-primaryColor hover:bg-blue-700 transition duration-200 text-white text-[18px] font-semibold leading-[30px] rounded-lg py-3"
            >
              {loading ? <HashLoader size={25} color="#fff" /> : 'Login'}
            </button>
          </div>

          <p className="mt-6 text-textColor text-center">
            Don't have an account?
            <Link to='/register' className="text-primaryColor font-semibold ml-1 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
