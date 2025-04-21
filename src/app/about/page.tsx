import React from 'react';

const AboutPage = () => {
  return (
    <div className="w-full bg-[#ebe1ff] pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url("/images/bg.png.png")`,
          }}
        >
          <div className="absolute inset-0 bg-purple-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Spandan Preschool</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Where every child's potential blooms and every dream takes flight
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be the leading force in early childhood education, nurturing future leaders and innovators through holistic development and personalized learning experiences.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To provide a safe, nurturing environment where children can discover their potential through play-based learning, creative exploration, and character development.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 lg:px-20 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Spandan Preschool?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p>Highly qualified and experienced teachers dedicated to nurturing young minds</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe Environment</h3>
              <p>State-of-the-art security systems and child-friendly infrastructure</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Holistic Development</h3>
              <p>Balanced focus on academic, social, emotional, and physical growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Excellence', desc: 'Striving for the highest standards in education' },
              { title: 'Innovation', desc: 'Embracing new methods and technologies in learning' },
              { title: 'Integrity', desc: 'Building trust through honest and ethical practices' },
              { title: 'Inclusivity', desc: 'Celebrating diversity and individual uniqueness' }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;