import React from "react";

import ImagePlaceholder2 from "../assets/ImagePlaceholder2.png";
import ProfDouglasImage from "../assets/Prof Douglas.jpeg";
import Robert from "../assets/Robert Wijaya.jpeg";

const ClubAdvisors = () => {
  return (
    <div className="min-h-10000">
      {/* Banner Red */}
      <div
        className="bg-primary-300 flex items-center justify-center"
        style={{ height: 150 }}
      >
        <h1 className="text-3xl text-white font-bold text-center align-middle">
          Club Advisors
        </h1>
      </div>

      {/* Club Advisor 1 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-20 mx-10">
        <div className="w-2/3 mx-auto">
          <img src={ProfDouglasImage} />
        </div>
        <div className="flex flex-1 items-center">
          <div className="mx-10">
            <h1 className="text-4xl text-primary-300 font-bold my-5">
              Dr. Douglas Streeter Rolph
            </h1>
            <h2 className="text-base">
              Dr. Douglas Streeter Rolph is a Senior Lecturer of finance in the
              Engineering Systems and Design Pillar (ESD) at Singapore
              University of Technology and Design (SUTD). Prior to joining SUTD,
              he was the founding Academic Director of the Nanyang Professional
              MBA programme and Senior Lecturer of Banking and Finance at
              Nanyang Business School, Nanyang Technological University (NTU).
              He has taught financial risk management and equity valuation to
              graduate students and investments to undergraduates. In 2015, he
              received the M.Sc. Financial Engineering Teacher of the Year award
              at NTU. Dr. Rolph has published research on modelling credit risk
              in Journal of Derivatives. His current research focuses on fintech
              ecosystems, financial inclusion, and the role of innovation in
              financial institutions. He talks about fintech at industry and
              international events. In 2016, he served on the Keynote Panel at
              the Thomson Reuters’ ASEAN Regulatory Summit. He has been recently
              interviewed by China Daily, The Business Times, Thomson Reuters,
              The Edge (Singapore) and Inc. (Southeast Asia), and has written
              for The Business Times (Singapore). He is also an advisor at Soho
              Capital, LLC. Previously, he was an Assistant Professor at City
              University of Hong Kong and an economist at the Federal Reserve
              Bank of Kansas City. He earned a Ph.D. in Finance from the
              University of Washington, Seattle in 2003.
            </h2>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex border-b-8 border-primary-200 w-1/5 mx-auto"></div>

      {/* Club Advisor 2 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mx-10 my-20">
        <div className="flex flex-1 items-center">
          <div className="mx-10">
            <h1 className="text-4xl text-primary-300 font-bold my-5">
              Robert Wijaya
            </h1>
            <h2 className="text-base">
              Robert graduated from Nanyang Technological University with a
              Bachelor’s degree in Materials Engineering, First Class Honours.
              His project management career started in 2016 after obtaining a
              Project Management Professional (PMP) certification from the
              Project Management Institute. Before joining SUTD, he was a Senior
              Project Manager in a multi-disciplinary research centre based at
              Campus for Research Excellence And Technological Enterprise
              (CREATE), Singapore. Besides coordinating the programme
              management, he developed strategic planning, drove business
              development initiatives and oversaw the programme’s budget. He
              enjoys photography, sports and giving back to the communities
              through volunteering in his free time.
            </h2>
          </div>
        </div>
        <div className="w-2/3 mx-auto">
          <img src={Robert} />
        </div>
      </div>
    </div>
  );
};

export default ClubAdvisors;
