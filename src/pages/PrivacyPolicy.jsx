import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };
  useEffect(() => {
    // Document title
    document.title = 'Evolo AI Privacy Policy';

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Learn how Evolo AI collects, uses, and protects your personal information. Our Privacy Policy ensures transparency and safeguards your online data.';

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/privacy-policy';

    // Open Graph tags
    const ogTags = [
      {
        property: 'og:title',
        content: 'Evolo AI Privacy Policy',
      },
      {
        property: 'og:description',
        content:
          'Learn how Evolo AI collects, uses, and protects your personal information. Our Privacy Policy ensures transparency and safeguards your online data.',
      },
      {
        property: 'og:url',
        content: 'https://goevolo.com/privacy-policy',
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
      { name: 'twitter:title', content: 'Evolo AI Privacy Policy' },
      {
        name: 'twitter:description',
        content:
          'Learn how Evolo AI collects, uses, and protects your personal information. Our Privacy Policy ensures transparency and safeguards your online data.',
      },
      { name: 'twitter:url', content: 'https://goevolo.com/privacy-policy' },
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
      'Privacy Policy, Evolo AI, privacy, data protection, personal information, data security, user privacy, AdultEdPro, Yusair Inc';
  }, []);

  return (
    <div className="w-full bg-white py-12 md:py-20 px-4 sm:px-6 font-[Raleway]">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
          <span className="bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            Privacy Policy
          </span>
        </h1>

        {/* Paragraph 1 */}
        <div className="mb-6 md:mb-8">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            This Privacy Policy covers the mobile applications "EvoloAI Student" and "EvoloAI Instructor," which are published by "Yusair, Inc." and available through the Google Play Store. AdultEdPro.com is committed to protecting your privacy and security. This Privacy Policy outlines our practices for collecting, using, and disclosing information from our website visitors and users.
          </p>
        </div>

        {/* Paragraph 2 */}
        <div className="mb-6 md:mb-8">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Welcome to Evolo AI, an advanced artificial intelligence platform designed to enhance productivity, streamline workflows, and empower businesses with intelligent solutions.
          </p>
        </div>

        {/* Paragraph 3 */}
        <div className="mb-6 md:mb-8">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Privacy has been integrated into our platform from the beginning to respect your rights, meet our regulatory obligations, and support data security best practices. For purposes of this Privacy Policy, "personal data," "personal information," or similar terms means any data relating to an identified or identifiable natural person that is processed by Yusair, Inc. (referred to as "Evolo AI," "Adult Ed Pro," "we," "us," or "our") in accordance with this Privacy Policy and applicable data privacy laws.
          </p>
        </div>

        {/* Paragraph 4 */}
        <div className="mb-6 md:mb-8">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            This Privacy Policy applies to your access and use of Evolo AI's user-facing applications, including web and mobile platforms, tools, APIs, websites, and documentation (collectively, the "Services"). This Privacy Policy is part of Evolo AI's Terms of Service, and by using the Services, you agree to both. If you do not agree, you should not use the Services. Defined terms in this Privacy Policy have meanings associated with them in the Terms of Service.
          </p>
        </div>

        {/* Paragraph 5 */}
        <div className="mb-6 md:mb-8">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            This Privacy Policy was last updated on 6th May 2025. We are constantly improving our Services, which may necessitate updates to this Privacy Policy. We will post any updates to this page, and we encourage you to review this page periodically. Your continued use of the Services after we post any changes to this Privacy Policy will signify your agreement to the revised Privacy Policy.
          </p>
        </div>

        {/* Employee and Subcontractor Confidentiality Training Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Employee and Subcontractor Confidentiality Training
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
            Evolo AI is committed to safeguarding sensitive information through comprehensive training programs for all employees, contractors, and subcontractors responsible for handling or having access to customer data.
          </p>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Onboarding Training:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Upon joining the organization, new hires, contractors, and subcontractors are required to participate in mandatory confidentiality and data protection training within their initial week. This training encompasses modules on identifying confidential information, implementing secure handling procedures, adhering to non-disclosure obligations, categorizing data, and reporting data breaches. Training is delivered through interactive online modules accompanied by quizzes, and participants must sign a completed acknowledgment of training completion.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Annual Refresher Training:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Existing personnel are mandated to complete annual refresher training on the latest confidentiality best practices, updates to privacy laws such as the GDPR and CCPA, AI-specific data risks, and incident response procedures. Completion rates for relevant roles are monitored at 100%, and retraining is required for non-completion.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Role-Specific Training:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Staff members handling sensitive data, including developers and support teams, undergo specialized training on encryption, access controls, secure coding, and AI model security. Subcontractors are expected to demonstrate equivalent training through certifications or attestations prior to engagement.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Training Documentation and Auditing:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Records of all training sessions, including dates, participants, content outlines, and completion certificates, are retained for a minimum of three years. These records are available for customer audits upon request. Evolo AI conducts quarterly internal audits to assess the effectiveness of training programs.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Enforcement and Breach Response:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Violations of training protocols result in disciplinary action, potentially extending to termination of employment. All personnel are required to reaffirm their confidentiality obligations annually through signed agreements.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Implementation Procedures:
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm md:text-base">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Step</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Action</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Responsible Party</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">1</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Develop/update training modules with legal review</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">HR/Security Team</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Within 30 days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">2</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Roll out to current staff and subcontractors</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">HR</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Next onboarding cycle</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">3</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Track via LMS (e.g., integrated with HRIS) and report completion to leadership</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Security Officer</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Monthly</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">4</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Annual policy review and training refresh</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">Compliance Team</td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-600">End of fiscal year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Personal Data We Collect Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Personal Data We Collect:
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
            Users need to establish an account to fully access Evolo AI's Services. You can create an account as an individual user, as part of an organization, or as an enterprise client seeking advanced AI-powered solutions. For more information on account creation, please review Evolo AI's Terms of Service.
          </p>

          {/* Information From Partner Organizations */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Information From Partner Organizations:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              When businesses or institutions sign up for Evolo AI, they may provide us with personal data about their employees or users to help manage accounts and provide the Services. This data may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>Full name</li>
              <li>Job title</li>
              <li>Business email address</li>
              <li>Contact number</li>
              <li>Department or role-specific information</li>
            </ul>
            <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
              It is up to each Partner to choose what information it shares, but this data may include the student's first and last name, mailing address, email address, major, and/or GPA. Where the Family Educational Rights and Privacy Act ("FERPA") applies to data shared by Institution Partners, it is processed in compliance with the statute.
            </p>
          </div>

          {/* Information From Students and Alumni */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Information From Students and Alumni:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              When you create an Evolo AI account, we collect personal data, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Username and password</li>
              <li>Contact information (optional)</li>
              <li>Profile picture (optional)</li>
              <li>Job-related preferences, skills, or interests (if provided)</li>
            </ul>
            <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
              Users may also upload documents, files, or other content as part of their use of the Services.
            </p>
          </div>

          {/* Information From Employer Partners */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Information From Employer Partners:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              When representatives of enterprise clients create accounts, we collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>Full name</li>
              <li>Job title</li>
              <li>Business contact information</li>
              <li>Organizational details</li>
            </ul>
          </div>

          {/* Information From Career Center Professionals */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Information From Career Center Professionals of Adult Schools:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              When career center professionals of Institution Partners create a Evolo AI account, we collect basic contact information, including first and last name, email address and telephone number.
            </p>
          </div>

          {/* Information Collected Through Use of the Services */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Information Collected Through Use of the Services:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              We automatically collect certain information to improve and secure our Services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>Geolocation Data:</strong> If you opt-in, we may collect precise location data to support specific features. We do not share precise location data with third parties unless required by law.
              </li>
              <li>
                <strong>Service Interactions:</strong> Personal data you include in feedback, support requests, or when participating in beta programs.
              </li>
              <li>
                <strong>Communications & Recordings:</strong> If you engage in meetings, webinars, or support calls via Evolo AI, we may record sessions with your consent. You'll be notified when recording is enabled.
              </li>
              <li>
                <strong>User Contributions:</strong> Content you choose to publish within public or shared spaces of the platform, such as comments, posts, or feedback.
              </li>
              <li>
                <strong>Billing and Payment Data:</strong> While Evolo AI does not store your payment details directly, our payment processors collect necessary payment information in compliance with their respective privacy policies.
              </li>
              <li>
                <strong>Marketing Data:</strong> Your preferences for receiving marketing communications, event participation data, and responses to promotional content.
              </li>
              <li>
                <strong>Chatbot Data:</strong> If you engage with our virtual assistants or AI-powered support bots, we collect the information shared during these interactions.
              </li>
              <li>
                <strong>Third-Party Integrations:</strong> If you connect Evolo AI with third-party applications, we may receive limited data as authorized by you.
              </li>
            </ul>
          </div>

          {/* Information We Automatically Collect */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Information We Automatically Collect:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              To better understand how you interact with our Services, we and our partners use cookies, web beacons, and similar technologies to collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>Log and Device Data:</strong> IP address, browser type, device identifiers, operating system, network information, and session timestamps.
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, features used, time spent on the platform, and user interaction patterns.
              </li>
            </ul>
            <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
              For more information on how we use cookies and manage tracking technologies, please review our{' '}
              <a href="/cookie-policy" className="text-[#2B1BDD] hover:underline">
                Cookie Policy
              </a>
              .
            </p>
          </div>
        </div>

        {/* How We Use Your Personal Data Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            How We Use Your Personal Data:
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
            We may use the information that we collect about you, including personal data, as described below:
          </p>

          {/* To Provide the Services */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              1. To Provide the Services:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>Enhancing User Experience:</strong> Maximizing opportunities to connect student and alumni users with potential employers.
              </li>
              <li>
                <strong>Allowing student and alumni users to make appointments:</strong> With career center professionals or sign up for career fairs and other events.
              </li>
              <li>
                <strong>Personalizing the Services:</strong> By, for example, suggesting employers based on the information in a user's resume, or suggesting students with public profiles to employers based on search criteria. For more information about public profiles and student consent, see the "How We May Share Personal Data We Collect" section below.
              </li>
              <li>
                <strong>Optimizing AI Performance:</strong> Using data to train, improve, and refine our AI models, algorithms, and analytics tools to deliver more accurate and effective results.
              </li>
              <li>
                <strong>Seamless Integration:</strong> Enabling connectivity with third-party applications, APIs, and platforms as part of Evolo AI's service offerings.
              </li>
              <li>
                <strong>Account Management:</strong> Allowing users to register, create profiles, manage accounts, and access specific features based on subscription levels or service agreements.
              </li>
            </ul>
          </div>

          {/* Communication */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              2. Communication:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>Service Notifications:</strong> Sending essential updates related to your account, such as system alerts, technical notices, security updates, and support messages.
              </li>
              <li>
                <strong>Marketing & Promotions:</strong> Delivering promotional content, product updates, newsletters, and offers related to Evolo AI, subject to your communication preferences. You can opt out at any time via the unsubscribe link in our emails or by updating your account settings.
              </li>
              <li>
                <strong>Feedback & Surveys:</strong> Requesting user feedback to improve our services, conduct surveys, and gather insights for product development.
              </li>
            </ul>
          </div>

          {/* Compliance and Protection */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              3. Compliance and Protection:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              We may use your information to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>Ensure the security and integrity of Evolo AI's platform.</li>
              <li>Detect, prevent, and address fraudulent activities, security breaches, or other harmful behavior.</li>
              <li>Respond to legal requests and enforce our terms, conditions, and policies.</li>
              <li>Comply with applicable laws, regulations, and legal obligations.</li>
            </ul>
          </div>

          {/* Research and Development */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              4. Research and Development:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We continuously work to improve our services. This includes analyzing usage data to develop new features, optimize performance, and conduct internal research related to artificial intelligence and data analytics.
            </p>
          </div>

          {/* Other Uses */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              5. Other Uses:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We may use your information for other purposes that are disclosed to you at the time we collect your data or with your consent, where legally required.
            </p>
          </div>
        </div>

        {/* How We May Share Personal Data We Collect Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            How We May Share Personal Data We Collect:
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
            There are limited circumstances under which we may share personal data with others, as outlined below:
          </p>

          {/* Employer Partners */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Employer Partners:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Student and alumni information is only shared with employers through the Services where the student or alumni user chooses to make their profile public, or chooses to apply to a job, in which case we will share your profile information, resume and transcript with the employers you choose. Employer Partners are required to only use this data to provide employment services and to safeguard any personal data they receive.
            </p>
          </div>

          {/* Institution Partners */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Institution Partners:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              If a student or alumni account is associated with an Institution Partner, that Institution Partner will be able to access and view personal data uploaded by you even when your account is set to "private" status. Institution Partners are also able to view and access information used to create Employer Partner accounts. Institution Partners are required to safeguard any personal data they receive.
            </p>
          </div>

          {/* Other Users */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Other Users:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Student and alumni information is only shared with users (other than as discussed above) where the student or alumni chooses to make their profile public or uses our community features and social tools. Student and alumni users may choose to make their profile public to specific audiences to help grow their professional brand and network. Please note that when posting an employer review or other related content, you may choose to publish your name and profile alongside the content publicly, or you may choose to post the content without any directly identifying information (i.e. you may post "pseudonymously"). Even when posting pseudonymously, it may be possible to infer your identity from the content, and we share the identities of both public and pseudonymous content with Institution Partners.
            </p>
          </div>

          {/* Shareable Profile Link */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Shareable Profile Link:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              In addition to choosing to make their profile public or using community features and social tools within the Evolo AI platform, student and alumni users may also make a version of their profile viewable to anyone with access to a unique profile link ("Profile Link") created for them, including visitors to the Evolo AI platform who do not have a Evolo AI account and/or are not logged in to the Services. You may preview the publicly available version of the profile that appears when the Profile Link is clicked, including the categories of personal data that will be visible, by opening the link in an incognito browser tab. When the shareable Profile Link feature is enabled, you may copy and share the Profile Link as desired. However, you should always remember that the information contained in the public version of your profile, including any personal data contained within the profile, will be visible to anyone with access to the Profile Link. The Profile Link can be reshared and Evolo AI cannot selectively restrict access to the Profile Link once it is shared. You can access your privacy settings at any time to opt-out of the shareable Profile Link feature and/or deactivate the Profile Link.
            </p>
          </div>

          {/* Authorized Agents */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Authorized Agents:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              If you are using the Services on behalf of an Employer Partner or Institution Partner, we may share information within your account with an authorized agent of your company or institution.
            </p>
          </div>

          {/* Service Providers, Advisors, Consultants */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Service Providers, Advisors, Consultants:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We sometimes contract with third parties to assist us with providing the Services and communicating with you. Examples include cloud service providers, Evolo AI Communications-related telecommunications services, and other services for maintaining our systems, order fulfillment, email management and credit card processing. When we contract with others to perform functions of this nature, we only provide them with the information that they need to perform their specific function, and they are obligated to protect and secure your information.
            </p>
          </div>

          {/* Affiliates */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Affiliates:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We may share personal data with our corporate affiliates and subsidiaries, if any, for purposes consistent with this Privacy Policy.
            </p>
          </div>

          {/* Business Transfers */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Business Transfers:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We may choose to buy or sell assets. In these types of transactions, personal data may be one of the transferred assets. We may share personal data with professional services, potential purchasers, or investors in connection with the sale, merger, consolidation, bankruptcy, transfer of assets, or reorganization of our company. We will notify you if a different company will receive your personal data, and this Privacy Policy will apply to your data as transferred to the new entity.
            </p>
          </div>

          {/* Legal Requirements */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Legal Requirements:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We may share personal data with relevant law enforcement bodies if we believe that disclosure is reasonably necessary to comply with a law, regulation, valid legal process (e.g., subpoenas or warrants served on us), or governmental or regulatory request; to enforce applicable terms in this Privacy Policy or the Terms of Service; to protect the security or integrity of the Services, and/or to protect the rights, property, or safety of Evolo AI, its employees, users, or others; to detect, prevent, or otherwise address security or technical issues, illegal, or suspected illegal activities (including fraud); or as evidence in litigation in which we are involved, as part of a judicial or regulatory proceeding. If we are going to release your data, we will do our best to provide you with notice in advance by email, unless we are prohibited by law from doing so.
            </p>
          </div>

          {/* Non-Personal Data */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Non-Personal Data:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              We may deidentify, aggregate, or anonymize data from the personal data you and others make available in connection with the Services such that you are not individually identified. We use and share this data in a variety of ways to help our partners and the public understand trends in the job seeking market through analytics reports, statistics and other metrics and guides. For example, to understand:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>What percentage of students from certain colleges work in a specific geographic area.</li>
              <li>Whether a certain major or extra-curricular activity fits well with a particular employer's hiring patterns.</li>
              <li>How employers compare to each other in the number of applicants they receive from different colleges.</li>
            </ul>
          </div>
        </div>

        {/* Your Data Privacy Choices Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Your Data Privacy Choices:
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
            You have control over how your personal data is collected and used. You can:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
            <li>
              <strong>Manage Account Settings:</strong> Update your preferences in your account dashboard.
            </li>
            <li>
              <strong>Opt-Out of Marketing:</strong> Unsubscribe from marketing communications at any time.
            </li>
            <li>
              <strong>Access, Correct, or Delete Data:</strong> Request access to your personal data or ask us to correct, update, or delete your information, subject to legal obligations.
            </li>
          </ul>
          <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
            For more information about your privacy rights or to submit a request, please contact us at{' '}
            <a href="mailto:support@adultedpro.com" className="text-[#2B1BDD] hover:underline">
              support@adultedpro.com
            </a>
            .
          </p>
        </div>

        {/* Storage, Security, and How to Remove Your Information Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Storage, Security, and How to Remove Your Information
          </h2>

          {/* Data Security */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              1. Data Security:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Evolo AI employs industry-standard technical, administrative, and physical security measures to protect the personal data we collect. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>Data Encryption:</strong> Encrypting personal data both at rest and during transmission to safeguard against unauthorized access.
              </li>
              <li>
                <strong>Access Controls:</strong> Implementing strict access controls to ensure only authorized personnel can access sensitive data.
              </li>
              <li>
                <strong>Monitoring and Auditing:</strong> Regular security assessments, vulnerability testing, and continuous monitoring of our systems to detect and mitigate threats.
              </li>
              <li>
                <strong>Investigate Promptly:</strong> Take immediate steps to assess and contain the incident.
              </li>
              <li>
                <strong>Notify Affected Individuals:</strong> Provide timely notifications in accordance with applicable laws and regulations.
              </li>
            </ul>
          </div>

          {/* How You Can Protect Your Data */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              2. How You Can Protect Your Data:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              You also play an important role in keeping your information secure. To help protect your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>Use strong, unique passwords and update them regularly.</li>
              <li>Limit access to your devices and accounts, especially on shared networks.</li>
              <li>Sign out of your Evolo AI account when using public or shared devices.</li>
            </ul>
          </div>

          {/* Data Retention */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              3. Data Retention:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              We retain personal data for as long as necessary to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>Provide the Services:</strong> Support your account and enable access to platform features.
              </li>
              <li>
                <strong>Business Operations:</strong> Fulfill legitimate business purposes, such as analytics, security, and compliance with legal obligations.
              </li>
              <li>
                <strong>Legal Compliance:</strong> Satisfy applicable laws, regulations, and contractual obligations.
              </li>
            </ul>
            <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
              When personal data is no longer needed, we will securely delete, anonymize, or de-identify it.
            </p>
          </div>

          {/* How to Deactivate or Delete Your Information */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              4. How to Deactivate or Delete Your Information:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              If you wish to no longer be visible or active within Evolo AI's Services, you can:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>Deactivate Your Account:</strong> This will disable your account without deleting your data, allowing for future reactivation.
              </li>
              <li>
                <strong>Request Data Deletion:</strong> Submit a request to delete your personal information entirely.
              </li>
            </ul>
            <p className="text-gray-600 text-sm md:text-base mt-3 mb-3 leading-relaxed">
              To request deactivation or deletion:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                Email us at{' '}
                <a href="mailto:support@adultedpro.com" className="text-[#2B1BDD] hover:underline">
                  support@adultedpro.com
                </a>
              </li>
              <li>Access your account settings to adjust privacy controls.</li>
            </ul>
            <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
              <strong>Please note:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                We may retain certain data if required by law, to fulfill contractual obligations, or for legitimate business purposes, such as fraud prevention or dispute resolution.
              </li>
              <li>
                If your data is managed through an organization (e.g., your employer), we may retain information in accordance with their data management policies.
              </li>
            </ul>
          </div>
        </div>

        {/* Third-Party Links Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Third-Party Links:
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
            Our Services may contain links to third-party websites, applications, or services. These external sites are not governed by this Privacy Policy.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
            <li>
              <strong>Responsibility:</strong> We are not responsible for the privacy practices of third-party websites.
            </li>
            <li>
              <strong>Review Policies:</strong> We encourage you to review the privacy policies of any third-party services before providing personal information.
            </li>
          </ul>
        </div>

        {/* Children and Minors Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Children and Minors:
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
            Evolo AI is not intended for use by individuals under the age of 16 without parental consent.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
            <li>
              <strong>No Intentional Collection:</strong> We do not knowingly collect personal data from children under 13.
            </li>
            <li>
              <strong>Reporting Concerns:</strong> If you believe we have inadvertently collected information from a child under 13, please contact us at{' '}
              <a href="mailto:support@adultedpro.com" className="text-[#2B1BDD] hover:underline">
                support@adultedpro.com
              </a>
              , and we will take prompt steps to delete the data.
            </li>
          </ul>
        </div>

        {/* Your California Privacy Rights (CCPA Notice) Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Your California Privacy Rights (CCPA Notice):
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
            <strong>Effective Date:</strong> 02/10/2025
          </p>
          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
            This section applies to California residents under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA).
          </p>

          {/* Personal Information We Collect */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              1. Personal Information We Collect:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              In the past 12 months, Evolo AI may have collected the following categories of personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>Identifiers:</strong> Name, email address, phone number, IP address, and unique identifiers.
              </li>
              <li>
                <strong>Customer Records:</strong> Contact details, employment history, and professional affiliations.
              </li>
              <li>
                <strong>Protected Classification Data:</strong> Characteristics such as age, gender, race, or veteran status (only if voluntarily provided).
              </li>
              <li>
                <strong>Commercial Information:</strong> Records of services accessed, purchases made, or considered.
              </li>
              <li>
                <strong>Internet Activity:</strong> Usage data, browsing history, and interactions with our Services.
              </li>
              <li>
                <strong>Geolocation Data:</strong> General location information based on IP address or device settings.
              </li>
              <li>
                <strong>Professional Information:</strong> Job titles, work history, and industry affiliations.
              </li>
              <li>
                <strong>Non-public education information:</strong> which may include education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.
              </li>
              <li>
                <strong>Inferences:</strong> Preferences and trends derived from your interactions with our platform.
              </li>
            </ul>
            <p className="text-gray-600 text-sm md:text-base mt-3 mb-3 leading-relaxed">
              This personal information may be collected directly from you on the website or through the Services, or indirectly from you, for example by observing your actions in using the website or the Services, from other sources such as Institution Partners, as described in the "Personal Data We Collect" section above.
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              <strong>Business Purposes and Disclosure:</strong> We may use or process each of the above categories of personal information for one or more of the purposes described in the "How We Use Your Personal Data" section above, which includes without limitation, (i) to operate, manage, maintain, develop, and improve our business and the Services; (ii) to provide the Services to you; (iii) to communicate with you; (iv) to analyze the use of our Services; (v) to personalize, advertise, and market the Services; (vi) for security (vii) for legal compliance; and (viii) with your consent.
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              We may disclose, and have disclosed in the preceding twelve (12) months, each of the above categories of personal information for our operational business purposes to the parties described in the "How We May Share Personal Data We Collect" section, which includes without limitation: (i) Employer Partners; (ii) Institution Partners; (iii) other users of the Services or visitors of the Evolo AI platform in connection with the shareable Profile Link; (iv) authorized agents; (v) service providers, advisors, and consultants; (vi) affiliates; and (vii) other parties where required by law or to protect our rights.
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              <strong>Personal Information Shared:</strong> We do not sell the personal information we collect.
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              However, subject to the preferences you indicate to us, we may share for purposes of cross-context behavioral advertising, including in the preceding twelve (12) months, the following information with third parties:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>Identifiers such as online identifier, Internet Protocol address, and other similar identifiers.</li>
              <li>Internet or other electronic network activity information, such as browsing history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements.</li>
            </ul>
            <p className="text-gray-600 text-sm md:text-base mt-3 mb-3 leading-relaxed">
              For more information about our use of cookies and other tracking technologies, please visit our{' '}
              <a href="/privacy-policy" className="text-[#2B1BDD] hover:underline">
                Privacy Policy
              </a>
              {' '}and{' '}
              <a href="/cookie-policy" className="text-[#2B1BDD] hover:underline">
                Cookie Policy
              </a>
              . You may request to opt-out of this type of personal information sharing using the methods described in the Cookie Policy.
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              We do not knowingly share the personal information of minors under sixteen (16) years of age.
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              <strong>Retention.</strong> We retain personal information for as long as reasonably necessary to provide you with the Services, to perform our legitimate business purposes, or for other essential purposes such as complying with our legal obligations, maintaining records, resolving disputes, maintaining security and preventing harm, detecting and preventing fraud and abuse, enforcing our agreements. The criteria used to determine retention periods includes the legal limitation of liability period, agreed contractual provisions, applicable regulatory requirements, and industry standards.
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              <strong>Consumer Rights and Requests:</strong>
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              You may request that we disclose to you the following information as required by law:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>The categories of personal information we collect about you and the categories of sources from which we collect such information;</li>
              <li>The business or commercial purpose for collecting, selling, or sharing personal information about you;</li>
              <li>The categories of personal information about you that we have sold or shared and the categories of third parties to whom we sold or shared such information; and</li>
              <li>The categories of personal information about you that we otherwise disclosed, and the categories of third parties to whom we disclosed such personal information.</li>
            </ul>
            <p className="text-gray-600 text-sm md:text-base mt-3 mb-3 leading-relaxed">
              You may also request (i) to correct inaccuracies in your personal information; (ii) to receive a copy of your personal information: (iii) that we delete your personal information, subject to certain exceptions; or (iv) to "opt-out" of your personal information being shared with certain third parties, as described above.
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              <strong>Non-Discrimination:</strong> We will not unlawfully discriminate against you for exercising any of your CCPA rights.
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              <strong>Response to Requests:</strong> We will attempt to respond to California resident requests in as timely a fashion as possible. In the event of delays over forty-five (45) days, we will inform you of the reason and extension period in writing. Any disclosures we provide will only cover the twelve (12) month period preceding the verifiable receipt of a California Resident's request unless you request otherwise and that time period meets the regulatory requirements. The response we provide will explain the reasons we cannot comply with a request, if applicable.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              <strong>Shine the Light:</strong> California residents are entitled to request and obtain from us once per calendar year certain information regarding our disclosure of personal information to third parties for their own direct marketing purposes. Evolo AI does not disclose personal information to third parties for their direct marketing purposes.
            </p>
          </div>

          {/* Your Rights Under CCPA */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              2. Your Rights Under CCPA:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              As a California resident, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>Access:</strong> Request the categories and specific pieces of personal information we have collected about you.
              </li>
              <li>
                <strong>Correct:</strong> Request corrections to inaccurate personal information.
              </li>
              <li>
                <strong>Delete:</strong> Request the deletion of your personal information, subject to legal exceptions.
              </li>
              <li>
                <strong>Opt-Out:</strong> Opt-out of the sharing of your personal data for targeted advertising.
              </li>
              <li>
                <strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.
              </li>
            </ul>
          </div>

          {/* How to Exercise Your Rights */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              3. How to Exercise Your Rights:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              You can submit a request by:
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              <strong>Email:</strong>{' '}
              <a href="mailto:support@adultedpro.com" className="text-[#2B1BDD] hover:underline">
                support@adultedpro.com
              </a>
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We will respond to verifiable requests within 45 days. If we require more time, we'll notify you of the reason and expected timeframe.
            </p>
          </div>

          {/* Shine the Light Law */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              4. Shine the Light Law (California Civil Code §1798.83):
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              California residents may request information about our disclosure of personal information to third parties for direct marketing purposes. Evolo AI does not disclose personal information for such purposes.
            </p>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Contact Us:
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
            If you have questions about this Privacy Policy or need assistance exercising your rights, please contact us at:
          </p>
          <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-1">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@adultedpro.com" className="text-[#2B1BDD] hover:underline">
                support@adultedpro.com
              </a>
            </p>
            <p>
              <strong>Address:</strong> AdultEd Pro
            </p>
            <p className="ml-4">1110 N Virgil Ave</p>
            <p className="ml-4">PMB 98121</p>
            <p className="ml-4">Los Angeles, CA 90029</p>
          </div>
          <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
            If you require this policy in an alternative format, please reach out to the contact information above.
          </p>
        </div>

        {/* Data Privacy Framework (DPF) Notice Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Data Privacy Framework (DPF) Notice:
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
            Evolo AI complies with the EU-U.S. Data Privacy Framework (EU-U.S. DPF), the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. Data Privacy Framework (Swiss-U.S. DPF) as set forth by the U.S. Department of Commerce. Evolo AI has certified to the U.S. Department of Commerce that it adheres to the:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
            <li>
              EU-U.S. Data Privacy Framework Principles (EU-U.S. DPF Principles) regarding the processing of personal data received from the European Union in reliance on the EU-U.S. DPF,
            </li>
            <li>
              UK Extension to the EU-U.S. DPF concerning personal data from the United Kingdom (and Gibraltar), and
            </li>
            <li>
              Swiss-U.S. Data Privacy Framework Principles (Swiss-U.S. DPF Principles) for personal data received from Switzerland.
            </li>
          </ul>
          <p className="text-gray-600 text-sm md:text-base mt-3 mb-3 leading-relaxed">
            If there is any conflict between the terms of this Privacy Policy and the DPF Principles, the DPF Principles shall govern.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            To learn more about the Data Privacy Framework (DPF) program and to view our certification, please visit{' '}
            <a href="https://www.dataprivacyframework.gov" target="_blank" rel="noopener noreferrer" className="text-[#2B1BDD] hover:underline">
              www.dataprivacyframework.gov
            </a>
            .
          </p>

          {/* Handling Inquiries and Complaints */}
          <div className="mt-6 mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Handling Inquiries and Complaints:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              In compliance with the EU-U.S. DPF, the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. DPF, Evolo AI is committed to resolving complaints related to our collection, use, and processing of personal data.
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Individuals from the EU, UK, or Switzerland with inquiries or complaints regarding the handling of their personal data should first contact us directly at:
            </p>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-1 ml-4">
              <p>Yusair, Inc.</p>
              <p>Adult Ed Pro</p>
              <p>110 N Virgil Ave</p>
              <p>PMB 98121</p>
              <p>Los Angeles, CA 90029</p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:support@adultedpro.com" className="text-[#2B1BDD] hover:underline">
                  support@adultedpro.com
                </a>
              </p>
            </div>
          </div>

          {/* Independent Dispute Resolution */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Independent Dispute Resolution:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              If your privacy concern or complaint cannot be resolved through Evolo AI's internal processes, we will refer unresolved complaints to an independent third-party dispute resolution provider:
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              <strong>VeraSafe DPF Dispute Resolution Procedure</strong>
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              This service is provided at no cost to you. To submit a complaint, please visit VeraSafe's dispute resolution portal.
            </p>
          </div>

          {/* Binding Arbitration */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Binding Arbitration (If Applicable):
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Under certain conditions specified in Annex I of the EU-U.S. DPF Principles and Annex I of the Swiss-U.S. DPF Principles, you may invoke binding arbitration to address unresolved complaints. This option is available only after you have:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>Raised the issue with Evolo AI,</li>
              <li>Sought resolution through the independent dispute resolution provider, and</li>
              <li>Attempted to resolve the matter through the appropriate data protection authorities.</li>
            </ul>
          </div>

          {/* U.S. Federal Trade Commission (FTC) Jurisdiction */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              U.S. Federal Trade Commission (FTC) Jurisdiction:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Evolo AI's compliance with the EU-U.S. DPF, the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. DPF is subject to the enforcement authority of the U.S. Federal Trade Commission (FTC).
            </p>
          </div>

          {/* Accountability for Data Transfers */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Accountability for Data Transfers:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              When Evolo AI transfers personal data to third-party service providers or agents, we remain accountable under the DPF Principles. We require these third parties to process personal data in a manner consistent with the DPF Principles.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Evolo AI remains liable for the processing of personal data by third-party agents if they process such data in a way that violates the DPF Principles—unless Evolo AI can prove that it is not responsible for the event giving rise to the damage.
            </p>
          </div>

          {/* Legal Disclosures */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Legal Disclosures:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Evolo AI may be required to disclose personal data in response to lawful requests from public authorities, including to meet national security or law enforcement requirements.
            </p>
          </div>

          {/* General Contact Information */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              General Contact Information:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              If you have questions about this Privacy Policy, the Data Privacy Framework, or Evolo AI's data privacy practices, please contact us:
            </p>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-1 ml-4">
              <p>Yusair, Inc.</p>
              <p>Adult Ed Pro</p>
              <p>110 N Virgil Ave</p>
              <p>PMB 98121</p>
              <p>Los Angeles, CA 90029</p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:support@adultedpro.com" className="text-[#2B1BDD] hover:underline">
                  support@adultedpro.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Use of OpenAI's ChatGPT and Data Processing Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Use of OpenAI's ChatGPT and Data Processing:
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
            Evolo AI integrates OpenAI's ChatGPT (Enterprise Edition) to provide AI-powered functionalities within our platform, enhancing user experiences through automation, assistance, and intelligent interactions. As part of this integration, we ensure that no personal, sensitive, or confidential user data is shared with AI models.
          </p>

          {/* Use of OpenAI's ChatGPT Enterprise Edition */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              1. Use of OpenAI's ChatGPT Enterprise Edition:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Evolo AI utilizes the Enterprise edition of ChatGPT, which offers:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>Stronger data privacy protections</strong> – OpenAI does not use our data for model training.
              </li>
              <li>
                <strong>Enhanced security measures</strong> – AI interactions are processed in a secure environment.
              </li>
              <li>
                <strong>Compliance with enterprise-grade privacy standards</strong> – Including GDPR, CCPA, and SOC 2.
              </li>
            </ul>
            <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
              <strong>Important Notice:</strong> Evolo AI does not share personally identifiable information (PII), sensitive financial data, or confidential business information with ChatGPT.
            </p>
          </div>

          {/* What Data is Processed by OpenAI? */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              2. What Data is Processed by OpenAI?
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              When users interact with AI-powered features, OpenAI may process:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>User Input:</strong> Any text, questions, or content entered by users.
              </li>
              <li>
                <strong>Generated Responses:</strong> AI-generated replies from ChatGPT.
              </li>
              <li>
                <strong>Usage Data:</strong> Metadata like timestamps, interaction logs, and system analytics (non-personal data).
              </li>
            </ul>
            <p className="text-gray-600 text-sm md:text-base mt-3 mb-3 leading-relaxed">
              Evolo AI does not send or process:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>User account details (e.g., name, email, phone number).</li>
              <li>Financial or payment-related information.</li>
              <li>Confidential business, legal, or medical data.</li>
            </ul>
          </div>

          {/* Purpose of AI Data Processing */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              3. Purpose of AI Data Processing:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              User data processed by OpenAI is used for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>Generating AI-powered responses to user queries.</li>
              <li>Enhancing system performance without compromising privacy.</li>
              <li>Delivering seamless AI-powered functionalities while maintaining data security.</li>
            </ul>
          </div>

          {/* User Consent & Control Over AI Interactions */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              4. User Consent & Control Over AI Interactions:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Evolo AI ensures full transparency and user control over AI-powered interactions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>Explicit Consent:</strong> Users are informed when interacting with AI-powered features.
              </li>
              <li>
                <strong>Opt-Out Option:</strong> Users who do not wish to use AI features can disable them in Settings.
              </li>
              <li>
                <strong>Data Deletion Requests:</strong> Users can request deletion of AI-related interactions via{' '}
                <a href="mailto:support@adultedpro.com" className="text-[#2B1BDD] hover:underline">
                  support@adultedpro.com
                </a>
                .
              </li>
              <li>
                <strong>No Storage of Sensitive Data:</strong> AI interactions are not retained beyond the processing session.
              </li>
            </ul>
          </div>

          {/* AI Limitations & Disclaimer */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              5. AI Limitations & Disclaimer:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>AI-generated responses may not always be 100% accurate or up-to-date.</li>
              <li>ChatGPT should not be relied upon for legal, financial, or medical decisions.</li>
              <li>Evolo AI is not liable for actions taken based on AI-generated content.</li>
            </ul>
          </div>

          {/* Security & Compliance Measures */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              6. Security & Compliance Measures:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Both Evolo AI and OpenAI implement strict security controls, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>End-to-End Encryption</strong> – Protecting AI interactions using secure transmission protocols.
              </li>
              <li>
                <strong>Strict Access Controls</strong> – AI-generated responses are accessible only within Evolo AI's platform.
              </li>
              <li>
                <strong>GDPR & CCPA Compliance</strong> – Fully aligned with global data protection laws.
              </li>
            </ul>
          </div>

          {/* Compliance with Third-Party Platform Requirements */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              7. Compliance with Third-Party Platform Requirements:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              For mobile apps (iOS/Android) and third-party platforms (Google Play, App Store, LinkedIn, etc.), this policy aligns with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>Apple's App Store Privacy Policy Requirements</li>
              <li>Google Play's Data Safety Guidelines</li>
              <li>Enterprise-grade data protection (SOC 2, ISO 27001, etc.)</li>
            </ul>
          </div>

          {/* Updates & Contact Information */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              8. Updates & Contact Information:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Evolo AI regularly updates its privacy policy to reflect advancements in AI security, data privacy, and compliance. For inquiries related to OpenAI's ChatGPT integration, contact:
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              <a href="mailto:support@adultedpro.com" className="text-[#2B1BDD] hover:underline">
                support@adultedpro.com
              </a>
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              For OpenAI's official privacy policy, visit:{' '}
              <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2B1BDD] hover:underline">
                OpenAI Privacy Policy
              </a>
            </p>
          </div>
        </div>

        {/* Cookies and Similar Technologies Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Cookies and Similar Technologies:
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
            Like many businesses, Evolo AI and our third-party partners use cookies and similar technologies—including web beacons, pixels, tags, and scripts (collectively referred to as "cookies")—to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
            <li>Recognize your browser,</li>
            <li>Understand how you interact with our Services,</li>
            <li>Analyze trends,</li>
            <li>Personalize and enhance your experience, and</li>
            <li>Operate, administer, and improve our Services.</li>
          </ul>

          {/* What Are Cookies? */}
          <div className="mt-6 mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              What Are Cookies?
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Cookies are small data files stored on your computer, mobile device, or browser. We use:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>Session cookies,</strong> which expire when you close your browser, and
              </li>
              <li>
                <strong>Persistent cookies,</strong> which remain on your device until you delete them.
              </li>
            </ul>
            <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
              These cookies help us provide a more efficient, personalized experience based on how you interact with our Services.
            </p>
          </div>

          {/* Managing Your Cookie Preferences */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Managing Your Cookie Preferences:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              When you visit the Evolo AI website for the first time, you'll see a cookie banner tailored to your region, allowing you to manage your preferences. You can adjust your cookie settings at any time by:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>Clicking "Cookie Settings" on our website, or</li>
              <li>Accessing "Cookie Preferences" within your user account.</li>
            </ul>
          </div>

          {/* Agreement to Arbitrate */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Agreement to Arbitrate:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Any claim, dispute, or controversy arising out of or relating to your relationship with the Company—including but not limited to claims involving services, agreements, personal data, privacy breaches, or other interactions—shall be resolved exclusively by final and binding arbitration.
            </p>
          </div>

          {/* Waiver of Jury Trial */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Waiver of Jury Trial:
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              You understand and agree that, by accepting this Agreement, you waive your right to a jury trial for any disputes subject to arbitration under this section.
            </p>
          </div>

          {/* Types of Cookies We Use */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Types of Cookies We Use:
            </h3>

            {/* Essential Cookies */}
            <div className="mb-4">
              <h4 className="text-base md:text-lg font-semibold text-gray-700 mb-2">
                1. Essential Cookies:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
                <li>
                  <strong>Purpose:</strong> Necessary for the operation of our Services.
                </li>
                <li>
                  <strong>Functions:</strong> Enable core features like secure login, account management, and payment processing.
                </li>
                <li>
                  <strong>Note:</strong> Disabling these cookies may impact basic functionality.
                </li>
              </ul>
            </div>

            {/* Functional Cookies */}
            <div className="mb-4">
              <h4 className="text-base md:text-lg font-semibold text-gray-700 mb-2">
                2. Functional Cookies:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
                <li>
                  <strong>Purpose:</strong> Enhance your user experience.
                </li>
                <li>
                  <strong>Functions:</strong> Remember your preferences (language, region, etc.) and personalize content based on past interactions.
                </li>
              </ul>
            </div>

            {/* Performance Cookies */}
            <div className="mb-4">
              <h4 className="text-base md:text-lg font-semibold text-gray-700 mb-2">
                3. Performance Cookies:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
                <li>
                  <strong>Purpose:</strong> Help us improve our Services.
                </li>
                <li>
                  <strong>Functions:</strong> Collect aggregated data on website traffic, usage patterns, and user interactions.
                </li>
                <li>
                  <strong>Data:</strong> Information collected does not personally identify you.
                </li>
              </ul>
            </div>

            {/* Marketing Cookies */}
            <div className="mb-4">
              <h4 className="text-base md:text-lg font-semibold text-gray-700 mb-2">
                4. Marketing Cookies:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
                <li>
                  <strong>Purpose:</strong> Deliver personalized advertising and content.
                </li>
                <li>
                  <strong>Functions:</strong> Track your online activity to tailor ads based on your interests.
                </li>
              </ul>
            </div>
          </div>

          {/* Third-Party Cookies and Services */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Third-Party Cookies and Services:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              We work with trusted third-party partners who may place cookies on our site to support analytics, advertising, and security. These partners include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>Google Analytics:</strong> Helps us analyze user behavior.
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm md:text-base leading-relaxed ml-6 mt-1">
                  <li>
                    Learn More:{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2B1BDD] hover:underline">
                      Google's Data Practices
                    </a>
                  </li>
                  <li>
                    Opt-Out:{' '}
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#2B1BDD] hover:underline">
                      Google Analytics Opt-Out Tool
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Facebook Pixel:</strong> Supports targeted advertising.
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm md:text-base leading-relaxed ml-6 mt-1">
                  <li>
                    Opt-Out:{' '}
                    <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-[#2B1BDD] hover:underline">
                      Facebook Ad Preferences
                    </a>
                  </li>
                  <li>
                    Privacy Policy:{' '}
                    <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-[#2B1BDD] hover:underline">
                      Facebook Data Policy
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Your Choices and Controls */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Your Choices and Controls:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              You have several options to control how cookies are used:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base leading-relaxed ml-4">
              <li>
                <strong>Manage Preferences:</strong> Adjust your settings anytime via Cookie Settings.
              </li>
              <li>
                <strong>Browser Controls:</strong> Use your browser's settings to clear, block, or manage cookies.
              </li>
              <li>
                <strong>Mobile Devices:</strong> Check your device settings to limit ad tracking.
              </li>
              <li>
                <strong>Third-Party Opt-Outs:</strong> Opt out directly through services like Google or Facebook.
              </li>
            </ul>
          </div>

          {/* Do Not Track (DNT) Signals */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
              Do Not Track (DNT) Signals:
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
              Some browsers offer a "Do Not Track" (DNT) feature. Currently, Evolo AI does not respond to DNT signals due to the lack of industry-wide standards.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Learn More:{' '}
              <a href="https://allaboutdnt.com/" target="_blank" rel="noopener noreferrer" className="text-[#2B1BDD] hover:underline">
                All About Do Not Track
              </a>
            </p>
          </div>
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

export default PrivacyPolicy;

