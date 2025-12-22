import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SecurityPrivacy = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };
  useEffect(() => {
    // Document title
    document.title = 'Security and Privacy - Evolo AI';

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Learn about Evolo AI\'s security and privacy, including data encryption, access control and compliance with industry best practices.';

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/security-privacy';

    // Open Graph tags (for social sharing)
    const ogTags = [
      {
        property: 'og:title',
        content: 'Security and Privacy - Evolo AI',
      },
      {
        property: 'og:description',
        content:
          'Learn about Evolo AI\'s comprehensive security and privacy measures, including data encryption, access control, authentication protocols, and compliance with industry best practices.',
      },
      {
        property: 'og:url',
        content: 'https://goevolo.com/security-privacy',
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
      { name: 'twitter:title', content: 'Security and Privacy - Evolo AI' },
      {
        name: 'twitter:description',
        content:
          'Learn about Evolo AI\'s comprehensive security and privacy measures, including data encryption, access control, authentication protocols, and compliance with industry best practices.',
      },
      { name: 'twitter:url', content: 'https://goevolo.com/security-privacy' },
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
      'Evolo AI security, privacy policy, data encryption, access control, authentication, JWT, Firebase, MongoDB Atlas, HTTPS, SSL/TLS, biometric login, Google Cloud security';
  }, []); // Empty dependency array - runs only once on mount

  return (
    <div className="w-full bg-white py-12 md:py-20 px-4 sm:px-6 font-[Raleway]">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            Security and Privacy
          </span>
        </h1>

        {/* Introductory Paragraph */}
        <p className="text-center text-gray-600 text-sm md:text-base mb-10 md:mb-12 leading-relaxed">
          This document outlines the security measures implemented in our application to ensure data privacy, secure access, and protection against unauthorized usage. Below are the key points categorized into Privacy, Access Control, and General Security measures.
        </p>

        {/* Privacy Measures Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            Privacy Measures
          </h2>

          {/* Data Privacy and Confidentiality */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              1. Data Privacy and Confidentiality:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                We do not store user passwords. User authentication is handled securely through Firebase Authentication.
              </li>
              <li>
                Peer-to-peer chat is text-only. Media files cannot be exchanged, minimizing the risk of inappropriate content sharing.
              </li>
              <li>
                User data is encrypted during transmission (using HTTPS) and At-Rest (MongoDB Atlas ensures data encryption). At-rest encryption is a security measure to ensure that data stored in a database (on disk) remains encrypted and protected from unauthorized access, even if the storage medium is compromised.
              </li>
            </ul>
          </div>

          {/* Monitoring of Peer-to-Peer Chat */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              2. Monitoring of Peer-to-Peer Chat:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                While media sharing is restricted, chat messages are stored securely on our database for operational purposes. Access to this data is limited to authorized personnel following strict guidelines.
              </li>
            </ul>
          </div>

          {/* User Data Access and Protection */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              3. User Data Access and Protection:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                Role-based access control ensures that users can only access data relevant to their permissions.
              </li>
              <li>
                JWT (JSON Web Token) authentication with the HS256 algorithm ensures secure communication between users and the server.
              </li>
            </ul>
          </div>
        </div>

        {/* Access Control Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            Access Control
          </h2>

          {/* Login Mechanisms */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              1. Login Mechanisms:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2">
              Multiple authentication methods are supported, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>Login with Apple</li>
              <li>Google Login</li>
              <li>Email and password</li>
              <li>Face Id / Biometric Login using Assymetric Strategy</li>
              <li>Authentication through Firebase, followed by backend verification using JWT</li>
            </ul>
          </div>

          {/* Agency-Level Access */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              2. Agency-Level Access:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                Agency-level access (e.g., consortium access) is strictly controlled. Agencies only have access to the data and features explicitly permitted by the application.
              </li>
            </ul>
          </div>

          {/* Server-Side Security */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              3. Server-Side Security:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                Role-based access control mechanisms on the server restrict unauthorized operations.
              </li>
              <li>
                Refresh tokens are provided for extended sessions while maintaining secure authentication.
              </li>
              <li>
                API rate limiting is implemented to prevent abuse and denial-of-service (DoS) attacks.
              </li>
            </ul>
          </div>
        </div>

        {/* General Security Measures Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            General Security Measures
          </h2>

          {/* Secure Server Infrastructure */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              1. Secure Server Infrastructure:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                The server is deployed on Google Cloud Compute Engine, benefiting from Google Cloud's robust security practices.
              </li>
              <li>
                Nginx is used as a reverse proxy to manage incoming traffic efficiently and securely.
              </li>
            </ul>
          </div>

          {/* Database Security */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              2. Database Security:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                The MongoDB Atlas database uses end-to-end encryption for data at rest and in transit
              </li>
              <li>
                Secure connections to the database are enforced through SSL/TLS protocols.
              </li>
            </ul>
          </div>

          {/* API and Key Security */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              3. API and Key Security:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                Environment variables, including sensitive API keys, are stored securely and are inaccessible from the source code repository.
              </li>
            </ul>
          </div>

          {/* Source Code Management */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              4. Source Code Management:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                The source code is hosted on GitHub in a private repository, ensuring restricted access.
              </li>
              <li>
                Regular security audits are conducted on the repository to prevent unauthorized access.
              </li>
            </ul>
          </div>

          {/* Authentication Protocols */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              5. Authentication Protocols:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                JWT is used for secure session management, implementing the HS256 algorithm for token signing.
              </li>
              <li>
                FaceID and biometric authentication are supported for a seamless and secure login experience
              </li>
            </ul>
          </div>

          {/* Network Security */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              6. Network Security:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                All communication between the client and the server is secured via HTTPS, ensuring encryption of data in transit.
              </li>
              <li>
                Firewall rules and access controls on Google Cloud protect the server against unauthorized access.
              </li>
            </ul>
          </div>
        </div>

        {/* Closing Paragraph */}
        <div className="mt-8 md:mt-10 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm md:text-base leading-relaxed">
            By implementing these measures, we ensure the security and privacy of user data and comply with industry best practices for safeguarding sensitive information.
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

export default SecurityPrivacy;

