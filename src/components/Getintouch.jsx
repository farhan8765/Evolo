import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const GetinTouch = () => {
  const portalId = process.env.REACT_APP_HUBSPOT_PORTAL_ID;
  const formId = process.env.REACT_APP_HUBSPOT_GET_IN_TOUCH_FORM_ID;
  const hubspotRegion = process.env.REACT_APP_HUBSPOT_REGION || 'na2';
  const baseFormContainerId = 'hubspot-get-in-touch';
  const formRef = useRef(null);
  const submissionTimerRef = useRef(null);
  const [formRefreshKey, setFormRefreshKey] = useState(0);
  const currentFormContainerId = useMemo(
    () => `${baseFormContainerId}-${formRefreshKey}`,
    [baseFormContainerId, formRefreshKey],
  );
  const [hubspotStatus, setHubspotStatus] = useState(
    portalId && formId ? 'idle' : 'missing-config',
  );
  const [showSubmissionPrompt, setShowSubmissionPrompt] = useState(false);
  const hidePromptAndResetForm = useCallback(() => {
    setShowSubmissionPrompt(false);
    setHubspotStatus('loading');
    setFormRefreshKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (!formRef.current || !portalId || !formId) {
      console.warn('HubSpot form missing config:', { portalId, formId, region: hubspotRegion });
      return;
    }

    const createHubspotForm = () => {
      if (!window.hbspt?.forms || !formRef.current) {
        setHubspotStatus('error');
        return;
      }

      formRef.current.innerHTML = '';

      window.hbspt.forms.create({
        region: hubspotRegion,
        portalId,
        formId,
        target: `#${currentFormContainerId}`,
        onFormReady: () => {
          console.log('HubSpot form ready', { portalId, formId, region: hubspotRegion });
          setHubspotStatus('ready');
        },
        onFormSubmit: (form) => {
          console.log('HubSpot form submitted', form);
          setHubspotStatus('submitted');
        },
        onFormSubmitted: (form) => {
          console.log('HubSpot form submission confirmed', form);
        },
      });
    };

    const handleScriptLoad = () => {
      setHubspotStatus('loading');
      createHubspotForm();
    };

    const handleScriptError = () => {
      setHubspotStatus('error');
    };

    if (window.hbspt?.forms) {
      handleScriptLoad();
      return undefined;
    }

    let script = document.querySelector(
      'script[src="https://js.hsforms.net/forms/embed/v2.js"]',
    );

    if (!script) {
      script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    script.addEventListener('load', handleScriptLoad);
    script.addEventListener('error', handleScriptError);
    setHubspotStatus('loading');

    return () => {
      script.removeEventListener('load', handleScriptLoad);
      script.removeEventListener('error', handleScriptError);
    };
  }, [currentFormContainerId, formId, formRefreshKey, hubspotRegion, portalId]);

  useEffect(() => {
    if (hubspotStatus !== 'submitted') {
      return undefined;
    }

    setShowSubmissionPrompt(true);
    if (submissionTimerRef.current) {
      clearTimeout(submissionTimerRef.current);
    }
    submissionTimerRef.current = window.setTimeout(() => {
      hidePromptAndResetForm();
      submissionTimerRef.current = null;
    }, 4500);

    return () => {
      if (submissionTimerRef.current) {
        clearTimeout(submissionTimerRef.current);
        submissionTimerRef.current = null;
      }
    };
  }, [hidePromptAndResetForm, hubspotStatus]);

  const handlePromptClose = useCallback(() => {
    if (submissionTimerRef.current) {
      clearTimeout(submissionTimerRef.current);
      submissionTimerRef.current = null;
    }
    hidePromptAndResetForm();
  }, [hidePromptAndResetForm]);

  return (
    <div className="relative w-full bg-white py-16 px-6 font-['Raleway']">
      {showSubmissionPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.3a1 1 0 0 1-1.428.008L3.29 9.2A1 1 0 0 1 4.71 7.78l4.034 4.033 6.486-6.573a1 1 0 0 1 1.474.05z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">Form submitted</h3>
            <p className="mt-2 text-sm text-slate-500">
              Thanks for sharing your details. Our team has your submission and will reach out shortly.
            </p>
            <button
              type="button"
              onClick={handlePromptClose}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content with Image */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Get started for Free and see how quickly Adults@ Pro can help your business, large or small.
          </p>
          <div className="mb-8">
            <img
              src="/images/evoloo.png"
              alt="Evolo"
              className="w-[100%] mb-6"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8">
          <div className="space-y-6">
            <p className="text-gray-600">
              {/* The contact form below is powered by your HubSpot marketing
              workspace, so submissions flow directly into your CRM and
              automation. */}
            </p>

            <div
              key={currentFormContainerId}
              id={currentFormContainerId}
              ref={formRef}
              className="min-h-[300px]"
            />

            <div className="text-sm text-gray-500" aria-live="polite">
              {hubspotStatus === 'submitted' ? (
                <span className="sr-only">Form submitted successfully.</span>
              ) : (
                <>
                  {hubspotStatus === 'missing-config' && (
                    <span className="text-red-600">
                      Missing HubSpot configuration. Add
                      {' '}
                      <code>REACT_APP_HUBSPOT_PORTAL_ID</code>
                      {' '}
                      and
                      {' '}
                      <code>REACT_APP_HUBSPOT_GET_IN_TOUCH_FORM_ID</code>
                      {' '}
                      (plus optional
                      {' '}
                      <code>REACT_APP_HUBSPOT_REGION</code>
                      ) to your
                      {' '}
                      <code>.env</code>
                      {' '}
                      file.
                    </span>
                  )}

                  {hubspotStatus === 'loading' && 'Loading secure HubSpot form…'}

                  {hubspotStatus === 'ready' && 'All set! Fill the form to reach us.'}

                  {hubspotStatus === 'error' && (
                    <span className="text-red-600">
                      Couldn’t load the HubSpot form. Please refresh the page or verify the form ID.
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;
