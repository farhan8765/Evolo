import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TermsofService = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };
  useEffect(() => {
    // Document title
    document.title = 'Evolo AI Terms of Service';

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Read Evolo AI Terms of Service to know your rights, responsibilities, and the conditions of using our website and services.';

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/terms-of-service/';

    // Open Graph tags
    const ogTags = [
      {
        property: 'og:title',
        content: 'Evolo AI Terms of Service',
      },
      {
        property: 'og:description',
        content:
          'Read Evolo AI Terms of Service to know your rights, responsibilities, and the conditions of using our website and services.',
      },
      {
        property: 'og:url',
        content: 'https://goevolo.com/terms-of-service/',
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
      { name: 'twitter:title', content: 'Evolo AI Terms of Service' },
      {
        name: 'twitter:description',
        content:
          'Read Evolo AI Terms of Service to know your rights, responsibilities, and the conditions of using our website and services.',
      },
      { name: 'twitter:url', content: 'https://goevolo.com/terms-of-service/' },
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
      'Terms of Service, Evolo AI, goevolo.com, End User Licensing Agreement, data processing consent, user agreement, privacy policy, terms and conditions';
  }, []);

  return (
    <div className="w-full bg-white py-12 md:py-20 px-4 sm:px-6 font-[Raleway]">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            Terms of Service
          </span>
        </h1>

        {/* Introductory Paragraph */}
        <p className="text-gray-600 text-sm md:text-base mb-10 md:mb-12 leading-relaxed">
          Welcome to goevolo.com These Terms of Service (the "Terms") govern your use of our website and services. By using our website, you agree to these Terms. If you do not agree to these Terms, you may not use our website or services.
        </p>

        {/* End User Licensing Agreement Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            End User Licensing Agreement (Data Processing Consent for Evolo AI)
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
            Welcome to Evolo AI. Please read these Terms and Conditions carefully, as they are a binding agreement between you ("User" or "you") and Evolo AI, Inc. ("Evolo AI", "we", "us", or "our"). These Terms govern your access to and use of the talent-related products and services on our website (goevolo.com) (the "Website"), mobile application (the "App"), and any associated services (collectively, the "Services").
          </p>
        </div>

        {/* Site, Mobile Application, And Services Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Site, Mobile Application, And Services
          </h2>

          {/* Who Can Use the Website and App */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Who Can Use the Website and App
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              These Terms apply to all users accessing our talent-related Services through our Website (goevolo.com) and App. Evolo AI provides services for three main types of users:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                Students (Candidates): Users accessing the Website or App as potential employees or contractors.
              </li>
              <li>
                Employers: Users accessing the Website or App on behalf of an employer, with authority to recruit and connect with candidates.
              </li>
              <li>
                Schools and Institutions: Users accessing the Website or App on behalf of educational institutions, adult education programs, or training centers, using the platform to manage student profiles, track job placements, and connect students with potential employers.
              </li>
            </ul>
          </div>
        </div>

        {/* Data Collection In The Website And Mobile App Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Data Collection In The Website And Mobile App
          </h2>

          {/* Data We Collect */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Data We Collect
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              When you use our Website or App, we may collect the following Personally Identifiable Information (PII):
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>Name, email address, and phone number</li>
              <li>Profile picture and job application materials (e.g., resumes, cover letters)</li>
              <li>Educational records, course details, and certifications</li>
              <li>Employment history and verification details</li>
              <li>Interests and preferences related to job-seeking</li>
              <li>Information shared through chat interactions or application forms</li>
            </ul>
          </div>
        </div>

        {/* SHARING OF PII Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            SHARING OF PII
          </h2>

          {/* Sharing with Schools */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              1. Sharing with Schools
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                Students' PII is automatically shared with their affiliated schools or institutions, which use this information for tracking student performance, monitoring employment outcomes, and providing career guidance.
              </li>
              <li>
                Schools have access to their students' PII through their Evolo AI accounts and are responsible for ensuring the data is used solely for legitimate educational purposes.
              </li>
            </ul>
          </div>

          {/* Sharing with Employers */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              2. Sharing with Employers
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                When students apply for jobs through our Website or App, their PII (e.g., resumes, contact details, and job-specific data) is shared directly with the employers associated with the job posting.
              </li>
              <li>
                Employers agree to use the PII exclusively for hiring purposes and must comply with applicable privacy laws in handling the data.
              </li>
            </ul>
          </div>

          {/* Explicit Consent for Sharing */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              3. Explicit Consent for Sharing
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                Students provide explicit consent before submitting job applications via the Website or App, authorizing Evolo AI to share their PII with the specified employer.
              </li>
              <li>
                Schools and institutions, as authorized representatives, ensure compliance with FERPA regulations when sharing educational data with Evolo AI.
              </li>
            </ul>
          </div>
        </div>

        {/* USE OF DATA Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            USE OF DATA
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
            Evolo AI uses PII collected from the Website and App for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
            <li>
              <strong>Career Development:</strong> Matching students with job opportunities based on their profiles.
            </li>
            <li>
              <strong>Institutional Support:</strong> Assisting schools with career tracking and reporting.
            </li>
            <li>
              <strong>Recruitment:</strong> Providing employers with relevant applicant data for hiring purposes.
            </li>
            <li>
              <strong>Platform Improvement:</strong> Enhancing user experience through data analysis (anonymized and aggregated).
            </li>
          </ul>
          <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
            PII will never be sold or rented to third parties.
          </p>
        </div>

        {/* SECURITY MEASURES Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            SECURITY MEASURES
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
            Evolo AI prioritizes the security of PII collected via the Website and App through:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
            <li>
              <strong>Encryption:</strong> Ensuring data is encrypted both in transit and at rest.
            </li>
            <li>
              <strong>Access Controls:</strong> Restricting access to PII to authorized personnel and users.
            </li>
            <li>
              <strong>Data Breach Notifications:</strong> Informing users and institutions of any security breaches promptly and in compliance with legal requirements.
            </li>
          </ul>
        </div>

        {/* DATA RETENTION POLICY Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            DATA RETENTION POLICY
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
            <li>
              <strong>Student Data:</strong> Retained until five years after graduation or service termination unless otherwise required by law.
            </li>
            <li>
              <strong>Employer Data:</strong> Retained as long as the employer actively uses Evolo AI's Services.
            </li>
            <li>
              <strong>General Data:</strong> Users can request deletion of their data at any time, subject to legal retention obligations.
            </li>
          </ul>
        </div>

        {/* USE OF AI IN COMMUNICATIONS Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            USE OF AI IN COMMUNICATIONS
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
            Evolo AI employs artificial intelligence (AI) to facilitate:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
            <li>
              <strong>Chat Interactions:</strong> Collecting and processing data shared during chats to enhance job recommendations and user support.
            </li>
            <li>
              <strong>Application Matching:</strong> AI-based algorithms to align user profiles with job postings.
            </li>
          </ul>
          <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
            Users acknowledge and consent to the use of AI for these purposes and agree to exercise caution when sharing sensitive details via chats.
          </p>
        </div>

        {/* USER RIGHTS AND RESPONSIBILITIES Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            USER RIGHTS AND RESPONSIBILITIES
          </h2>

          {/* Student Rights Under FERPA */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Student Rights Under FERPA
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Students have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>Access and review their PII shared via the Website and App.</li>
              <li>Correct inaccuracies in their data.</li>
              <li>Request deletion of their PII, subject to legal obligations.</li>
            </ul>
          </div>

          {/* Responsibilities of Employers and Institutions */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Responsibilities of Employers and Institutions
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Employers and schools must use PII solely for the intended purposes and comply with FERPA or applicable data protection regulations.
            </p>
          </div>

          {/* Prohibited Use of Sensitive Data */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Prohibited Use of Sensitive Data
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Users should not share the following through the Website or App unless explicitly required and secure mechanisms are in place:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>Social Security Numbers</li>
              <li>Financial or bank account information</li>
              <li>Confidential medical records</li>
            </ul>
          </div>
        </div>

        {/* TERMINATION OF DATA PROCESSING Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            TERMINATION OF DATA PROCESSING
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
            Users can terminate data processing by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
            <li>Deleting their accounts on the Website or App.</li>
            <li>Contacting Evolo AI's support team to request deletion of their data.</li>
          </ul>
          <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
            Evolo AI may retain data necessary for compliance with legal or regulatory obligations even after user requests for deletion.
          </p>
        </div>

        {/* MODIFICATION OF TERMS Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            MODIFICATION OF TERMS
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Evolo AI reserves the right to update these Terms and Conditions to align with evolving privacy and data protection laws, including FERPA. Notifications of changes will be communicated via the Website and App. Continued use of our Services constitutes acceptance of the updated Terms.
          </p>
        </div>

        {/* DISPUTE RESOLUTION Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            DISPUTE RESOLUTION
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Disputes regarding PII handling will be resolved through binding arbitration under the relevant privacy laws. Users waive their rights to class-action lawsuits concerning data privacy.
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

export default TermsofService;

