import React from 'react';
import Aboutstay from "../components/Aboutstay"

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      image: "placeholder.jpg",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 2,
      image: "placeholder.jpg",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 3,
      image: "placeholder.jpg",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 4,
      image: "placeholder.jpg",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 5,
      image: "placeholder.jpg",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 6,
      image: "placeholder.jpg",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 7,
      image: "placeholder.jpg",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 8,
      image: "placeholder.jpg",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 9,
      image: "placeholder.jpg",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="text-black font-bold mb-4">Blog</p>
       <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
  Transforming Adult learning with AI innovation
</h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
              {/* Image Placeholder */}
              <div className="bg-gray-200 h-56 flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {post.description}
                </p>

                {/* Learn More Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          
        </div>
      </div>
      <Aboutstay/>
    </div>
  );
}
