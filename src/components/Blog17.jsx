// Blog17.jsx
import React, { useEffect } from 'react';

const Blog17 = () => {
  useEffect(() => {
    // Document title set karna
    document.title = 'Evolo AI at CAEP 2024: Transforming Adult Education';

    // Meta description update karna
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Discover how Evolo AI is revolutionizing adult education with AI solutions, enhancing student outcomes, and fostering success at the CAEP 2024 Summit in Oakland.';

    // Canonical link add karna
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/caep-2024-summit/';

    // OG tags add/update karna
    const ogTags = [
      {
        property: 'og:title',
        content: 'Evolo AI at CAEP 2024: Transforming Adult Education',
      },
      {
        property: 'og:description',
        content:
          'Discover how Evolo AI is revolutionizing adult education with AI solutions, enhancing student outcomes, and fostering success at the CAEP 2024 Summit in Oakland.',
      },
      {
        property: 'og:url',
        content: 'https://goevolo.com/caep-2024-summit/',
      },
      { property: 'og:type', content: 'article' },
      { property: 'og:site_name', content: 'Evolo AI' },
      { property: 'og:image', content: 'https://goevolo.com/images/blog17.png' },
    ];

    ogTags.forEach((tag) => {
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
      {
        name: 'twitter:title',
        content: 'Evolo AI at CAEP 2024: Transforming Adult Education',
      },
      {
        name: 'twitter:description',
        content:
          'Discover how Evolo AI is revolutionizing adult education with AI solutions, enhancing student outcomes, and fostering success at the CAEP 2024 Summit in Oakland.',
      },
      {
        name: 'twitter:url',
        content: 'https://goevolo.com/caep-2024-summit/',
      },
      { name: 'twitter:image', content: 'https://goevolo.com/images/blog17.png' },
    ];

    twitterTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-6 font-['Raleway']">
          Evolo AI Shines at the CAEP 2024 Summit: Empowering Adult Education with Innovative AI Solutions
        </h1>

        {/* Blog Header with Image */}
        <div className="mb-8 flex justify-center">
          <img
            src="/images/blog17.png"
            alt="Evolo AI Shines at the CAEP 2024 Summit: Empowering Adult Education with Innovative AI Solutions"
            className="w-full max-w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Author & Date Info */}
        <div className="flex items-center text-gray-600 mb-8 pb-6 border-b font-['Raleway']">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 font-semibold">EL</span>
            </div>
            <div>
              <p className="font-medium">Evolo AI</p>
              <p className="text-sm">Published on October 30, 2024 • 5 min read</p>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none font-['Raleway']">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            Oakland, California – October 30, 2024 – Evolo AI, a leading platform transforming adult education, made a significant impact at the CAEP 2024 Summit held from October 28-30 in beautiful Oakland, California. The summit brought together consortium leaders, school personnel, and vendors, providing a prime opportunity to connect and collaborate on innovative solutions that enhance adult education outcomes.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            At this year's summit, Evolo AI showcased how their cutting-edge AI-powered platform is revolutionizing the connection between students, institutions, and employers. With a focus on improving student success and meeting California's AB104 goals, Evolo AI presented practical solutions that help adult learners seamlessly transition from education to employment.
          </p>

          {/* Highlights from the Summit */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">
            Highlights from the Summit:
          </h2>

          {/* AI Solutions for Enhanced Student Outcomes */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">AI Solutions for Enhanced Student Outcomes:</h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            Evolo AI demonstrated how their platform empowers students by providing real-time tracking, AI-powered profile building, and instant communication with employers. Attendees saw firsthand how Evolo's app simplifies the job search process, making it easy to swipe and apply for jobs while connecting directly with employers.
          </p>

          {/* Exclusive Voucher Awards */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">Exclusive Voucher Awards</h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
            As part of Evolo AI's commitment to supporting adult education, the company presented exclusive award certificates to five selected attendees at the summit. These certificates, given only to distinguished participants, entitle the bearer to a $2,500 voucher for a 2025 annual subscription, applicable to either a single school or an entire consortium. The vouchers, which must be redeemed by November 30, 2024, aim to encourage broader adoption of Evolo AI's groundbreaking solutions and drive meaningful results across educational institutions.
          </p>

          {/* Stanley Mug Giveaway */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">Stanley Mug Giveaway:</h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            During the summit, Evolo AI also offered attendees a chance to claim a complimentary Stanley Mug by filling out a brief form. This fun giveaway helped foster deeper connections and encouraged meaningful conversations about the future of adult education.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            Evolo AI's presence at the CAEP 2024 Summit reinforced its commitment to improving the adult education experience, helping schools, students, and employers collaborate more effectively.
          </p>

          {/* Supporting Schools in the Citrus College Consortium */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">Supporting Schools in the Citrus College Consortium:</h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            Evolo AI highlighted its ongoing collaboration with schools in the Citrus College Consortium, including Monrovia, Claremont, and Azusa. The platform is already driving success by helping schools track student outcomes and streamline career events.
          </p>

          {/* Meeting California's 3-Year Plan Goals */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">Meeting California's 3-Year Plan Goals:</h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            The team discussed how Evolo AI aligns with California's adult education strategies, including the AB104 and 3-year plan goals, ensuring students are well-prepared for future careers while meeting state objectives.
          </p>

          {/* About Evolo AI */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">
            About Evolo AI
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
            Evolo AI is an innovative platform designed to enhance adult education by connecting students, employers, and institutions. Powered by AI, the platform provides tools that simplify job applications, facilitate real-time communication with employers, and create customized profiles to showcase students' skills. Evolo AI is helping adult learners across California unlock career opportunities and achieve success in their educational and professional journeys.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            For more information, visit{' '}
            <a 
              href="https://goevolo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Evolo AI
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog17;

