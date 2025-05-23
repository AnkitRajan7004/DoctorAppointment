import React from "react"; 

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Routers from "../Routes/Routers";

const Layout = () => {
    return (
        <>
            {/* Header Component */}
            <Header />

            {/* Main Content Area */}
            <main>
                <Routers />
            </main>

            {/* Footer Component */}
            <Footer />
        </>
    );
};

export default Layout;
