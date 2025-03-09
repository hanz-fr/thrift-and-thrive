"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          We are committed to promoting sustainability in fashion through a platform that facilitates the buying and selling of second-hand clothes while educating people about sustainable fashion practices.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="mt-2 text-gray-600">
            To create a world where fashion is sustainable, waste is minimized, and second-hand clothing is embraced as a responsible choice.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <ul className="mt-2 text-gray-600 list-disc pl-5">
            <li>Provide an easy-to-use platform for second-hand fashion trading.</li>
            <li>Educate people on sustainable fashion and responsible consumption.</li>
            <li>Reduce textile waste by extending the life cycle of clothing.</li>
          </ul>
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">How Does It Work?</h2>
        <div className="mt-6 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image src="/images/blog/images2.jpg" alt="Sustainable Fashion" width={500} height={300} className="rounded-lg object-cover" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-600 leading-relaxed">
              Our platform connects buyers and sellers of pre-loved fashion. Users can list their clothes, browse sustainable fashion options, and contribute to a greener planet by reducing waste.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
        <p className="mt-2 text-gray-600">We are a passionate team dedicated to making fashion more sustainable.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <Image src="/images/team1.jpg" alt="" width={100} height={100} className="mx-auto rounded-full" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Mahesa Syawal A</h3>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <Image src="/images/team2.jpg" alt="" width={100} height={100} className="mx-auto rounded-full" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Sandy Saputra</h3>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <Image src="/images/team3.jpg" alt="" width={100} height={100} className="mx-auto rounded-full" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Raihan fauzi rakhman</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
