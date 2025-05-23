import {useContext, useState} from "react";

import useImg from "../../assets/images/doctor-img01.png";
import {authContext} from "./../../context/AuthContext.jsx";

import MyBookings from "./MyBookings.jsx";
import Profile from "./Profile.jsx";

import useGetProfile from '../../hooks/useFetchData.jsx';
import { BASE_URL } from "../../config.js";

import Loading from "../../Components/Loader/Loading.jsx";
import Error from "../../Components/Error/Error.jsx";

const MyAccount =() => {
    const { dispatch } = useContext(authContext);
    const [ tab, setTab ] = useState('bookings');
    const {
        data:userData, 
        loading, 
        error
    } = useGetProfile(`${BASE_URL}/login/profile/me`)
    
    console.log(userData, 'userdata');

    const handleLogout = () => {
        dispatch({ type :"LOGOUT"});
    };    
// **====!loading && !error &&==== LINE-37**//
    return (
        <section>
    <div className="max-w-[1170px] px-5 mx-auto">
        {loading  && <Loading/>}

        {  error  && <Error erorMessage={error} />}

       {!loading &&  (
        <div className="grid md:grid-cols-3 gap-10">
        <div className="pb-[50px] px-[30px] rounded-md">
            <div className="flex items-center justify-center">                    
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                    <img 
                    src={useImg } 
                    alt="" 
                    className="w-full h-full rounded-full"/>
                </figure>
            </div>

            <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                    Mr. X
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                    example@gmail.com
                </p>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                    Blood Type:
                    <span className="ml-2 text-headingColor text-[22px] leading-8">
                        O+
                    </span>
                </p>
            </div>

            <div className="mt-[50px] md:mt-[100px]">
                <button 
                onClick={handleLogout} 
                className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white">
                    Logout
                </button>
                <button 
                className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                     Delete Account
                </button>
            </div>

        </div>

        <div className="md-col-span-2 md:px-[30px]">
            <div>
                <button 
                onClick={() => setTab("bookings")} 
                className={` ${
                    tab ==='bookings' && 'bg-primaryColor text-white font-normal'
                }  p-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border 
                border-solid border-primaryColor`}>
                    Bookings
                </button>

                <button 
                 onClick={() => setTab("settings")} 
                 className={` ${
                     tab ==='settings' && 'bg-primaryColor text-white font-normal'
                 } p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border 
                border-solid border-primaryColor`}>
                    Profile Setting
                </button>
            </div>

                {tab=== 'bookings' && <MyBookings/>}
                {tab=== 'settings' && <Profile/>}

        </div>

    </div>
        )
       }
    </div>
    </section>
    );
};

export default MyAccount;