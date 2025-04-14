// components/BlogSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  category: string;
  title: string;
  date: string;
  comments: number;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "MEDIA SEO",
    title: "Fresh startup ideas for your digital business",
    date: "Apr 21, 2020",
    comments: 0,
    image: "/images/blog-workspace.jpg",
    slug: "fresh-startup-ideas",
  },
  {
    id: 2,
    category: "MEDIA SEO",
    title: "Top 5 targeting techniques to attract customers",
    date: "Apr 21, 2020",
    comments: 0,
    image: "/images/blog-targeting.jpg",
    slug: "targeting-techniques",
  },
  {
    id: 3,
    category: "MEDIA SEO",
    title: "Why do project managers need to focus on strategy?",
    date: "Apr 21, 2020",
    comments: 0,
    image: "/images/blog-strategy.jpg",
    slug: "project-managers-strategy",
  },
];

const BlogSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="uppercase text-sm font-semibold tracking-widest text-gray-600 mb-2">
            OUR BLOG
          </div>
          <h2 className="text-5xl font-bold text-indigo-950 mb-10">
            Latest articles
          </h2>
        </div>

        {/* Blog Post Cards */}
        <div className="flex flex-wrap -mx-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="w-full md:w-1/3 px-4 mb-8">
              <div className=" rounded-lg overflow-hidden h-full flex flex-col">
                {/* Post Image */}
                <div className="relative h-60">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Post Content */}
                <div className="py-6 flex flex-col flex-grow">
                  <div className="text-xs font-semibold tracking-wider text-indigo-950 mb-2">
                    {post.category}
                  </div>

                  <h3 className="text-xl font-bold text-indigo-950 mb-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-indigo-600"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <div className="mt-auto text-sm text-gray-500 flex items-center">
                    <span>{post.date}</span>
                    <span className="mx-2">&bull;</span>
                    <span>{post.comments} Comments</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-10">
          <button className="w-2 h-2 mx-1 rounded-full bg-gray-300"></button>
          <button className="w-2 h-2 mx-1 rounded-full bg-indigo-600"></button>
          <button className="w-2 h-2 mx-1 rounded-full bg-gray-300"></button>
          <button className="w-2 h-2 mx-1 rounded-full bg-gray-300"></button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
