// components/HeroSection.tsx
import React from "react";
import Link from "next/link";
import {
  FiPhone,
  FiSearch,
  FiMenu,
  FiSmartphone,
  FiCreditCard,
} from "react-icons/fi";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full ">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/office-background.png')",
              backgroundBlendMode: "overlay",
            }}
          />
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="relative z-10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative w-25 h-10">
            <Image
              src="/logo.png"
              alt="logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          <nav className="hidden md:flex ml-10">
            <ul className="flex space-x-6 text-white">
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Pages
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-white">
            <FiSearch size={24} />
          </button>

          <div className="hidden md:flex items-center text-white">
            <FiPhone className="mr-2" size={20} />
            <span className="text-lg">1 800 458 56 97</span>
          </div>

          <button className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full">
            Let's talk
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-2/3 text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
          Turning Creative Ideas
          <br />
          into Success
        </h1>
        <p className="text-white text-lg md:text-xl max-w-3xl mb-10">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore
          magna aliqua quis nostrud exerc.
        </p>
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-8 py-4 rounded-full text-lg font-medium">
          Discover Now
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <div className="flex space-x-2">
          <button className="w-2 h-2 rounded-full bg-white opacity-50"></button>
          <button className="w-2 h-2 rounded-full bg-white"></button>
          <button className="w-2 h-2 rounded-full bg-white opacity-50"></button>
          <button className="w-2 h-2 rounded-full bg-white opacity-50"></button>
        </div>
      </div>

      {/* Side Buttons */}
      <div className="fixed right-0 top-1/3 z-50">
        <div className="flex flex-col bg-indigo-900">
          <button className="p-4 hover:bg-indigo-800">
            <FiMenu size={24} className="text-white" />
          </button>
          <button className="p-4 hover:bg-indigo-800">
            <FiSmartphone size={24} className="text-white" />
          </button>
          <button className="p-4 hover:bg-indigo-800">
            <FiCreditCard size={24} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
