import React from 'react';

const STATS = [
  { figure: '3M+', label: 'Potential Workers' },
  { figure: '3K+', label: 'Adult Schools' },
  { figure: '~5M', label: 'Annual Job Openings' },
];

const fullBleedStyle = {
  width: '100vw',
  marginLeft: 'calc(50% - 50vw)',
  marginRight: 'calc(50% - 50vw)',
};

const PotentialWorkers = () => {
  return (
    <section style={fullBleedStyle} className="bg-[#eef0ff] py-16 font-[Inter,sans-serif]">
      <div className="w-full max-w-[2000px] mx-auto flex flex-col items-center gap-12 px-4">
        <h2 className="text-[36px] font-bold text-center w-full bg-gradient-to-r from-[#0f1b66] to-[#5327ff] bg-clip-text text-transparent">
  95% Of Employers Are Missing Out On:
</h2>


        <div className="flex flex-wrap justify-center gap-60 w-full">
          {STATS.map(({ figure, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span className="text-[48px] font-bold text-[#6b3dff]">{figure}</span>
              <span className="text-[18px] font-medium text-[#1c1d21]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PotentialWorkers;