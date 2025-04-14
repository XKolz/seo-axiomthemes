// components/ServicesSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const decorativeImages = [
  {
    src: "/images/plus-blue.png",
    alt: "Decorative plus",
    className: "absolute left-1/3 top-10",
    width: 60,
    height: 60,
  },
  {
    src: "/images/circle-pink.png",
    alt: "Decorative circle",
    className: "absolute right-10 bottom-40",
    width: 80,
    height: 80,
  },
];

const clientLogos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/logo4.png",
  "/images/logo5.png",
  "/images/logo6.png",
];

const ServicesSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gray-100 py-20">
      {/* Decorative Elements */}
      {decorativeImages.map(({ src, alt, className, width, height }) => (
        <div key={src} className={className}>
          <Image src={src} alt={alt} width={width} height={height} />
        </div>
      ))}

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center lg:flex-row">
          {/* Left Content */}
          <div className="mb-10 w-full lg:mb-0 lg:w-1/2 lg:pr-16">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-600">
              WHO WE ARE
            </div>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-indigo-950 md:text-5xl lg:text-6xl">
              We provide best
              <br />
              digital services
            </h2>
            <p className="mb-8 max-w-lg text-gray-600">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit sed quia.
            </p>
            <Link
              href="#"
              className="inline-block rounded-full bg-cyan-400 px-8 py-4 font-medium text-white transition duration-300 hover:bg-cyan-500"
            >
              Discover Now
            </Link>
          </div>

          {/* Right Images */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative h-[500px] w-full">
              {[
                {
                  src: "/images/service-desk.png",
                  alt: "Desk with laptop",
                  className: "bottom-0 right-0 h-4/5 w-2/3",
                },
                {
                  src: "/images/service-woman.png",
                  alt: "Woman with drink",
                  className: "top-0 left-0 h-3/5 w-2/3",
                },
              ].map(({ src, alt, className }, idx) => (
                <div
                  key={idx}
                  className={`absolute ${className} overflow-hidden rounded-xl shadow-lg`}
                >
                  <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-32">
          <div className="flex flex-wrap items-center justify-between opacity-40">
            {clientLogos.map((logo, idx) => (
              <div
                key={idx}
                className="mb-8 w-1/2 px-4 md:w-1/3 lg:mb-0 lg:w-1/6"
              >
                <Image src={logo} alt="Client Logo" width={140} height={50} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
