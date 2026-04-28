const CYBHIhero = () => {
  const streamPlayerUrl =
    "https://iframe.videodelivery.net/e806d111d4daa4ad92211e32d0554ee6?letterboxColor=ffffff";

  return (
    <section className="px-4 py-8 sm:py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center xl:max-w-6xl">
        <h1 className="m-0 w-full max-w-[850px] bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-center font-['Raleway'] text-[28px] font-bold leading-[110%] tracking-[0.5%] text-transparent sm:text-[40px] sm:leading-[100%] md:text-[48px]">
          CYBHI Behavioral Incident & Counseling Management App
        </h1>

        <p className="mt-4 w-full max-w-[646px] text-center font-['Raleway'] text-[16px] font-normal leading-[24px] tracking-[0.5%] text-[#767A87] sm:text-[17px] sm:leading-[26px] md:text-[18px] md:leading-[28px]">
          AI-Powered CYBHI Compliant. Built for California School Behavioral
          Health.
        </p>

        <div className="relative mt-8 aspect-video w-full max-w-4xl overflow-hidden rounded-[22px] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] outline-none">
          <iframe
            src={streamPlayerUrl}
            title="CYBHI Behavioral Incident and Counseling Management App video"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
            loading="lazy"
            className="absolute -inset-0.5 block h-[calc(100%+4px)] w-[calc(100%+4px)] border-0 bg-white outline-none"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default CYBHIhero;
