import React from 'react';
import { Link } from 'react-router-dom';
import Aboutstay from "../components/Aboutstay"

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      slug: "blog1", // Unique identifier
      image: "/images/blog1.png",
      title: "How Single Parents Benefit from Adult Schools",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      component: "Blog1" // Optional: component name

    },
    {
      id: 2,
      image: "/images/blog2.png",
      title: "Adult School vs Online College: Career Change Guide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 3,
      image: "/images/blog3.png",
      title: "Career Change After 30: How Adults Can Successfully Pivot to New Industries",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 4,
      image: "/images/blog4.jpg",
      title: "Low-stress jobs for autistic adults",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 5,
      image: "/images/blog5.png",
      title: "9 Benefits of Work for Teens and Young Adults",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 6,
      image: "/images/blog6.png",
      title: "What Percentage of Teens and Young Adults Have Retail Jobs?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 7,
      image: "/images/blog7.png",
      title: "Best Remote Jobs Without a Degree",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 8,
      image: "/images/blog8.jpg",
      title: "Upskilling vs. Reskilling: What’s Right for You in a Rapidly Changing Job Market",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      id: 9,
      image: "/images/blog9.png",
      title: "The Role of AI in Hiring: How Adult Job Seekers Can Stay Competitive",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 10,
      image: "/images/blog10.png",
      title: "Overcoming Employment Gaps: A Guide for Adult Job Seekers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 11,
      image: "/images/blog11.jpg",
      title: "Empowering Lifelong Learners: How Adult Education is Key to Building a Sustainable Workforce",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 12,
      image: "/images/blog12.jpg",
      title: "Top 7 In-Demand Careers for Adults in 2025: Opportunities You Should Know About in the U.S.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 13,
      image: "/images/blog13.jpg",
      title: "The 2025 Job Search: How to Stand Out in a Competitive Market",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 14,
      image: "/images/blog14.jpg",
      title: "The Future of Adult Education: How Technology is Bridging the Gap Between Students, Institutions, and Employers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 15,
      image: "/images/blog15.png",
      title: "Top 5 High-Income Skills Young Adults Should Learn for 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 16,
      image: "/images/blog16.png",
      title: "Top 10 Career Tips and Advice for Young Adults Starting Their Journey",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
      {
      id: 17,
      image: "/images/blog17.png",
      title: "CAEP 2024 Summit",
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
{/* Blog Grid */}
<div className="max-w-7xl mx-auto px-6 pb-16">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"> {/* items-stretch add kiya */}
    {blogPosts.map((post) => (
      <div key={post.id} className="flex flex-col"> {/* Parent flex container */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 flex flex-col h-full">
          
          {/* Image - Fixed Height */}
          <div className="h-56 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content - Grow to fill space */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {post.title}
            </h3>
            
            <div className="flex-1 mb-4">
              {/* <p className="text-gray-600">
                {post.description}
              </p> */}
            </div>
            
           <Link to={`/blog/${post.slug}`}>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                      Learn More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      <Aboutstay/>
    </div>
  );
}
