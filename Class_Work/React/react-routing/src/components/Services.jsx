import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">
              Creating modern, responsive, and high-performance websites
              tailored to your needs.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="text-2xl font-semibold mb-2">Mobile Apps</h3>
            <p className="text-gray-600">
              Building intuitive and powerful mobile applications for iOS and
              Android.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-white">
            <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Designing beautiful and user-friendly interfaces that your users
              will love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
