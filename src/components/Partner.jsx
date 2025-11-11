import React from 'react';

const heroCopy = {
  tagline: 'Tagline',
  title: 'AdultED Pro Presents Evolo AI: Your Partner in Adult Education Success',
  description:
    'We proudly present Evolo AI, the app that empowers students to succeed while helping schools connect with employers. Together, we can make education more effective and impactful.',
};

const FEATURE_SECTIONS = [
  {
    id: 1,
    image: '/images/partner-mobile-1.png',
    rotate: 8,
    align: 'right',
  },
  {
    id: 2,
    image: '/images/partner-mobile-2.png',
    rotate: -10,
    align: 'left',
  },
  {
    id: 3,
    image: '/images/partner-mobile-3.png',
    rotate: 9,
    align: 'right',
  },
  {
    id: 4,
    image: '/images/partner-mobile-4.png',
    rotate: -12,
    align: 'left',
  },
];

const SectionCard = ({ image, rotate, align }) => {
  const isImageLeft = align === 'left';

  const content = (
    <div className="flex flex-col gap-3 text-white max-w-lg">
      <span className="uppercase tracking-wide text-sm text-white/80">Tagline</span>
      <h3 className="text-3xl font-semibold">Medium length section heading goes here</h3>
      <p className="text-white/80 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
        elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
        commodo diam libero vitae erat.
      </p>
      <button
        type="button"
        className="mt-4 inline-flex w-max items-center rounded-full bg-white/15 px-6 py-2 text-white text-sm font-semibold backdrop-blur transition hover:bg-white/30"
      >
        Get Started
      </button>
    </div>
  );

  const phone = (
    <div className="flex w-full justify-center lg:w-5/12">
      <div
        className="relative h-[320px] w-[180px] rounded-[42px] bg-black/5 shadow-2xl ring-8 ring-black/5"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <img
          src={image}
          alt="Evolo AI mobile preview"
          className="absolute inset-0 h-full w-full rounded-[36px] object-cover"
        />
      </div>
    </div>
  );

  return (
    <div className="flex w-full flex-col gap-10 rounded-[36px] bg-[#6128ff] px-10 py-12 shadow-[0_30px_60px_rgba(20,0,80,0.25)] lg:flex-row lg:items-center lg:justify-between">
      {isImageLeft ? phone : content}
      {isImageLeft ? content : phone}
    </div>
  );
};

const Partner = () => {
  return (
    <section className="w-full bg-[linear-gradient(180deg,#faf8ff_0%,#f0eaff_100%)] py-20 font-[Inter,sans-serif]">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 text-center">
        <div className="flex flex-col gap-3">
          <span className="uppercase text-sm tracking-wide text-[#6b3dff]">{heroCopy.tagline}</span>
          <h2 className="text-4xl font-bold leading-tight text-[#0f1b66]">{heroCopy.title}</h2>
          <p className="text-lg text-[#3c3f4c]">{heroCopy.description}</p>
        </div>

        <div className="flex flex-col gap-10">
          {FEATURE_SECTIONS.map((section) => (
            <SectionCard key={section.id} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
