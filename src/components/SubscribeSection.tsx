"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiSend } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    position: "Expert",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Designer",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Mark Johnson",
    position: "Developer",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/images/testimonial-3.jpg",
  },
];

const slideVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.5 },
  }),
};

const SubscribeSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { email, isChecked });
    setEmail("");
    setIsChecked(false);
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Newsletter Subscription */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-950 mb-6 md:mb-0 md:w-1/3">
              Subscribe for the exclusive updates!
            </h2>

            <div className="md:w-2/3 md:pl-10">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center"
              >
                <div className="w-full sm:flex-1 mb-4 sm:mb-0 sm:mr-4">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full flex items-center justify-center transition duration-300"
                >
                  <FiSend className="mr-2" />
                  Subscribe
                </button>
              </form>

              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  className="h-4 w-4 border-gray-300 rounded"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label
                  htmlFor="privacy-policy"
                  className="ml-2 text-sm text-gray-600"
                >
                  I agree to the{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-gray-600 underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative">
          <div className="relative h-[300px] max-w-3xl mx-auto text-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={testimonials[currentTestimonial].id}
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute w-full"
              >
                <div className="w-20 h-20 mx-auto mb-8 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>

                <p className="text-xl text-gray-700 mb-6">
                  {testimonials[currentTestimonial].quote}
                </p>

                <h3 className="font-bold text-xl text-indigo-950 mb-1">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-500">
                  {testimonials[currentTestimonial].position}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <FiArrowLeft className="text-gray-500" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-black shadow-md flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <FiArrowRight className="text-white" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentTestimonial ? 1 : -1);
                  setCurrentTestimonial(index);
                }}
                className={`w-2 h-2 mx-1 rounded-full ${
                  index === currentTestimonial ? "bg-indigo-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
