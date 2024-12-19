import React from 'react';
import { CONTACT_DATA } from '../constants'; // Assuming this is imported from index.jsx

const Contact = () => {
  return (
    <section className="container max-w-full p-16 bg-gradient-to-b from-fcbluelight to-fcblue " id="contact">
      <h1 className="section-title mt-5">Contact Us</h1>

      <div className="flex flex-wrap justify-around gap-8 mt-5">
        <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg text-center">
          <h3 className="text-2xl text-gray-700 mb-4">Address</h3>
          <p className="text-gray-600">{CONTACT_DATA.address}</p>
        </div>

        <div className="w-full sm:w-1/3 p-6 bg-white rounded-lg shadow-lg text-center">
          <h3 className="text-2xl text-gray-700 mb-4">Call Us</h3>
          <p className="text-5xl" dangerouslySetInnerHTML={{ __html: CONTACT_DATA.callUsIcon }}></p>
        </div>

        <div className="w-full sm:w-1/2 p-6 bg-white rounded-lg shadow-lg">
          <form>
            {CONTACT_DATA.formFields.map((field, index) => (
              field.type === "textarea" ? (
                <textarea
                  key={index}
                  placeholder={field.placeholder}
                  className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={field.rows}
                ></textarea>
              ) : (
                <input
                  key={index}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )
            ))}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {CONTACT_DATA.socialLinks.map((link, index) => (
          <a key={index} href={link.link} className="text-gray-600 text-3xl" dangerouslySetInnerHTML={{ __html: link.icon }}></a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
