import React from 'react';

const AdmissionPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admission Process</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Join our vibrant learning community and give your child the best start in life
          </p>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-12 text-center">How to Apply</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-900 font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Submit Enquiry</h3>
              <p className="text-gray-700">Fill out our online admission enquiry form with your details</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-900 font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">School Visit</h3>
              <p className="text-gray-700">Schedule a visit to our campus and meet our staff</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-900 font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">Confirmation</h3>
              <p className="text-gray-700">Complete the admission process and secure your child's spot</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section className="py-16 px-6 lg:px-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Admission Enquiry Form</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="childName">Child's Name</label>
                <input
                  type="text"
                  id="childName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="childAge">Child's Age</label>
                <input
                  type="number"
                  id="childAge"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="parentName">Parent's Name</label>
                <input
                  type="text"
                  id="parentName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">Additional Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-400 text-purple-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Fee Structure</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-purple-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Program</th>
                  <th className="px-6 py-4 text-left">Age Group</th>
                  <th className="px-6 py-4 text-left">Duration</th>
                  <th className="px-6 py-4 text-left">Fee (Per Term)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-purple-900">
                <tr>
                  <td className="px-6 py-4">Playgroup</td>
                  <td className="px-6 py-4">1.5 - 2.5 years</td>
                  <td className="px-6 py-4">2 hours</td>
                  <td className="px-6 py-4">₹25,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Nursery</td>
                  <td className="px-6 py-4">2.5 - 3.5 years</td>
                  <td className="px-6 py-4">3 hours</td>
                  <td className="px-6 py-4">₹30,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Junior KG</td>
                  <td className="px-6 py-4">3.5 - 4.5 years</td>
                  <td className="px-6 py-4">4 hours</td>
                  <td className="px-6 py-4">₹35,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Senior KG</td>
                  <td className="px-6 py-4">4.5 - 5.5 years</td>
                  <td className="px-6 py-4">4 hours</td>
                  <td className="px-6 py-4">₹40,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">* Additional charges may apply for transportation and extra-curricular activities</p>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;