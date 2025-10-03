import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          Have a question or want to work with us? Fill out the form below.
        </p>
      </div>
      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 border rounded"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 mb-4 border rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
