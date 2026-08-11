import React, { useEffect, useState } from 'react';

const BlogImage = ({ src, alt }) => (
  <div className="my-8 flex justify-center">
    <img
      src={src}
      alt={alt}
      width={1024}
      height={572}
      className="w-full max-w-3xl h-auto rounded-xl shadow-lg"
    />
  </div>
);

const Blog18 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    document.title = 'CYBHI Documentation Guide for California Schools | Evolo AI';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content =
      'Learn how California schools can modernize CYBHI documentation with structured incident reporting, SOAP and BIRP workflows, billing review, admin oversight, and Evolo AI.';

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://goevolo.com/cybhi-documentation-california-schools/';
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What's the difference between SOAP and BIRP formats?",
      answer:
        'SOAP (Subjective, Objective, Assessment, Plan) is used for incident reports — capturing what happened and its immediate implications. BIRP (Behavior, Intervention, Response, Plan) is used for coaching and counseling documentation — capturing a clinical interaction and its outcome. Incidents can generate coaching or counseling sessions, but the two formats serve different documentation purposes.',
    },
    {
      question: 'Can Classified Staff bill Medi-Cal for the incidents they report?',
      answer:
        'No. Classified Staff can report and submit incidents, but only certified users Certified Classified Staff/CHWs and Counselors can generate billing codes for coaching or counseling sessions.',
    },
    {
      question: 'What happens if an Admin rejects a report?',
      answer:
        "The originating user is notified, and the report is flagged with the Admin's reason and notes. It is not eligible for billing until the necessary revisions are made and it's resubmitted for review.",
    },
    {
      question: 'How does QR-based registration work for group counseling sessions?',
      answer:
        'For class-level or group sessions, the Counselor generates a session-specific QR code. Students scan it and enter their own name, student ID, and class, which registers them for the session automatically. The QR code expires once the session closes, and every registration is audit logged.',
    },
    {
      question: "Can a report be edited after it's approved?",
      answer:
        'No. Once a report is approved, it is locked from further edits to protect the integrity of the billed record. Only reports marked "Revision Requested" can be edited.',
    },
    {
      question: 'How often does the student roster need to be updated?',
      answer:
        'Student lists are typically uploaded quarterly through a secure Admin portal. If a student not yet in the system is involved in an incident, the Admin can add them manually in the interim.',
    },
    {
      question: 'Is this documentation system compliant with FERPA and HIPAA?',
      answer:
        'Yes. The framework is designed to be fully compliant with FERPA, HIPAA, and CYBHI requirements, using role-based access control, multifactor authentication, one-time security keys, and comprehensive audit logging.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center mb-6 font-['Raleway']">
          From Incident to Intervention: A Modern Guide to School Behavioral Health Documentation for California Schools
        </h1>

        <BlogImage
          src="/images/101.png"
          alt="CYBHI behavioral health documentation guide for California schools"
        />

        <div className="flex items-center text-gray-600 mb-8 pb-6 border-b font-['Raleway']">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 font-semibold">EA</span>
            </div>
            <div>
              <p className="font-medium">Evolo AI</p>
              <p className="text-sm">CYBHI Documentation Guide • 12 min read</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10 font-['Raleway']">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Key Summary:</h2>
          <p className="text-gray-700 leading-relaxed">
            California&apos;s CYBHI initiative lets schools bill Medi-Cal for on-campus behavioral health services — but
            reimbursement, compliance, and student outcomes depend on whether incidents, coaching, and counseling are
            documented correctly, consistently, and on time. This guide walks through SOAP/BIRP workflows, roles,
            billing, and admin oversight — and where Evolo AI removes the friction that keeps good programs from scaling.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 font-['Raleway']">
          <p className="mb-6">
            California&apos;s Children and Youth Behavioral Health Initiative (CYBHI) gave schools a historic opportunity:
            the ability to bill Medi-Cal for behavioral health services delivered on campus. But an opportunity is only as
            good as the documentation behind it. Reimbursement, compliance, and most importantly student outcomes all depend
            on whether an incident, a coaching conversation, or a counseling session is captured correctly, consistently,
            and on time.
          </p>
          <p className="mb-6">
            This guide is written for the people who own that problem every day: school administrators, district leaders,
            Student Services Directors, Behavioral Health Coordinators, counselors, and Community Health Workers (CHWs). It
            walks through how behavioral health documentation actually works in a CYBHI-aligned school system who does what,
            in what format, and why each step exists and shows where purpose-built technology like Evolo AI removes the
            friction that keeps good programs from scaling.
          </p>

          <div className="bg-white p-6 mt-8 rounded-xl border border-gray-200 mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Table of Content</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li className="text-gray-700 font-medium">Why Behavioral Health Documentation Is Suddenly a District Priority</li>
              <li className="text-gray-700 font-medium">The Core Vocabulary: SOAP, BIRP, and CYBHI</li>
              <li className="text-gray-700 font-medium">Who Does What: Roles in a CYBHI Documentation Workflow</li>
              <li className="text-gray-700 font-medium">The Documentation Lifecycle: From Incident to Intervention</li>
              <li className="text-gray-700 font-medium">Incident Reporting, Explained</li>
              <li className="text-gray-700 font-medium">Coaching Sessions: The Bridge Between Incident and Counseling</li>
              <li className="text-gray-700 font-medium">Counseling Sessions and Billing Codes</li>
              <li className="text-gray-700 font-medium">Group, Class, and Independent Counseling Models</li>
              <li className="text-gray-700 font-medium">Admin Oversight: Review, Approval, and Revision</li>
              <li className="text-gray-700 font-medium">User and Student Data Management</li>
              <li className="text-gray-700 font-medium">Reporting and Analytics: Turning Documentation Into Insight</li>
              <li className="text-gray-700 font-medium">Security, Privacy, and Compliance by Design</li>
              <li className="text-gray-700 font-medium">Practical Example: A Single Incident, Start to Finish</li>
              <li className="text-gray-700 font-medium">Best Practices for Districts Rolling Out Behavioral Health Documentation</li>
              <li className="text-gray-700 font-medium">Where Evolo AI Fits</li>
              <li className="text-gray-700 font-medium">Frequently Asked Questions</li>
              <li className="text-gray-700 font-medium">Conclusion</li>
            </ol>
          </div>

          <p className="mb-6">
            Want to see the full CYBHI workflow? Watch the product walkthrough and see how incident reporting, coaching,
            counseling, approvals, and billing come together in one connected platform.
          </p>

          <BlogImage src="/images/102.png" alt="Traditional documentation vs modern connected CYBHI workflow" />

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Behavioral Health Documentation Is Suddenly a District Priority
          </h2>
          <p className="mb-6">
            For years, behavioral incidents on campus were handled the way most schools still handle them: a note in a file,
            a call home, maybe a referral to the counselor&apos;s office. That approach worked when the goal was simply
            &quot;keep a record.&quot; It doesn&apos;t work when the goal is Medi-Cal reimbursement, because reimbursement
            depends on documentation that is:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Structured in a clinically recognized format</li>
            <li>Timely, so services can be billed before the window closes</li>
            <li>Auditable, so the district can withstand a compliance review</li>
            <li>
              Linked — an incident, a coaching intervention, and a counseling session need to reference each other, not
              live in three disconnected systems
            </li>
            <li>
              Districts that treat documentation as an afterthought tend to see three consequences: billable services go
              unbilled because the paperwork wasn&apos;t completed correctly, staff burn out from duplicate data entry
              across incident logs and clinical notes, and administrators lose the ability to see patterns which schools
              have rising incident volume, which students need escalated support, where staffing is stretched thin.
            </li>
          </ul>
          <p className="mb-6">
            The organizations getting this right are the ones that treat documentation as infrastructure, not paperwork.
            That reframing is the foundation for everything else in this guide.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
            The Core Vocabulary: SOAP, BIRP, and CYBHI
          </h2>
          <p className="mb-6">
            Before diving into workflows, it helps to agree on terms. CYBHI-aligned systems rely on two clinical
            documentation formats, plus a small set of role and compliance concepts.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">Term</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">What It Means</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">Where It&apos;s Used</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">CYBHI</td>
                  <td className="border border-gray-200 px-4 py-2">
                    California Youth Behavioral Health Initiative the state framework governing documentation, redaction,
                    and reporting requirements for student behavioral and counseling data.
                  </td>
                  <td className="border border-gray-200 px-4 py-2">Governs every workflow in this guide</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">SOAP Format</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Subjective, Objective, Assessment, Plan a structured format used for incident reports
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    Used by Classified Staff, CHWs, and Counselors when logging incidents
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">BIRP Format</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Behavior, Intervention, Response, Plan a structured clinical note format used for coaching and
                    counseling documentation
                  </td>
                  <td className="border border-gray-200 px-4 py-2">Used by CHWs and Counselors for follow-up sessions</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Incident Report</td>
                  <td className="border border-gray-200 px-4 py-2">
                    A formal record of a behavioral event, reviewed by counselors or administrators for analysis,
                    intervention, or follow-up
                  </td>
                  <td className="border border-gray-200 px-4 py-2">The starting point of most workflows</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Coaching/Counseling Draft</td>
                  <td className="border border-gray-200 px-4 py-2">
                    A preliminary record automatically generated for each participant in an incident, so follow-up can
                    happen without re-entering information
                  </td>
                  <td className="border border-gray-200 px-4 py-2">Bridges incident reporting and clinical documentation</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Billing Code</td>
                  <td className="border border-gray-200 px-4 py-2">
                    A CYBHI-aligned code generated based on session type, duration, and provider role, used for Medi-Cal
                    reimbursement
                  </td>
                  <td className="border border-gray-200 px-4 py-2">Generated during coaching and counseling report creation</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">FERPA / HIPAA</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Federal laws governing the confidentiality of student education records and health information,
                    respectively
                  </td>
                  <td className="border border-gray-200 px-4 py-2">Apply across the entire platform</td>
                </tr>
              </tbody>
            </table>
          </div>

          <BlogImage src="/images/103.png" alt="SOAP vs BIRP documentation formats comparison" />

          <p className="mb-6">
            Two formats, one framework. Everything downstream who can create what, what gets reviewed, what becomes billable
            traces back to these definitions.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
            Who Does What: Roles in a CYBHI Documentation Workflow
          </h2>
          <p className="mb-6">
            CYBHI documentation only works if access and responsibility are matched to training and certification. A system
            that lets anyone bill a Medi-Cal code is a compliance liability; a system that makes every user wait on the
            Admin for basic incident logging is an operational bottleneck. The role structure below is designed to avoid
            both failure modes.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">Role</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">Can Report Incidents?</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">Can Bill Sessions?</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">Primary Responsibility</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Classified Staff</td>
                  <td className="border border-gray-200 px-4 py-2">Yes</td>
                  <td className="border border-gray-200 px-4 py-2">No</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Non-certified personnel (aides, security, operations, office staff) who document incidents observed
                    during daily activities
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">
                    Certified Classified Staff / Community Health Worker (CHW)
                  </td>
                  <td className="border border-gray-200 px-4 py-2">Yes</td>
                  <td className="border border-gray-200 px-4 py-2">Yes</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Certified personnel who report incidents and provide follow-up coaching in BIRP format
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Counselor</td>
                  <td className="border border-gray-200 px-4 py-2">Yes</td>
                  <td className="border border-gray-200 px-4 py-2">Yes</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Licensed or certified professionals who manage counseling sessions and respond to admin revision requests
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Admin</td>
                  <td className="border border-gray-200 px-4 py-2">Reviews only</td>
                  <td className="border border-gray-200 px-4 py-2">Approves/locks billing</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Oversees all incident, coaching, and counseling workflows; approves, rejects, or requests revisions;
                    manages users and security
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <BlogImage src="/images/104.png" alt="CYBHI documentation roles: Classified Staff, CHW, Counselor, and Admin" />

          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">Why the role split matters</h3>
          <p className="mb-6">
            This isn&apos;t bureaucracy for its own sake. Classified Staff are often the first adults to witness an
            incident, a hallway conflict, a cafeteria dispute but they aren&apos;t clinically certified to bill Medi-Cal.
            Giving them a fast, guided way to document what happened (SOAP format) without asking them to produce clinical
            judgments keeps documentation timely without overstepping scope of practice.
          </p>
          <p className="mb-6">
            CHWs and Counselors sit downstream. They&apos;re certified to translate an incident into an intervention coaching
            or counseling and to generate the billing code that makes the service reimbursable. Because billing carries
            financial and compliance weight, the Admin retains final approval authority over every billable action. No report
            becomes financially final until an administrator signs off.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
            The Documentation Lifecycle: From Incident to Intervention
          </h2>
          <p className="mb-6">
            Every behavioral health record in a CYBHI-aligned system moves through the same basic lifecycle, regardless of
            whether it&apos;s an incident, a coaching session, or a counseling session:
          </p>
          <p className="mb-6 font-medium text-gray-900">
            Draft → Submitted → Reviewed by Admin → Approved / Rejected / Revision Requested → Resubmitted (if needed) →
            Approved
          </p>

          <BlogImage src="/images/105.png" alt="Complete school behavioral health documentation journey from incident to insights" />

          <p className="mb-6">
            This single, repeatable status model is what makes the system auditable. A district doesn&apos;t need to
            reverse-engineer what happened to a report six months later — the lifecycle is the audit trail. Every transition
            (who submitted, who reviewed, what was requested, when it was resubmitted) is logged.
          </p>
          <p className="mb-4">Two design details matter here:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Once a report is approved, it&apos;s locked. No one — not even the original author — can edit it further. This
              protects the integrity of billed records.
            </li>
            <li>
              Only reports marked &quot;Revision Requested&quot; are editable. This prevents duplicate or conflicting
              versions of the same incident from circulating.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">Incident Reporting, Explained</h2>

          <BlogImage src="/images/107.png" alt="Smart incident reporting workflow for CYBHI-aligned schools" />

          <p className="mb-6">
            Incident reporting is the front door to the entire system. Classified Staff, CHWs, and Counselors can all
            initiate one, typically by describing what happened through voice or text in response to guided prompts covering
            date, time, location, description, and (if relevant) resolution and counseling details.
          </p>
          <p className="mb-4">The system then structures that narrative into a SOAP report:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Subjective — the reporting user&apos;s description of what happened</li>
            <li>Objective — factual observations (witnesses, condition of those involved, environment)</li>
            <li>Assessment — interpretation of severity and potential consequences</li>
            <li>Plan — next steps, such as referral to counseling or a follow-up check</li>
          </ul>

          <BlogImage src="/images/106.png" alt="Staff documenting a behavioral incident using a digital platform" />

          <p className="mb-6">
            Before submission, the user reviews the generated report, confirms the correct student ID for each named
            participant from the preloaded student roster, and submits it to the Admin. Future-dated incidents aren&apos;t
            allowed, and submission is blocked until every mandatory field is complete small guardrails that prevent a large
            share of the errors that would otherwise surface during a compliance audit months later.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">
            Why guided, structured intake beats a blank text box
          </h3>
          <p className="mb-6">
            A free-text incident log looks flexible, but it&apos;s actually a liability generator: two staff members
            describing the same category of incident will use different language, omit different details, and produce records
            that don&apos;t hold up consistently under audit. Guided intake where the system prompts for the specific fields
            a SOAP report requires trades a small amount of upfront structure for a large reduction in downstream rework.
            It&apos;s the same principle behind structured intake forms in healthcare: the format does the work of remembering
            what matters, so the human can focus on accurately describing what happened.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
            Coaching Sessions: The Bridge Between Incident and Counseling
          </h2>
          <p className="mb-6">
            Coaching sits between &quot;an incident happened&quot; and &quot;a student is in ongoing counseling.&quot;
            It&apos;s owned by Certified Classified Staff / CHWs, with Admins limited to reviewing, revising, accepting, or
            rejecting the resulting reports.
          </p>

          <BlogImage src="/images/108.png" alt="Coaching session with BIRP documentation on a behavioral health platform" />

          <p className="mb-6">
            The defining feature of coaching documentation is continuity. When a coaching session starts from an existing
            incident, the student&apos;s name and ID auto-populate — eliminating manual re-entry and the transcription
            errors that come with it. Coaching details are then requested in the BIRP format:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Behavior — the situation that triggered the session</li>
            <li>Intervention — the specific actions the coach took</li>
            <li>Response — how the participant responded</li>
            <li>Plan — the agreed next steps</li>
          </ul>

          <BlogImage src="/images/109.png" alt="Coaching and counseling BIRP report and billing workflow" />

          <p className="mb-6">
            Once those four fields are complete, the system generates a billing code based on session type, duration, and
            provider role, aligned to CYBHI billing rules. The user can edit that code, but only with a documented reason
            which is logged for audit purposes. This &quot;editable, but explainable&quot; pattern shows up throughout CYBHI
            documentation: the system proposes a defensible default, and a human stays in the loop to catch the exceptions a
            rules engine can&apos;t anticipate.
          </p>
          <p className="mb-6">
            If a coaching session is interrupted, the draft is preserved. Clicking back into a draft returns the user to the
            exact point in the conversation where they left off a small detail that matters enormously to staff juggling
            incident reporting between class periods and duty assignments.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">Why the &quot;draft&quot; concept exists at all</h3>
          <p className="mb-6">
            Coaching often can&apos;t be finished in one sitting. A CHW might start documenting during a passing period and
            need to finish after the last bell. Two kinds of drafts reflect this reality: a pre-populated draft, when enough
            detail was captured during the initial incident report, and an empty draft, created automatically whenever the
            user indicates coaching occurred but doesn&apos;t provide details yet. Either way, nothing is lost, and nothing
            has to be re-typed from scratch.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">Counseling Sessions and Billing Codes</h2>
          <p className="mb-6">
            Counseling follows the same BIRP structure as coaching but is owned by Counselors licensed or certified
            professionals. Counselors can start a session from an existing incident (one they created or one assigned by the
            Admin) or open a brand-new incident report and move directly into counseling within the same conversation.
          </p>

          <BlogImage src="/images/110.png" alt="Counseling session reports and billing dashboard overview" />

          <p className="mb-4">Two things distinguish counseling from coaching in a CYBHI documentation system:</p>
          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li>
              <strong>Timing flexibility.</strong> Counseling-related details can be shared at any point in the conversation
              — they aren&apos;t restricted to starting only after the incident report is finished. This matters because real
              conversations with students don&apos;t unfold in a rigid sequence.
            </li>
            <li>
              <strong>Revision handling.</strong> If the Admin requests a revision, the Counselor can update the record
              either by resuming the same chat thread or entering updates manually, and if the underlying incident needs
              correcting too — the SOAP report regenerates alongside the BIRP report. The two documents stay in sync rather
              than drifting apart.
            </li>
          </ol>
          <p className="mb-6">
            As with coaching, billing codes are auto-generated from session data and can be edited with a mandatory reason.
            Only authorized, certified users can generate these codes, and approved reports are locked from further edits the
            same protective logic applied consistently across the platform.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
            Group, Class, and Independent Counseling Models
          </h2>
          <p className="mb-6">
            Not every counseling need fits a one-student, one-session model. A single incident might involve four students who
            need to process it together; a whole class might need a psychoeducation session after a shared event; or a group
            incident might require separate, individualized documentation per student even though the intervention happened
            together. CYBHI-aligned systems typically support three distinct patterns to handle this:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">Scenario</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">How Participants Are Added</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">Report Output</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">Billing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Group Counseling (incident-based)</td>
                  <td className="border border-gray-200 px-4 py-2">Selected directly from a real incident report — no QR code</td>
                  <td className="border border-gray-200 px-4 py-2">One consolidated Group BIRP Report</td>
                  <td className="border border-gray-200 px-4 py-2">One group billing code</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Class Counseling (mock incident-based)</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Students self-register by scanning a session-specific QR code and entering name, student ID, and class
                  </td>
                  <td className="border border-gray-200 px-4 py-2">One Class-Level BIRP Report</td>
                  <td className="border border-gray-200 px-4 py-2">One class billing code</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">
                    Independent Counseling (group session, individual records)
                  </td>
                  <td className="border border-gray-200 px-4 py-2">Selected from an incident, or optionally confirmed via QR</td>
                  <td className="border border-gray-200 px-4 py-2">Separate BIRP Report per student</td>
                  <td className="border border-gray-200 px-4 py-2">Individual billing code per student</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">Why QR-based self-registration matters</h3>
          <p className="mb-6">
            Class-level sessions in a grade-wide workshop after a difficult event, for example, don&apos;t map neatly to a
            formal incident with named participants. A QR code lets students confirm their own presence (name, student ID,
            class) without a staff member manually cross-referencing a roster mid-session. Every QR code is session-specific,
            expires when the session closes, and produces an audit-logged attendance record so the convenience of
            self-registration doesn&apos;t come at the cost of accountability. Duplicate entries are blocked, and a minimum
            participant threshold applies before a group session can proceed.
          </p>
          <p className="mb-6">
            The practical benefit: a Counselor running a 30-student classroom session doesn&apos;t have to manually enter 30
            sets of student information. Students do it themselves, in seconds, and the record is just as auditable as if a
            staff member had typed it in by hand.
          </p>

          <BlogImage src="/images/111.png" alt="Group class counseling session QR code registration workflow" />

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
            Admin Oversight: Review, Approval, and Revision
          </h2>
          <p className="mb-6">
            Every incident, coaching report, and counseling session eventually lands in front of an Admin and this is where
            compliance and financial accountability actually get enforced.
          </p>

          <p className="mb-4">Admins can:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Approve a report, which finalizes it and locks the associated billing code</li>
            <li>
              Reject a report, flagging it and notifying the originating user, with a required reason (e.g., &quot;Invalid
              billing code,&quot; &quot;Session duration mismatch&quot;)
            </li>
            <li>Request a revision, returning the report to the originator with specific notes on what needs correction</li>
          </ul>
          <p className="mb-6">
            Every one of these actions is logged not just the decision, but the reasoning behind it, and the timestamps of
            when a session was generated versus when it was billed and to which provider it was assigned. That level of detail
            is what turns a district&apos;s documentation into something that can survive a state or payer audit without
            scrambling.
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">
            Why revision requests loop back to the same conversation
          </h3>
          <p className="mb-6">
            A revision request isn&apos;t a form letter telling someone to &quot;fix the report.&quot; The system routes the
            user back into the original chat thread where the report was created, with the Admin&apos;s notes attached. This
            avoids the classic failure mode of revision workflows: a staff member re-creating a report from memory, introducing
            new inconsistencies in the process. Continuity of context reduces rework and keeps the corrected version tightly
            linked to the original documentation.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">User and Student Data Management</h2>
          <p className="mb-6">Admins are also responsible for the people and rosters behind every report.</p>
          <p className="mb-6">
            User management gives Admins a searchable, filterable list of all registered users filterable by role, account
            status (Activated / Deactivated / Pending), and NPI certification status. New accounts start in a Pending state
            and require explicit Admin approval before system access is activated. Admins can deactivate accounts, reset
            one-time security keys, and view a user&apos;s full activity profile incidents logged, sessions provided, hours
            delivered, and associated revenue all from one screen.
          </p>
          <p className="mb-6">
            Student management works through a secure, web-based admin portal. Student rosters are typically uploaded once per
            quarter via Excel file, with the Admin able to view, edit, or delete individual records afterward. If a student who
            isn&apos;t yet in the system is involved in an incident, the Admin can add them manually rather than waiting for
            the next quarterly upload. To protect that upload process, the system sends a secure, one-time link to the
            Admin&apos;s registered email valid for only 15 minutes and usable exactly once so roster uploads can&apos;t happen
            through a stale or intercepted link.
          </p>

          <BlogImage src="/images/112.png" alt="Secure student records and user management portal" />

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
            Reporting and Analytics: Turning Documentation Into Insight
          </h2>
          <p className="mb-6">
            Individual reports matter for compliance. Aggregated reports are what let a Behavioral Health Coordinator or
            district leader actually manage the program. A CYBHI-aligned platform typically rolls documentation up into several
            distinct reporting categories:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">Report Category</th>
                  <th className="border border-gray-200 px-4 py-2 text-left font-bold">What It Answers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Incident Reporting Metrics</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Where are incidents happening, how severe are they, and are response timelines being met?
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Coaching Metrics</td>
                  <td className="border border-gray-200 px-4 py-2">
                    How much coaching is being delivered, to whom, and how are attendance and duration trending?
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Counseling Metrics</td>
                  <td className="border border-gray-200 px-4 py-2">
                    What does caseload distribution look like, and are treatment plans progressing?
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Financial &amp; Billing Metrics</td>
                  <td className="border border-gray-200 px-4 py-2">
                    What&apos;s billable utilization, revenue, and claim denial rate by payer (Medi-Cal, private insurance,
                    district-funded)?
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">School-Level Operational Metrics</td>
                  <td className="border border-gray-200 px-4 py-2">
                    How does service penetration, wait time, and provider availability compare across sites?
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Outcomes &amp; Impact Metrics</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Are interventions actually improving student well-being over time?
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Staffing &amp; Performance Metrics</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Are caseloads sustainable, and is documentation timely and complete?
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">Compliance &amp; Audit-Ready Reports</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Can the district produce an exportable, audit-ready compliance packet on demand?
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 font-medium">System Health &amp; Monitoring</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Is the platform itself performing reliably, and are integrations (SIS, EHR, billing systems) healthy?
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">
            Why this range of reporting matters to different stakeholders
          </h3>
          <p className="mb-6">
            A Counselor mostly cares about their own caseload and upcoming sessions. A Behavioral Health Coordinator cares about
            school-level trends and outcome measures. A district leader cares about financial and compliance metrics that affect
            the whole program&apos;s sustainability. Because every metric traces back to the same underlying incident, coaching,
            and counseling records, these audiences aren&apos;t working from separate spreadsheets that need to be reconciled
            they&apos;re looking at different views of the same source of truth.
          </p>

          <BlogImage src="/images/113.png" alt="Reporting and analytics across counseling, documentation, and student support" />

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
            Security, Privacy, and Compliance by Design
          </h2>
          <p className="mb-6">
            Behavioral health data is among the most sensitive information a school system holds, which is why compliance
            can&apos;t be a feature bolted on afterward it has to shape the architecture itself. A CYBHI-aligned system is
            designed to be fully compliant with FERPA, HIPAA, and CYBHI requirements, with several concrete mechanisms:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Role-Based Access Control (RBAC) ensures users can only view or modify data appropriate to their role</li>
            <li>
              Multifactor authentication (MFA) is required for admin-level access, with biometric options (Face ID / Touch ID)
              available for convenient, secure day-to-day login
            </li>
            <li>
              One-time security keys, set during first login and updatable at any time, add a second layer of account protection
              beyond a password
            </li>
            <li>
              Encrypted, access-controlled data storage keeps incident, counseling, and user records secure at rest
            </li>
            <li>
              Comprehensive audit logging captures every submission, approval, rejection, revision, and administrative action
              including who did what and when
            </li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">
            Why &quot;compliant by design&quot; beats &quot;compliant on paper&quot;
          </h3>
          <p className="mb-6">
            Districts that bolt compliance onto a generic system after the fact usually discover the gaps during an audit at
            the worst possible time. Building RBAC, MFA, and audit logging into the core workflow, rather than as optional
            add-ons, means every report a Classified Staff member, CHW, or Counselor generates is already structured for
            compliance by the time it reaches the Admin&apos;s desk. That&apos;s the difference between a system a district
            can trust with Medi-Cal billing and one that merely stores files.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
            Practical Example: A Single Incident, Start to Finish
          </h2>

          <BlogImage src="/images/114.png" alt="Practical example of a single CYBHI incident start to finish" />

          <p className="mb-6">
            To make the workflow concrete, here&apos;s how a single behavioral incident might move through the system.
          </p>
          <p className="mb-6">
            <strong>Monday, 10:15 AM — Classified Staff.</strong> A campus supervisor witnesses a conflict between two students
            during the passing period. She opens the app, taps &quot;+&quot;, and describes what happened by voice. The system
            prompts her for date, time, location, and description, then generates a SOAP-format incident report. She confirms the
            student IDs for each participant and submits it; it&apos;s now marked &quot;Submitted&quot; and visible to the Admin.
          </p>
          <p className="mb-6">
            <strong>Monday, 11:00 AM — CHW.</strong> The Admin assigns a coaching follow-up to the CHW who works with one of the
            students involved. Because the session originates from the incident, the student&apos;s name and ID are already
            populated. The CHW documents the conversation in BIRP format: what triggered it, what strategies were used, how the
            student responded, and the follow-up plan — and the system proposes a billing code based on session length and her
            role. She accepts it and submits the coaching report.
          </p>
          <p className="mb-6">
            <strong>Monday, 2:30 PM — Admin.</strong> The Admin reviews the coaching report alongside the original incident.
            Everything checks out, so she approves it, locking the billing code and finalizing the record for reimbursement.
          </p>
          <p className="mb-6">
            <strong>Two weeks later — Counselor.</strong> The student continues to show signs of stress, so the Counselor opens
            the same underlying incident and starts a full counseling session, again in BIRP format, generating its own billing
            code and its own approval cycle.
          </p>
          <p className="mb-6">
            One incident. Three roles. Three linked but distinct records SOAP for the incident, BIRP for the coaching, BIRP again
            for the counseling each with its own billing code, its own audit trail, and its own approval, but never requiring
            anyone to re-type the student&apos;s name.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">
            Best Practices for Districts Rolling Out Behavioral Health Documentation
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Train by role, not by system. Classified Staff need to understand SOAP intake; CHWs and Counselors need to
              understand BIRP and billing code accuracy. Don&apos;t run a single generic training for everyone.
            </li>
            <li>
              Set expectations for revision turnaround. A revision request is only useful if it&apos;s addressed quickly, before
              memory of the session fades. Build a service-level expectation (e.g., 48 hours) into your program norms.
            </li>
            <li>
              Review reporting dashboards on a cadence, not just during audits. Waiting until a compliance review to look at
              documentation timeliness or billing denial rates means problems compound for months before anyone notices.
            </li>
            <li>
              Use the quarterly roster upload as a data hygiene checkpoint. Treat each upload as an opportunity to reconcile
              enrollment changes, not just add new students.
            </li>
            <li>
              Standardize what &quot;future-dated&quot; and &quot;mandatory field&quot; mean across your staff. The system
              enforces these rules technically, but staff still need to understand why — it prevents both accidental errors and,
              more importantly, protects the defensibility of every billed session.
            </li>
            <li>
              Treat the Admin role as a compliance function, not just an approval queue. The quality of your audit trail is only
              as good as the specificity of the reasons Admins log when they reject or request revisions.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 mb-4">Where Evolo AI Fits</h2>
          <p className="mb-6">
            Everything described in this guide SOAP-format incident reporting, BIRP-format coaching and counseling,
            CYBHI-aligned billing code generation, QR-based group and class session registration, role-based admin oversight,
            and a full reporting and analytics suite is what Evolo AI&apos;s Behavioral Incident &amp; Counseling Management
            platform is built to do.
          </p>
          <p className="mb-6">
            The reason this matters isn&apos;t that Evolo AI adds features on top of a generic form-builder. It&apos;s that the
            platform is structured around the same lifecycle school teams already live inside: an incident happens, someone
            documents it, someone intervenes, someone bills for it, and someone reviews it all without three separate tools and
            three separate re-entries of the same student&apos;s name. Voice or text intake through the Smart Incident Reporter,
            auto-populated coaching and counseling drafts, editable-but-explainable billing codes, and an Admin console that
            keeps every approval auditable are the mechanics that make Medi-Cal-eligible documentation sustainable for staff who
            are already stretched thin.
          </p>
          <p className="mb-6">
            If your district is trying to scale CYBHI billing without scaling paperwork, that&apos;s the specific problem Evolo
            AI is built to solve.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4 not-prose">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  type="button"
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 mb-4 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-blue-50 border-b border-blue-100 px-6 py-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 m-0">Conclusion</h2>
            </div>
            <div className="px-6 py-6 space-y-5">
              <p className="mb-0 text-gray-700 leading-relaxed">
                CYBHI created a real opportunity for California schools to fund behavioral health support that was previously
                unfunded or under-resourced. But that opportunity only converts into sustainable services when documentation is fast
                enough for busy staff, structured enough for compliance, and connected enough that no one is retyping the same
                student&apos;s name three times in one day.
              </p>
              <p className="mb-0 text-gray-700 leading-relaxed">
                The workflows in this guide — SOAP-format incident reporting, BIRP-format coaching and counseling, auto-generated
                and auditable billing codes, role-based oversight, and consolidated reporting — aren&apos;t abstract theory.
                They&apos;re the operational backbone that lets a Behavioral Health Coordinator answer &quot;how are we doing&quot;
                with data instead of guesswork, and lets a district trust that its Medi-Cal billing will hold up under audit.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5">
                <p className="mb-4 text-gray-700 leading-relaxed">
                  If your team is ready to see how this looks in practice for your schools, reach out to Evolo AI for a walkthrough of
                  the platform built around exactly this lifecycle — from incident to intervention.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-blue-700 transition-colors"
                >
                  Request a Walkthrough
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog18;
