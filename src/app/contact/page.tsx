"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full bg-[#ebe1ff] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" data-aos="fade-up">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url("/images/bg.png.png")`,
          }}
        >
          <div className="absolute inset-0 bg-purple-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with us for any queries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6 lg:px-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-900 mb-2">Phone</h3>
            <p className="text-gray-700"> +91 9374131212</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-900 mb-2">Email</h3>
            <p className="text-gray-700">spandankids123@gmail.com</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-900 mb-2">Address</h3>
            <p className="text-gray-700">
          A,56  Ashwin Society 3,<br /> 
          Varachha, Surat,<br />
          Gujarat 395006,
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 lg:px-20 bg-white" data-aos="fade-up">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-400 text-purple-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 lg:px-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">Find Us Here</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[400px] rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.367185068778!2d72.85031311084064!3d21.217283380398207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fc80d44abdd%3A0xb3ad69bf5d120c69!2sSpandan%20Kids%20Nursery!5e0!3m2!1sen!2sin!4v1745647145265!5m2!1sen!2sin"
              frameBorder="0"
              allowFullScreen
            ></iframe>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
