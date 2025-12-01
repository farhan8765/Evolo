import React from 'react';
import Aboutstay from "../components/Aboutstay"

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      image: "/images/blog1.png",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 2,
      image: "/images/blog2.png",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 3,
      image: "/images/blog3.png",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 4,
      image: "/images/blog4.jpg",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 5,
      image: "/images/blog5.png",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 6,
      image: "/images/blog6.png",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 7,
      image: "/images/blog7.png",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 8,
      image: "/images/blog8.jpg",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 9,
      image: "/images/blog9.png",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 10,
      image: "/images/blog10.png",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 11,
      image: "/images/blog11.jpg",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 12,
      image: "/images/blog12.jpg",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 13,
      image: "/images/blog13.jpg",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 14,
      image: "/images/blog14.jpg",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 15,
      image: "/images/blog15.png",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 16,
      image: "/images/blog16.png",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 17,
      image: "/images/blog17.png",
      title: "Blog title heading will go here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">

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
        {/* Real Image */}
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-56 object-cover"
        />

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
