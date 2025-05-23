import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from './../../Components/Doctors/DoctorCard.jsx';
import Loading from "../../Components/Loader/Loading";
import Error from "../../Components/Error/Error";
import { BsTypeH2 } from "react-icons/bs";

const Bookings = () => {
    const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/users/appointment/my-appointments`);

    return (
        <div>
            {loading && <Loading />}
            {error && <Error errorMessage={error} />}

            {!loading && (
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-5">
                    {appointments.map((doctor) => (
                        <DoctorCard doctor={doctor} key={doctor._id} />
                    ))}
                </div>
            )}

            {!loading && appointments.length === 0 && (
                <h2 className="mt-5 text-center text-headingColor leading-7 text-[20px] font-semibold text-primaryColor">
                    You did not book any doctor yet!
                </h2>
            )}
        </div>
    );
};

export default Bookings;
