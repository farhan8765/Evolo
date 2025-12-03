// // Blog4.jsx
// import React, { useState } from 'react';

// const Blog4 = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto">
        
//         {/* Main Title */}
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-6 font-['Raleway']">
//           Low-stress jobs for autistic adults
//         </h1>
        
//         {/* Blog Header with Image */}
//         <div className="mb-8 flex justify-center">
//           <img 
//             src="/images/blog4.jpg" 
//             alt="Low-stress jobs for autistic adults" 
//             className="rounded-xl shadow-lg max-w-full"
//           />
//         </div>

//         {/* Author & Date Info */}
//         <div className="flex items-center text-gray-600 mb-8 pb-6 border-b font-['Raleway']">
//           <div className="flex items-center">
//             <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
//               <span className="text-teal-600 font-semibold">AS</span>
//             </div>
//             <div>
//               <p className="font-medium">Autism Career Guide</p>
//               <p className="text-sm">Published on August 20, 2024 • 5 min read</p>
//             </div>
//           </div>
//         </div>

//         {/* Key Summary Box */}
//         <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-10 font-['Raleway']">
//           <h2 className="text-xl font-bold text-gray-800 mb-3">Key Summary:</h2>
//           <p className="text-gray-700 leading-relaxed">
//             Adults with autism frequently flourish in low-stress occupations like data entry, graphic design, 
//             lab work, or library tech positions that have defined routines, few social demands, and peaceful surroundings.
//           </p>
//         </div>

//         {/* Main Content - Simple placeholder for now */}
//         <div className="prose prose-lg max-w-none text-gray-700 font-['Raleway']">
//           <p className="text-gray-600 text-center italic py-10">
//             Content will be added here based on additional requirements...
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Blog4;