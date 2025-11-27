import React, { useEffect, useRef, useState } from "react";

const InsForm = () => {
  const portalId = process.env.REACT_APP_HUBSPOT_PORTAL_ID;
  const formId = process.env.REACT_APP_HUBSPOT_INSIGHTS_FORM_ID;
  const hubspotRegion = process.env.REACT_APP_HUBSPOT_REGION || "na1";
  const formContainerId = "hubspot-insights-form";
  const formRef = useRef(null);
  const [hubspotStatus, setHubspotStatus] = useState(
    portalId && formId ? "idle" : "missing-config",
  );

  useEffect(() => {
    if (!formRef.current || !portalId || !formId) {
      return;
    }

    const createHubspotForm = () => {
      if (!window.hbspt?.forms || !formRef.current) {
        setHubspotStatus("error");
        return;
      }

      formRef.current.innerHTML = "";

      window.hbspt.forms.create({
        region: hubspotRegion,
        portalId,
        formId,
        target: `#${formContainerId}`,
        onFormReady: () => setHubspotStatus("ready"),
        onFormSubmit: () => setHubspotStatus("submitted"),
      });
    };

    const handleScriptLoad = () => {
      setHubspotStatus("loading");
      createHubspotForm();
    };

    const handleScriptError = () => setHubspotStatus("error");

    if (window.hbspt?.forms) {
      handleScriptLoad();
      return undefined;
    }

    let script = document.querySelector(
      'script[src="https://js.hsforms.net/forms/embed/v2.js"]',
    );

    if (!script) {
      script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    script.addEventListener("load", handleScriptLoad);
    script.addEventListener("error", handleScriptError);
    setHubspotStatus("loading");

    return () => {
      script.removeEventListener("load", handleScriptLoad);
      script.removeEventListener("error", handleScriptError);
    };
  }, [formContainerId, formId, hubspotRegion, portalId]);

  return (
    <section className="bg-white px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 rounded-[32px] bg-white p-8 md:flex-row md:items-start md:gap-16 md:p-14">

        {/* LEFT SECTION */}
        <div className="flex flex-col gap-8 md:w-2/5">
          <div>
            <h2 className="text-4xl font-bold text-[#0f0f2d]">Get in Touch</h2>
            <p className="mt-4 text-base leading-relaxed text-[#6b6f82]">
              Get started for Free and see how quickly AdultEd Pro can help your business,
              large or small.
            </p>
          </div>

          {/* IMAGE CARD EXACTLY LIKE SCREENSHOT */}
          <div className="flex items-center justify-center overflow-hidden">
            <img
              src="/images/evoloo.png"
              alt="Evolo AI dashboard preview"
              className="w-full "
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:w-3/5 md:border-l md:border-[#eceffe] md:pl-10">
          {hubspotStatus === "submitted" ? (
            <div className="flex flex-col gap-4 rounded-[28px] border border-emerald-100 bg-[#f0fff6] p-7 shadow-sm">
              <p className="text-2xl font-semibold text-[#0f0f2d]">
                Thanks for submitting the form.
              </p>
              <div className="flex items-start gap-3 rounded-2xl bg-white/70 p-4">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-base text-[#0f0f2d]">
                  We’ve received your details and our team will reach out with the next steps shortly.
                </p>
              </div>
            </div>
          ) : (
            <div className="min-h-[360px]" id={formContainerId} ref={formRef} />
          )}

          {hubspotStatus !== "submitted" && (
            <div className="mt-6 text-sm text-[#6b6f82]" aria-live="polite">
              {hubspotStatus === "missing-config" && (
                <span className="text-red-600">
                  Missing HubSpot configuration. Add
                  {" "}
                  <code>REACT_APP_HUBSPOT_PORTAL_ID</code>
                {" "}
                and
                {" "}
                <code>REACT_APP_HUBSPOT_INSIGHTS_FORM_ID</code>
                {" "}
                (plus optional
                {" "}
                <code>REACT_APP_HUBSPOT_REGION</code>
                ) to your
                {" "}
                <code>.env</code>
                {" "}
                file.
              </span>
            )}
              {hubspotStatus === "loading" && "Loading secure HubSpot form…"}

              {hubspotStatus === "ready" && "All set! Fill the form to reach us."}

              {hubspotStatus === "error" && (
                <span className="text-red-600">
                  Couldn’t load the HubSpot form. Please refresh the page or verify the form ID.
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InsForm;
