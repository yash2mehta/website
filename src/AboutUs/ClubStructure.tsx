import React from 'react';
import ImagePlaceholder from '../assets/ImagePlaceholder.png';
import ClubStructureDiagram from '../assets/ClubStructureDiagram.png';
import './clubstructure.css'


const ClubStructure = () => {
    return (
        <div>
            {/* Header */}
            <div style={{ 
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
            </div>
            {/*  */}
            {/* Club Structure Diagram */}
            <div className='flex m-10 items-center justify-center'>
                <img src={ClubStructureDiagram}/>
            </div>

            {/* Roles and Names of Roles */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mx-10">
              <div className="p-4">
                <h2 className="text-2xl text-primary-300 font-semibold">President</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit faucibus magna, vel suscipit nisi feugiat id. Praesent congue malesuada erat, vitae convallis turpis faucibus at.</p>
              </div>
              <div className="p-4">
                <h2 className="text-2xl text-primary-300 font-semibold">Vice President</h2>
                <p>The Vice President is responsible for establishing and communicating the 
                  strategic direction. This includes managing and leading the team to ensure 
                  successful delivery of goals and objectives. You will provide expertise and 
                  guidance on operations projects and systems, while identifying and recommending 
                  new processes, technologies, systems, policies and measures to improve and 
                  streamline organizational processes. </p>
              </div>
              <div className="p-4">
              <h2 className="text-2xl text-primary-300 font-semibold">Secretary</h2>
                <p>The Secretary plays a critical role in ensuring the smooth operation of 
                  the club. They are responsible for maintaining accurate records of club 
                  meetings and events, coordinating club activities and events, managing 
                  the club's email inbox, handling the submission of key documents, and 
                  assisting other departments with ad-hoc administrative tasks. By carrying 
                  out these responsibilities, the Secretary helps to ensure that the club 
                  operates efficiently and effectively, and that all members are well informed 
                  and supported.</p>
              </div>
              <div className="p-4">
                <h2 className="text-2xl text-primary-300 font-semibold">Business Development Director</h2>
                <p>The Director of Business Development is responsible for maintaining relationships 
                  with existing stakeholders and identifying new business opportunities. They work 
                  closely with industry leaders and organizations to host educational seminars and 
                  workshops, prospect new strategic or event partners and sponsors as well.</p>
              </div>
              <div className="p-4">
                <h2 className="text-2xl text-primary-300 font-semibold">Treasurer</h2>
                <p>The Treasurer of the finance club plays a crucial role in the club's financial 
                  management. They oversee financial transactions and ensure compliance with relevant 
                  policies and regulations. They manage the club's budget, maintain financial records, 
                  and prepare accurate financial reports for internal and external stakeholders.</p>
              </div>
              <div className="p-4">
                <h2 className="text-2xl text-primary-300 font-semibold">Publicity Director</h2>
                <p>The Publicity Director is responsible for developing and executing marketing campaigns 
                  across various channels, including social media, email, and content marketing. They manage 
                  the club's social media accounts and coordinate with external partners, such as advertising 
                  agencies, to develop and execute paid marketing campaigns. They craft and distribute press 
                  releases and other marketing collateral, such as illustrations, videos, and posters.</p>
              </div>
            </div>
        </div>
    )

}

export default ClubStructure;