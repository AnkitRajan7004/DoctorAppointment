import React from "react";
import ServiceList from "../Components/Services/ServiceList";


const Services = () => {
  return (
    <section className="py-14 px-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-headingColor">
            Our Medical Services
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore our wide range of specialized health services designed for your well-being.
          </p>
        </div>
        <ServiceList />
      </div>
    </section>
  );
};

export default Services;
