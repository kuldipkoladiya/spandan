import React from 'react';

const HomePage = () => {
  return (
    <div className="w-full bg-[#ebe1ff]">
      {/* Hero Section */}
   {/* Mobile Hero Section */}
   <div className="w-full md:hidden bg-[#ebe1ff]">
  {/* Image Section */}
  <div className="w-full">
    <img
      src="/images/esponsov.png"
      alt="Hero"
      className="w-full h-auto object-cover"
    />
  </div>

  {/* Text Section */}
  <div className="px-6 py-10 text-center text-purple-900">
    <h1 className="text-3xl font-bold leading-tight mb-4">
      Build a foundation for <br />
      a life time of <br />
      <span className="text-yellow-500">learning</span>
    </h1>
    <p className="text-lg mb-6">Admission Open</p>
    <button className="bg-yellow-400 text-purple-800 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition">
      Enroll Now →
    </button>
  </div>
</div>

{/* Desktop/Tablet Hero Section */}
<div
  className="hidden md:flex relative w-full min-h-screen bg-cover bg-center items-center justify-center"
  style={{
    backgroundImage: `url("/images/01.png")`,
  }}
>
  <div className="absolute inset-0 z-0"></div>

  <div className="absolute z-10 max-w-7xl w-full px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
    {/* Left Content */}
    <div className="text-white max-w-xl">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        Build a foundation for <br />
        a life time of <br />
        <span className="text-yellow-400">learning</span>
      </h1>
      <p className="text-lg mb-6">Admission Open</p>
      <button className="bg-yellow-400 text-purple-800 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition">
        Enroll Now →
      </button>
    </div>
  </div>
</div>


      {/* About Section */}
      <section className="bg-[#ebe1ff] py-16 px-6 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="relative w-full md:w-1/2">
            <img
              src="/images/about.png"
              alt="Kid playing"
              className="object-cover w-full max-w-md mx-auto"
            />
          </div>

          {/* Right: Text */}
          <div className="md:w-1/2 text-purple-900">
            <h2 className="text-3xl font-extrabold mb-4">About Us</h2>
            <h3 className="text-xl font-semibold mb-2">Spandan Preschool</h3>
            <p className="mb-4">
              Kidzee Preschool is a leading chain of preschools located in India and Nepal backed by Zee Learn Ltd...
            </p>

            <h3 className="text-xl font-semibold mb-2">Spandan Advantage</h3>
            <p className="mb-2">
              Kidzee is a <strong>leader</strong> and a trendsetter in <strong>Early Childhood Care and Education (ECCE)</strong>...
            </p>
            <p className="mb-2">
              Our Business Partners don't just take the name, they also take our <strong>pedagogy- PÊNTEMiND</strong>...
            </p>
            <p className="mb-2">
              Starting a preschool requires strategic planning... <strong>Kidzee Professional research</strong>...
            </p>
            <p className="mb-2">
              <strong>Secret to Success is Service and Support.</strong> We provide pre-opening and operational support...
            </p>
          </div>
        </div>
      </section>

      {/* DayCare Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url("/images/download (22).jpeg")`,
          }}
        >
          <div className="absolute inset-0 bg-purple-900/80"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center gap-12 text-white">
          {/* Left Content */}  
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">DayCare</h2>
            <h3 className="text-lg font-semibold mb-2">Kidzee Daycare – A home away from home for your child!</h3>

            <div className="border border-white p-4 mb-4">
              Duration - Choose Suitable Hours Schedule.<br />
              Flexible Hours - Post School Schedule.
            </div>

            <p className="mb-4">
              We understand that the early years in the child’s life are important for the overall development...
            </p>

            <button className="bg-yellow-400 text-purple-800 font-bold py-2 px-6 rounded-full hover:bg-yellow-300 transition">
              Know More →
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/3.png"
              alt="Daycare"
              className="w-full max-w-md mx-auto "
            />
          </div>
        </div>
      </section>
      {/* Our Pedagogy Section */}
<section className="w-full py-16 px-6 lg:px-20 bg-[#ebe1ff] flex flex-col items-center">
  <h2 className="text-3xl font-extrabold text-purple-900 mb-6">Our Pedagogy</h2>
  <div className="w-full max-w-5xl">
    <img
      src="/images/pantamind_new_img.svg"
      alt="Our Pedagogy - PENTEMIND"
      className="w-full h-auto rounded-lg object-contain"
    />
  </div>
</section>
    </div>
  );
};

export default HomePage;
