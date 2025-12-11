import React from 'react'
import Homehero from '../components/Homehero'
import HomePlatform from '../components/HomePlatform'
import HomeWho from '../components/HomeWho'
import ConnectStudent from '../components/ConnectStudent'
import Aboutstay from '../components/Aboutstay'
import NewVideo from '../components/NewVideo'
import Homecardsdetail from '../components/Homecardsdetail'

const Mainhome = () => {
  return (
    <>
      {/* Meta tags for SEO */}
      <head>
        <title>Evolo AI – K-12 & Adult Education Solutions</title>
        <meta name="description" content="Empowering K-12 and adult education with AI-driven student support, career connections, and streamlined operations." />
        <link rel="canonical" href="https://goevolo.com/" />
        <meta property="og:title" content="Evolo AI – K-12 & Adult Education Solutions" />
        <meta property="og:description" content="Empowering K-12 and adult education with AI-driven student support, career connections, and streamlined operations." />
        <meta property="og:url" content="https://goevolo.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Evolo AI – K-12 & Adult Education Solutions" />
        <meta name="twitter:description" content="Empowering K-12 and adult education with AI-driven student support, career connections, and streamlined operations." />
        <meta name="twitter:url" content="https://goevolo.com/" />
      </head>

      <div className="w-full overflow-x-hidden">
        <Homehero />
        <NewVideo />
        <HomeWho />
        <HomePlatform />
        <ConnectStudent />
        <Homecardsdetail />
        <Aboutstay />
      </div>
    </>
  );
};

export default Mainhome