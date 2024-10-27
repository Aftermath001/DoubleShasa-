import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0265C2] to-[#AB02C2] p-8 lg:px-32 text-white">
      <h1 className="text-4xl font-semibold text-center mt-10 mb-8">Contact Us</h1>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        {/* Contact Form */}
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 lg:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded-lg" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-[#AB02C2] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#0265C2] transition-all">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-10 lg:mt-0 lg:w-1/3 flex flex-col space-y-4">
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="font-bold text-xl mb-3">Contact Information</h3>
            <p><strong>Address:</strong> Kakamega, Kenya</p>
            <p><strong>Phone:</strong> +254 123 456 789</p>
            <p><strong>Email:</strong> info@doubleshasa.com</p>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31345.810558339675!2d34.753054999999994!3d0.2830875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1780d397f3fb1075%3A0x69a5fc9f0a7d6b2a!2sKakamega%20County!5e0!3m2!1sen!2ske!4v1681941065431!5m2!1sen!2ske"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
