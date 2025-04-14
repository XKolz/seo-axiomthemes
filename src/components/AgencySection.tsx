// components/AgencySection.tsx
import React from "react";
import Image from "next/image";
import { FiMonitor, FiCloud } from "react-icons/fi";

const AgencySection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - Images */}
          <div className="w-full lg:w-1/2 relative mb-10 lg:mb-0">
            <div className="relative h-[500px] w-full">
              {/* First image (background) */}
              <div className="absolute top-0 left-0 rounded-lg overflow-hidden w-3/4 h-3/4 shadow-lg">
                <Image
                  src="/images/woman-orange-shirt.png"
                  alt="Woman in orange shirt"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Second image (foreground) */}
              <div className="absolute bottom-0 right-0 rounded-lg overflow-hidden w-4/5 h-4/5 shadow-lg">
                <Image
                  src="/images/man-laptop.png"
                  alt="Man working on laptop"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="w-full lg:w-1/2 lg:pl-16">
            <div className="uppercase text-sm font-semibold tracking-widest text-gray-600 mb-2">
              CREATIVE AGENCY
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-950 mb-6 leading-tight">
              We help your business grow
            </h2>

            <p className="text-gray-600 mb-12">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia.
            </p>

            {/* Feature 1 */}
            <div className="flex items-start mb-8">
              <div className="mr-4 bg-purple-100 p-3 rounded-lg">
                <FiMonitor className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-950 mb-2">
                  Creative design
                </h3>
                <p className="text-gray-600">
                  Natus error sit voluptatem accus antium doloremque.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="mr-4 bg-purple-100 p-3 rounded-lg">
                <FiCloud className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-950 mb-2">
                  Endless possibilities
                </h3>
                <p className="text-gray-600">
                  Sit voluptatem accus antium doloremque laudan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencySection;
