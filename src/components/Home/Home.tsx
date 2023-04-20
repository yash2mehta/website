import React from 'react';
import './Home.css'

import logo_light from "../../assets/logo_light.png"

const Home = () => {
    return(
        <div className="min-h-10000">
            {/* Banner Red */}
            <div className="bg-red-bg flex flex-col items-center justify-center h-fit gap-2.5 p-8">
                <img className="object-cover" style={{height:'20vw'}} src={logo_light}/>
                <h1 className="text- text-white text-center align-middle">
                Established in 2015, SUTD MarketWatch Club is the only student-led community at SUTD, exclusively designed for students interested in finance and investments.
                <br></br><br></br>
                At SUTD MarketWatch Club, our mission is to empower students with financial and investment knowledge to achieve financial literacy and independence, while providing a supportive learning environment that nurtures personal and professional growth.
                </h1>
            </div>

            {/* Club Advisor 1 */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-20 mx-10">
                <div className="flex flex-1 items-center">
                    <div className="mx-10">
                        <h1 className="text-4xl text-primary-300 font-bold my-5">Name - Role</h1>
                        <h2 className="text-base">
                        The Vice President is responsible for establishing and communicating 
                        the strategic direction. This includes managing and leading the team to 
                        ensure successful delivery of goals and objectives. You will provide 
                        expertise and guidance on operations projects and systems, while identifying 
                        and recommending new processes, technologies, systems, policies and measures 
                        to improve and streamline organizational processes. 
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
                        <h1 className="text-4xl text-primary-300 font-bold my-5">Name - Role</h1>
                        <h2 className="text-base">
                        The President is responsible for establishing and communicating 
                        the strategic direction. This includes managing and leading the team to 
                        ensure successful delivery of goals and objectives. You will provide 
                        expertise and guidance on operations projects and systems, while identifying 
                        and recommending new processes, technologies, systems, policies and measures 
                        to improve and streamline organizational processes. 
                        </h2>
                    </div>
                </div>
                {/* <div className="w-2/3 mx-auto">
                    <img src={ImagePlaceholder2}/>
                </div> */}
            </div>

        </div>
    )
}

export default Home;