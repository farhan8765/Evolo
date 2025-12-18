import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CookiesPolicy = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };
  useEffect(() => {
    // Document title
    document.title = 'Evolo AI Cookies & Privacy Policy';

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Read Evolo AI cookies and privacy policy. Learn how we collect, use, and protect your data to ensure a safe and transparent browsing experience.';

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/cookie-policy/';

    // Open Graph tags
    const ogTags = [
      {
        property: 'og:title',
        content: 'Evolo AI Cookies & Privacy Policy',
      },
      {
        property: 'og:description',
        content:
          'Read Evolo AI cookies and privacy policy. Learn how we collect, use, and protect your data to ensure a safe and transparent browsing experience.',
      },
      {
        property: 'og:url',
        content: 'https://goevolo.com/cookie-policy/',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Evolo AI' },
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

    // Twitter tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Evolo AI Cookies & Privacy Policy' },
      {
        name: 'twitter:description',
        content:
          'Read Evolo AI cookies and privacy policy. Learn how we collect, use, and protect your data to ensure a safe and transparent browsing experience.',
      },
      { name: 'twitter:url', content: 'https://goevolo.com/cookie-policy/' },
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

    // Keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content =
      'Cookies Policy, cookie policy, cookies, website cookies, AdultEdPro, Evolo AI, privacy, data collection, analytics cookies, advertising cookies';
  }, []);

  return (
    <div className="w-full bg-white py-12 md:py-20 px-4 sm:px-6 font-[Raleway]">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            Cookies Policy
          </span>
        </h1>

        {/* Introductory Paragraph */}
        <p className="text-center text-gray-600 text-sm md:text-base mb-10 md:mb-12 leading-relaxed">
          At AdultEdPro.com, we respect the privacy of our visitors and are committed to being transparent about the use of cookies on our website. This Cookie Policy explains how we use cookies and similar technologies on our website, and your choices regarding these technologies.
        </p>

        {/* What are cookies? Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            What are cookies?
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide website owners with information about how visitors use their website.
          </p>
        </div>

        {/* How we use cookies? Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            How we use cookies?
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
            We use cookies on our website for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
            <li>
              <strong>Essential cookies:</strong> These cookies are necessary for our website to function properly. They allow you to navigate our website, use its features, and access secure areas.
            </li>
            <li>
              <strong>Analytics cookies:</strong> These cookies collect information about how visitors use our website, such as which pages they visit most often and if they receive error messages. This information is used to improve our website's performance and usability.
            </li>
            <li>
              <strong>Advertising cookies:</strong> These cookies are used to deliver relevant advertisements to you based on your browsing history and interests. They also help us measure the effectiveness of our advertising campaigns.
            </li>
            <li>
              <strong>Social media cookies:</strong> These cookies are used to enable you to share content on social media platforms, such as Facebook and Twitter.
            </li>
          </ul>
        </div>

        {/* Your choices regarding cookies Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Your choices regarding cookies
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
            You can control the use of cookies on our website through your browser settings. Most browsers allow you to block or delete cookies. However, please note that blocking or deleting cookies may impact your experience of our website.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We also use a cookie consent tool to obtain your consent for the use of non-essential cookies. You may choose to accept or reject these cookies.
          </p>
        </div>

        {/* Changes to this Cookie Policy Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Changes to this Cookie Policy
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We may update this Cookie Policy from time to time. If we make any material changes, we will notify you by posting the updated policy on our website.
          </p>
        </div>

        {/* Contact us Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Contact us
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            If you have any questions about this Cookie Policy or our use of cookies, please contact us at{' '}
            <a href="mailto:privacy@adultedpro.com" className="text-[#2B1BDD] hover:underline">
              privacy@adultedpro.com
            </a>
            .
          </p>
        </div>

        {/* Bottom Contact Section */}
        <div className="text-center mt-20 mb-10">
          <h3 className="text-2xl font-bold text-gray-900">Still have questions?</h3>

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
};

export default CookiesPolicy;

