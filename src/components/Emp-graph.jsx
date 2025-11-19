import React from 'react';

const EmpGraph = () => {
  const categories = [
    // Row 1 - Top (1 icon)
    { name: 'Physical Therapists', icon: 'images/ic1.svg', row: 1, position: 'center' },
    
    // Row 2 - (3 icons)
    { name: 'Information Technology', icon: 'images/ic9.svg', row: 2, position: 'left' },
    { name: 'Pharmacy Techs', icon: 'images/ic2.svg', row: 2, position: 'center' },
    { name: 'Service', icon: 'images/ic5.svg', row: 2, position: 'right' },
    
    // Row 3 - (3 icons)
    { name: 'Retail and Wholesale', icon: 'images/ic8.svg', row: 3, position: 'left' },
    { name: 'Healthcare', icon: 'images/ic3.svg', row: 3, position: 'center' },
    { name: 'Medical Billing, Coding,\nand Transcription', icon: 'images/ic4.svg', row: 3, position: 'right' },
    
    // Row 4 - Bottom (2 icons + logo in center)
    { name: 'Accounting', icon: 'images/ic6.svg', row: 4, position: 'left' },
    { name: 'Manufacturing', icon: 'images/ic7.svg', row: 4, position: 'right' }
  ];

  const getRowPosition = (row, position) => {
    const rowPositions = {
      1: { center: { left: '50%', top: '8%' } },
      2: { 
        left: { left: '20%', top: '30%' },
        center: { left: '50%', top: '24%' },
        right: { left: '80%', top: '30%' }
      },
      3: { 
        left: { left: '20%', top: '50%' },
        center: { left: '50%', top: '52%' },
        right: { left: '80%', top: '50%' }
      },
      4: { 
        left: { left: '25%', top: '78%' },
        right: { left: '75%', top: '78%' }
      }
    };
    
    return rowPositions[row][position];
  };

  return (
    <div className="min-h-screen bg-[#FBFCFD] flex items-center justify-center py-8">
      <div className="max-w-7xl w-full px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p
            className="text-[16px] font-semibold text-black mb-3 tracking-wide animate-hero-reveal"
            style={{ animationDelay: "0.05s" }}
          >
            Tagline
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#000000] to-[#2B1BDD] bg-clip-text text-transparent animate-hero-reveal"
            style={{ animationDelay: "0.15s" }}
          >
            Evolo AI Powered by AdultED Pro
          </h1>
          <p
            className="text-gray-600 text-sm animate-hero-reveal"
            style={{ animationDelay: "0.25s" }}
          >
            We help source coveted talent in the following areas:
          </p>
        </div>

        {/* Graph Section */}
        <div className="relative w-full max-w-5xl mx-auto" style={{ height: '550px' }}>
          {/* Semi-circular Background with Concentric Circles */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2" style={{ width: '1100px', height: '700px', overflow: 'hidden' }}>
            <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMax meet">
              {/* Concentric semi-circles */}
              <path d="M 50 700 A 650 650 0 0 1 1350 700" fill="none" stroke="#E5E7EB" strokeWidth="1.5" />
              <path d="M 150 700 A 550 550 0 0 1 1250 700" fill="none" stroke="#E5E7EB" strokeWidth="1.5" />
              <path d="M 250 700 A 450 450 0 0 1 1150 700" fill="none" stroke="#E5E7EB" strokeWidth="1.5" />
              <path d="M 350 700 A 350 350 0 0 1 1050 700" fill="none" stroke="#E5E7EB" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Category Icons positioned in rows */}
          <div className="relative w-full h-full">
            {categories.map((category, index) => (
              <div
                key={index}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 animate-hero-reveal"
                style={{
                  ...getRowPosition(category.row, category.position),
                  animationDelay: `${0.35 + index * 0.05}s`,
                }}
              >
                <div className="w-16 h-16 flex items-center justify-center transition-all ">
                  <img 
                    src={category.icon} 
                    alt={category.name}
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <p className="text-xs font-semibold text-gray-800 text-center max-w-[130px] leading-tight whitespace-pre-line">
                  {category.name}
                </p>
              </div>
            ))}
          </div>

          {/* Center Logo at Bottom (Row 4 Center) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 z-30 animate-hero-reveal"
            style={{ top: '78%', transform: 'translate(-50%, -50%)', animationDelay: '0.7s' }}
          >
            <div className="p-5">
              <img 
                src="images/evolologos.png" 
                alt="Evolo AI Logo" 
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpGraph;
