import React from 'react';
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                    
                    {/*=== About Image ===*/}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                        <img src={aboutImg} alt="About Us" />
                        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                            <img src={aboutCardImg} alt="About Card" />
                        </div>
                    </div>

                    {/*==== About Content =====*/}
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className="headings">
                            Proud to be one of the nation's best
                        </h2>
                        <p className="text__para">
                            For 5 years, Indian News and Indian Report have recognized us as one of the best public hospitals and clinics in the country and #1 in Patna, Bihar. We have a specialized team in various fields, ready to serve you.
                        </p>

                        <p className="text__para mt-[30px]">
                            Our best is something we strive for every day—caring for our patients, not looking back at what we’ve accomplished but focusing on what we can do tomorrow, providing the best care possible.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
