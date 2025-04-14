// components/Footer.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiShoppingCart,
  FiImage,
  FiCreditCard,
  FiArrowUp,
  FiMessageSquare,
} from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic
    console.log("Newsletter subscription:", { email, isChecked });
    setEmail("");
    setIsChecked(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-indigo-950 text-white pt-20 pb-8">
      {/* Wavy divider */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto -translate-y-full"
        >
          <path
            fill="#091031"
            fillOpacity="1"
            d="M0,96L80,80C160,64,320,32,480,32C640,32,800,64,960,69.3C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Side buttons - same as in other sections */}
      <div className="fixed right-0 top-1/3 z-50">
        <div className="flex flex-col bg-indigo-900">
          <button className="p-4 hover:bg-indigo-800">
            <FiShoppingCart size={24} className="text-white" />
          </button>
          <button className="p-4 hover:bg-indigo-800">
            <FiImage size={24} className="text-white" />
          </button>
          <button className="p-4 hover:bg-indigo-800">
            <FiCreditCard size={24} className="text-white" />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Office Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Office</h3>
            <p className="mb-2">Germany —</p>
            <p className="mb-1">785 15h Street, Office 478</p>
            <p className="mb-6">Berlin, De 81566</p>

            <Link
              href="mailto:info@email.com"
              className="block text-gray-400 hover:text-white border-b border-gray-700 inline-block mb-6"
            >
              info@email.com
            </Link>

            <p className="text-lg font-medium">+1 840 841 25 69</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-gray-400 hover:text-white"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Socials</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Dribbble
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <form onSubmit={handleSubmit}>
              <div className="flex items-center mb-4">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <HiOutlineMail className="text-gray-400" size={20} />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="w-full pl-10 pr-3 py-3 bg-gray-800 rounded-l-full focus:outline-none focus:ring-1 focus:ring-indigo-500 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-r-full"
                >
                  <FiArrowUp className="transform rotate-45" size={20} />
                </button>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="footer-privacy"
                  className="h-4 w-4 border-gray-300 rounded"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label
                  htmlFor="footer-privacy"
                  className="ml-2 text-sm text-gray-400"
                >
                  I agree to the{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg"
          >
            <FiArrowUp size={20} />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>AxiomThemes © 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
