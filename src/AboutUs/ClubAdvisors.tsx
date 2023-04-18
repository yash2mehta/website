import React from 'react';

import ImagePlaceholder2 from "../assets/ImagePlaceholder2.png"

const ClubAdvisors = () => {
    return(
        <div className="min-h-10000">
            {/* Banner Red */}
            <div className="bg-primary-200 flex items-center justify-center" style={{height:150}}>
                <h1 className="text-6xl text-white font-bold text-center align-middle">
                    Club Advisors
                </h1>
            </div>

            {/* Club Advisor 1 */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-20 mx-10">
                <div className="w-2/3 mx-auto">
                    <img src={ImagePlaceholder2}/>
                </div>
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
                <div className="w-2/3 mx-auto">
                    <img src={ImagePlaceholder2}/>
                </div>
            </div>

        </div>
    )
}

export default ClubAdvisors;