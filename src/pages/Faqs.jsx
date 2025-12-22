import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  // Meta tags set karne ka useEffect
  useEffect(() => {
    // Document title set karna
    document.title = 'Evolo AI Frequently Asked Questions';
    
    // Meta description update karna
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Find quick answers to common questions about Evolo AI services, policies, and support. Our FAQ page makes it easy to get the help you need.';
    
    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/faqs';
    
    // OG tags add/update karna (Facebook/WhatsApp ke liye)
    const ogTags = [
      { property: 'og:title', content: 'Evolo AI Frequently Asked Questions' },
      { property: 'og:description', content: 'Find quick answers to common questions about Evolo AI services, policies, and support. Our FAQ page makes it easy to get the help you need.' },
      { property: 'og:url', content: 'https://goevolo.com/faqs' },
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
      { name: 'twitter:title', content: 'Evolo AI Frequently Asked Questions' },
      { name: 'twitter:description', content: 'Find quick answers to common questions about Evolo AI services, policies, and support. Our FAQ page makes it easy to get the help you need.' },
      { name: 'twitter:url', content: 'https://goevolo.com/faqs' },
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
    metaKeywords.content = 'Evolo AI FAQs, frequently asked questions, support help, services questions, policies information, AI platform help';
    
  }, []); // Empty dependency array - sirf ek baar run hoga

  const faqs = [
    {
      question: "What is the Evolo AI app?",
      answer: "Evolo AI is an AI-powered career development platform designed to help adult learners advance in their careers. The app offers personalized job recommendations, resume building, mock interview practice, career events, and much more to assist you in finding your ideal job."
    },
    {
      question: "How do I create an account on Evolo AI?",
      answer: "To create an account, download the Evolo AI app from the App Store or Google Play, or visit the website. Click on \"Sign Up,\" enter your personal information, and follow the steps to complete your registration"
    },
    {
      question: "Can I log in using my social media account?",
      answer: "Yes, you can log in using your Google. This provides a faster and more convenient way to access your Evolo AI profile."
    },
    {
      question: "Can I log into Evolo AI on multiple devices?",
      answer: "Yes, you can log into your Evolo AI account on multiple devices, including your phone, tablet, and computer, using the same email address and password."
    },
    {
      question: "Does the app support multiple languages?",
      answer: "Yes, the app offers multilingual support, including localized text, images, and region-specific content"
    },
    {
      question: "How are dates and numbers formatted?",
      answer: "Dates and numeric values are formatted according to your local standards (e.g., dd/mm/yyyy vs. mm/dd/yyyy)."
    },
    {
      question: "What is the AI job matching feature?",
      answer: "The AI job matching feature analyzes your career profile, skills, and preferences to recommend jobs that align with your experience and career goals. The AI ensures that you receive personalized job suggestions that best match your qualifications."
    },
    {
      question: "How can I personalize my job preferences?",
      answer: "You can personalize your job preferences by going to the \"Career Assesment\" section in your profile. Set your preferred job titles, industries, locations, and salary expectations to receive tailored job recommendations."
    },
    {
      question: "How can I build a resume using Evolo AI?",
      answer: "Navigate to the \"Resume\" section of the app. Enter your information and follow steps and preview your resume. Once completed, you can download it in formats like PDF."
    },
    {
      question: "How does the Mock Interview feature help me prepare?",
      answer: "The Mock Interview feature allows you to practice interview questions for various roles.  review your performance, and make improvements to enhance your interviewing skills before facing real interviews."
    },
    {
      question: "What is the Spotlight feature?",
      answer: "The Spotlight feature enables you to showcase your achievements. It's a way of engaging between  students and teachers through real-time updates and shared accomplishments."
    },
    {
      question: "Can I track the jobs I've applied for?",
      answer: "Yes, you can view the jobs you've applied for in the \"Applied Jobs\" section of your dashboard. You'll also be able to track the application status, whether it's pending, under review, or closed."
    },
    {
      question: "Can I apply to jobs directly through the app?",
      answer: "Yes, Evolo AI allows you to apply for jobs directly within the app. Once you find a job that fits your qualifications, click the \"Apply\" button, and your resume and profile will be sent to the employer automatically."
    },
    {
      question: "How does the Events section work?",
      answer: "The Events section provides details about upcoming career-related events, such as webinars, job fairs, and workshops. You can view event dates, times, and register directly through the platform."
    },
    {
      question: "How do I communicate with classmates or colleagues within Evolo AI?",
      answer: "Evolo AI includes a Chat  feature that allows you to chat with classmates, instructors, or other users within the platform. You can collaborate on assignments, share advice, or discuss career opportunities."
    },
    {
      question: "How can I delete my account?",
      answer: "To delete an account, the user needs to log in to the app, navigate to their profile, and go to the settings. In the settings menu, there is an option to delete the account."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-white font-['Raleway'] relative overflow-hidden pt-0">

      {/* Left Background Image */}
      <div className="hidden md:block absolute left-0 top-52 w-48 md:w-64 pointer-events-none">
        <img src="/images/lefticon.png" alt="" className="w-320 h-320 object-contain" />
      </div>

      {/* Right Background Image */}
    <div className="hidden md:block absolute right-0 bottom-56 w-48 pointer-events-none">
  <img src="/images/righticon.png" alt="" className="w-400 h-400 object-contain" />
</div>
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            FAQs
          </h1>
          {/* <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p> */}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isLast = index === faqs.length - 1;

            return (
              <div
                key={index}
                className={`border border-gray-200 rounded-lg overflow-hidden shadow-lg 
                ${isLast ? "bg-black text-white" : "bg-white"}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-6 text-left transition-colors
                  ${isLast ? "hover:bg-gray-900" : "hover:bg-gray-50"}`}
                >
                  <span className="text-lg font-medium font-extrabold">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 
                      ${openIndex === index ? "rotate-180" : ""} 
                      ${isLast ? "text-white" : "text-gray-500"}`}
                  />
                </button>

                <div className={`overflow-hidden transition-all duration-300 
                  ${openIndex === index ? "max-h-96" : "max-h-0"}`}
                >
                  <div className={`px-6 pb-6 ${isLast ? "text-white" : "text-black"}`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Section */}
        <div className="text-center mt-20 mb-10">
          <h3 className="text-2xl font-bold text-gray-900">Still have questions?</h3>
          {/* <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}

          <button 
            onClick={handleContactClick}
            className="mt-6 px-6 py-2 rounded-lg border border-[#6C4BFF] text-[#6C4BFF] hover:bg-[#6C4BFF] hover:text-white transition-all"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}