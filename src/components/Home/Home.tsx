import React from 'react';
import './Home.css'

import logo_light from "../../assets/logo_light.png"
import CareerDevelopment from "../../assets/Career Development.jpg"
import StrongNetwork from "../../assets/MarketWatch Alumni Network.jpg"

const Home = () => {
    return(
        <div className="min-h-10000">
            {/* Banner Red */}
            <div className="bg-red-bg flex flex-col items-center justify-center h-fit gap-2.5 p-8">
                <img className="object-cover w-full" style={{height:'20vw'}} src={logo_light}/>
                <h1 className="text-base text-white text-center align-middle">
                Established in 2015, SUTD MarketWatch Club is the only student-led community at SUTD, exclusively designed for students interested in finance and investments.
                <br></br><br></br>
                At SUTD MarketWatch Club, our mission is to empower students with financial and investment knowledge to achieve financial literacy and independence, while providing a supportive learning environment that nurtures personal and professional growth.
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-center mb-5">
                <div className="flex flex-1 flex-col items-center">
                    <div className="mx-10">
                        <h1 className="text-4xl text-primary-300 font-bold my-5">Our Activities</h1>
                        <h2 className="text-base text-black">
                        At SUTD MarketWatch Club, we offer a wide range of activities, including workshops, guest lectures, panel sessions, networking events and case competitions. Ultimately, we provide a welcoming space to learn, grow, and connect with others 😊
                        </h2>
                    </div>
                    <button
                    style={{
                        backgroundColor: "#E55C56",
                        color: "#FFFFFF",
                        padding: "10px",
                        fontSize: "100%",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "30px",
                        marginTop: "20px",
                    }}
                    >
                        Learn more
                    </button>
                </div>
                <div className="flex flex-1 flex-col items-center">
                    <div className="mx-10">
                        <h1 className="text-4xl text-primary-300 font-bold my-5">Industry Collaboration</h1>
                        <h2 className="text-base text-black">
                        Our club is committed to collaborating with industry leaders to create opportunities for our members to gain real-world experience and build their professional network. By partnering with us, you can help shape the future of finance and make a meaningful impact in developing the next generation of finance professionals. Contact us to explore ways of collaborating!
                        </h2>
                    </div>
                    <button
                    style={{
                        backgroundColor: "#E55C56",
                        color: "#FFFFFF",
                        padding: "10px",
                        fontSize: "100%",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "30px",
                        marginTop: "20px",
                    }}
                    >
                        Learn more
                    </button>
                </div>
                <div className="flex flex-1 flex-col items-center">
                    <div className="mx-10">
                        <h1 className="text-4xl text-primary-300 font-bold my-5">Industry Research</h1>
                        <h2 className="text-base text-black">
                        Our research analysts and members conduct investment research, on fundamental analysis and technical analysis. They share these insights through published reports and pitch their ideas to industry leaders.
                        </h2>
                    </div>
                    <button
                    style={{
                        backgroundColor: "#E55C56",
                        color: "#FFFFFF",
                        padding: "10px",
                        fontSize: "100%",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "30px",
                        marginTop: "20px",
                    }}
                    >
                        Learn more
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 text-center">
                <div className="flex flex-1 flex-col items-center my-5">
                    <img src={CareerDevelopment}/>
                    <div className="mx-10">
                        <h1 className="text-4xl text-primary-300 font-bold my-5">Career Development</h1>
                        <h2 className="text-base text-black">
                        We recognize the potential of our talented engineering students and aim to provide a structured training program, along with guidance of industry professionals, to develop career-oriented skills in the field of finance. This program emphasizes on inculcating multi-disciplinary skills and will cover topics like Equity Research, Portfolio Management, Macroeconomics, Financial Technology, Quantitative Finance. 
                        </h2>
                    </div>
                </div>
                <div className="flex flex-1 flex-col items-center my-5">
                    <img src={StrongNetwork}/>
                    <div className="mx-10">
                        <h1 className="text-4xl text-primary-300 font-bold my-5">Strong Network</h1>
                        <h2 className="text-base text-black">
                        Our extensive alumni network provides a platform for members to connect with industry professionals, gain invaluable insights into the working world, and access a wide range of career opportunities. We take pride in the achievements of our alumni and welcome them back as valuable mentors to our current members. 
                        </h2>
                    </div>
                </div>
            </div>

            {/* Banner Red */}
            <div className="bg-red-bg flex flex-col items-center justify-center h-fit gap-2.5 p-8">
                <h1 className="text-4xl text-white text-center align-middle">
                “An investment in knowledge pays the best interest” - Benjamin Franklin
                </h1>
            </div>

            <div className="bg-light-red grid grid-cols-1 gap-4 md:grid-cols-2 text-center py-5">
                <div className="flex flex-1 flex-col items-center">
                    <div className="mx-10">
                        <h1 className="text-2xl text-primary-300 font-bold my-3">Join MarketWatch as a Member</h1>
                        <h2 className="text-sm text-black">
                        We invite all SUTD students only to join us as a member. By doing so, you will obtain access to exclusive events, educational resources, networking opportunities, industry visits and many more activities, which are exclusively for the members. You will also receive priority in attending any public events that we host!
                        </h2>
                    </div>
                    <button
                    style={{
                        backgroundColor: "#E55C56",
                        color: "#FFFFFF",
                        padding: "2px 10px",
                        fontSize: "80%",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "30px",
                        marginTop: "20px",
                    }}
                    >
                        Learn more
                    </button>
                </div>
                <div className="flex flex-1 flex-col items-center">
                    <div className="mx-10">
                        <h1 className="text-2xl text-primary-300 font-bold my-3">Collaborate with Us</h1>
                        <h2 className="text-sm text-black">
                        We collaborate with corporations for two-fold purpose: 
                        <br></br>
                        • Event sponsorship: This helps us provide a better experience for our event attendees at a larger scale.
                        <br></br>
                        • Industry Talks: By collaborating with expert industry leaders, we can equip our members with the relevant, high-quality knowledge in the different domains of finance.
                        </h2>
                    </div>
                    <button
                    style={{
                        backgroundColor: "#E55C56",
                        color: "#FFFFFF",
                        padding: "2px 10px",
                        fontSize: "80%",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "30px",
                        marginTop: "20px",
                    }}
                    >
                        Learn more
                    </button>
                </div>
                <div className="flex flex-1 flex-col items-center">
                    <div className="mx-10">
                        <h1 className="text-2xl text-primary-300 font-bold my-3">Stay Up-to-Date</h1>
                        <h2 className="text-sm text-black">
                        Join our newsletter to stay updated on all our events and activities. We welcome anyone interested in finance to join our community and learn from our talented members and industry partners.
                        </h2>
                    </div>
                    <button
                    style={{
                        backgroundColor: "#E55C56",
                        color: "#FFFFFF",
                        padding: "2px 10px",
                        fontSize: "80%",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "30px",
                        marginTop: "20px",
                    }}
                    >
                        Learn more
                    </button>
                </div>
                {/* <div className="w-2/3 mx-auto">
                    <img src={ImagePlaceholder2}/>
                </div> */}
            </div>

        </div>
    )
}

export default Home;