import RedBanner from "../components/RedBanner";

const ClubStructure = () => {
  return (
    <div className="mb-10">
      {/* Header */}
      {/* <div style={{ 
            display: 'flex',
            backgroundImage: `url(${ImagePlaceholder})`,
            backgroundRepeat: 'no-repeat',
            width:'100%',
            height:'750px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}>
                <h1 className='text-5xl font-bold'>Club Structure</h1>
            </div> */}
      <RedBanner bannerText="Mission | Vision"></RedBanner>

      {/* Mission and Vision */}
      <div className="body">
        <div className="text-3xl text-primary-500 font-semibold text-center">
          Empowering Future Finance Leaders
        </div>
        <div className="p-4">
          <h2 className="text-2xl text-black font-semibold mt-10">Our Mission</h2>
          <p className="mt-5 text-lg">
            At SUTD MarketWatch Club, our mission is to empower students with financial and investment knowledge to achieve financial literacy and independence, while providing a supportive learning environment that nurtures personal and professional growth.
          </p>
        </div>
        <div className="p-4">
          <h2 className="text-2xl text-black font-semibold mt-10">Our Vision</h2>
          <p className="mt-5 text-lg">
          To become the preeminent finance club in Southeast Asia, providing top-notch financial education and equipping talented students with the practical skills and knowledge needed for a career in the world of finance.
          </p>
        </div>
        {/* Blank Space */}
        {/* <div className="h-14"></div> */}
      </div>
    </div>
  );
};

export default ClubStructure;
