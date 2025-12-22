import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aboutstay from "../components/Aboutstay"

export default function Blogs() {
  useEffect(() => {
    // Document title set karna
    document.title = 'Evolo AI Blog & Insights';
    
    // Meta description update karna
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Explore the Evolo AI Blog for expert insights, tips, and updates on AI, careers, and learning. Stay informed with our latest articles and resources.';
    
    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/blog/';
    
    // OG tags add/update karna (Facebook/WhatsApp ke liye)
    const ogTags = [
      { property: 'og:title', content: 'Evolo AI Blog & Insights' },
      { property: 'og:description', content: 'Explore the Evolo AI Blog for expert insights, tips, and updates on AI, careers, and learning. Stay informed with our latest articles and resources.' },
      { property: 'og:url', content: 'https://goevolo.com/blog/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Evolo AI' },
    ];
    
    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });
    
    // Twitter tags add/update karna
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Evolo AI Blog & Insights' },
      { name: 'twitter:description', content: 'Explore the Evolo AI Blog for expert insights, tips, and updates on AI, careers, and learning. Stay informed with our latest articles and resources.' },
      { name: 'twitter:url', content: 'https://goevolo.com/blog/' },
    ];
    
    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });
    
    // Keywords meta tag bhi add karna
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'Evolo AI blog, career insights, AI learning, education tips, career advice, adult education, job market trends, learning resources';
    
  }, []); // Empty dependency array - sirf ek baar run hoga

  const blogPosts = [
    {
      id: 1,
      slug: "overcoming-barriers-how-single-parents-benefit-from-adult-schools/", // Unique identifier
      image: "/images/blog1.png",
      title: "How Single Parents Benefit from Adult Schools",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      component: "Blog1" // Optional: component name

    },
    {
      id: 2,
      slug: "adult-school-vs-online-college/",
      image: "/images/blog2.png",
      title: "Adult School vs Online College: Career Change Guide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      component: "Blog2"
    },
    {
      id: 3,
      slug: "career-switch-strategies-after-30s/",
      image: "/images/blog3.png",
      title: "Career Change After 30: How Adults Can Successfully Pivot to New Industries",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      component: "Blog3"
    },
    {
      id: 4,
      slug: "low-stress-jobs-for-autistic-adults/",
      image: "/images/blog4.jpg",
      title: "Low-stress jobs for autistic adults",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      component: "Blog4"
    },
    {
      id: 5,
      slug: "9-benefits-of-work-for-teens-young-adults/",
      image: "/images/blog5.png",
      title: "9 Benefits of Work for Teens and Young Adults",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      component: "Blog5"
    },
    {
      id: 6,
      slug: "how-many-teens-and-young-adults-work-retail/",
      image: "/images/blog6.png",
      title: "What Percentage of Teens and Young Adults Have Retail Jobs?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      component: "Blog6"
    },
    {
      id: 7,
      slug: "best-remote-jobs-without-degree/",
      image: "/images/blog7.png",
      title: "Best Remote Jobs Without a Degree",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      component: "Blog7"
    },
    {
      id: 8,
      slug: "upskilling-vs-reskilling-2025/",
      image: "/images/blog8.jpg",
      title: "Upskilling vs. Reskilling: What's Right for You in a Rapidly Changing Job Market",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      component: "Blog8"

    },
    {
      id: 9,
      slug: "the-role-of-ai-in-hiring-how-adult-job-seekers-can-stay-competitive/",
      image: "/images/blog9.png",
      title: "The Role of AI in Hiring: How Adult Job Seekers Can Stay Competitive",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      component: "Blog9"
    },
      {
      id: 10,
      slug: "overcoming-employment-gaps-a-guide-for-adult-job-seekers/",
      image: "/images/blog10.png",
      title: "Overcoming Employment Gaps: A Guide for Adult Job Seekers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      component: "Blog10"
    },
      {
      id: 11,
      slug: "empowering-lifelong-learners-how-adult-education-is-key-to-building-a-sustainable-workforce/",
      image: "/images/blog11.jpg",
      title: "Empowering Lifelong Learners: How Adult Education is Key to Building a Sustainable Workforce",
      description: "Lifelong learning is essential in today's rapidly evolving job market. Adult education bridges skill gaps, enhances career growth, and drives economic sustainability.",
      component: "Blog11"
    },
      {
      id: 12,
      image: "/images/blog12.jpg",
      title: "Top 7 In-Demand Careers for Adults in 2025: Opportunities You Should Know About in the U.S.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    //   {
    //   id: 13,
    //   image: "/images/blog13.jpg",
    //   title: "The 2025 Job Search: How to Stand Out in a Competitive Market",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    // },
    //   {
    //   id: 14,
    //   image: "/images/blog14.jpg",
    //   title: "The Future of Adult Education: How Technology is Bridging the Gap Between Students, Institutions, and Employers",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    // },
    //   {
    //   id: 15,
    //   image: "/images/blog15.png",
    //   title: "Top 5 High-Income Skills Young Adults Should Learn for 2025",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    // },
    //   {
    //   id: 16,
    //   image: "/images/blog16.png",
    //   title: "Top 10 Career Tips and Advice for Young Adults Starting Their Journey",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    // },
    //   {
    //   id: 17,
    //   image: "/images/blog17.png",
    //   title: "CAEP 2024 Summit",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    // }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
       <h1 className="text-4xl md:text-5xl pb-2 font-bold mb-6 bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
Explore Our Blog</h1>
      </div>

    {/* Blog Grid */}
<div className="max-w-7xl mx-auto px-6 pb-16">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
    {blogPosts.map((post) => (
      <div key={post.id} className="flex flex-col">
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
              <Link
                to={post.slug ? `/${post.slug}` : '#'}
                className="hover:text-[#2B1BDD] transition-colors"
              >
                {post.title}
              </Link>
            </h3>
            
            <div className="flex-1 mb-4">
            </div>
            
           <Link to={post.slug ? `/${post.slug}` : '#'}>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                      Read More
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