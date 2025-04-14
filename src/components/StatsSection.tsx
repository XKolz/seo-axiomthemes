// components/StatsSection.tsx
import React from "react";
import Link from "next/link";

const stats = [
  { label: "Projects", value: 93 },
  { label: "People", value: 65 },
  { label: "Years", value: 10 },
  { label: "Offices", value: 15 },
];

const StatsSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Stats Counter Row */}
        <div className="flex flex-wrap justify-around mb-24">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`w-1/2 md:w-1/4 mb-10 md:mb-0 text-center px-4 ${
                index !== 0 ? "border-l border-gray-300" : ""
              }`}
            >
              <div className="relative">
                <div className="text-9xl font-bold text-white leading-none">
                  {stat.value}
                </div>
                <div className="text-xl font-medium text-indigo-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row">
          {/* Left side - Heading */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="uppercase text-sm font-semibold tracking-widest text-gray-600 mb-3">
              Creative Solutions
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-950 leading-tight">
              We make unique &<br /> memorable brands
            </h2>
          </div>

          {/* Right side - Text content */}
          <div className="w-full md:w-1/2 md:pl-12">
            <p className="text-gray-600 mb-8">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque lorem in
              voluptate velit iusto odio dignissimos duci esse.
            </p>
            <p className="text-gray-600 mb-12">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae.
            </p>
            <Link
              href="#"
              className="inline-block text-indigo-950 font-semibold pb-1 border-b-2 border-indigo-950"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
