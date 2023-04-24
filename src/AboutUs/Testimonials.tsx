import React from "react";
import ImagePlaceholder2 from "../assets/ImagePlaceholder2.png";
import RedBanner from "../components/RedBanner";

import Anirudh from "../assets/exco_photos/3.jpg";
import Sheen from "../assets/exco_photos/5.jpg";
import Yash from "../assets/Yash.jpg";
import Parth from "../assets/Parth.jpg";
import Cyril from "../assets/Cyril.jpg";
import James from "../assets/James.jpg";


type props = {
    image: string,
    header: string,
    header2: string,
    text: string
}

const TestimonialSectionLeft = ({image, header, header2, text}: props) => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-20 mx-10">
        <div className="w-1/2 mx-auto">
            <img src={image}/>
        </div>
        <div className="flex flex-1 items-center">
            <div className="mx-10">
                <h1 className="text-4xl text-primary-300 font-bold my-0">{header}</h1>
                {/* <h1 className="text-3xl text-primary-300 font-bold mt-0 mb-3">{header2}</h1> */}
                <h2 className="text-base">{text}</h2>
            </div>
      </div>
    </div>
  );
};

const TestimonialSectionRight = ({ image, header, header2, text }: props) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-20 mx-10">
      <div className="flex flex-1 items-center">
        <div className="mx-10">
          <h1 className="text-4xl text-primary-300 font-bold my-0">{header}</h1>
          <h1 className="text-3xl text-primary-300 font-bold mt-0 mb-3">
            {header2}
          </h1>
          <h2 className="text-base">{text}</h2>
        </div>
      </div>
      <div className="w-1/2 mx-auto">
        <img src={image} />
      </div>
    </div>
    )
}

const Testimonials = () =>{
    const testimonials = [
        {
            header: "Sheen - Vice President, Marketwatch",
            header2: 'Class of 2024',
            text: '"I joined MarketWatch Club to learn more about finance, but I gained so much more than that. The club provided me with opportunities to network with industry professionals and develop leadership skills. "',
            image: Sheen
        },
        {
            header: "Anirudh Bharadwaj - Treasurer, Marketwatch",
            header2: 'Class of 2025',
            text: '"MarketWatch Club is the perfect place to build a strong foundation in finance. Through its wide range of activities, members can gain industry knowledge and develop analytical skills that are essential in any finance-related field."',
            image: Anirudh
        },
        // {
        //     header: "Yi Jie - Marketwatch member",
        //     header2: 'Class of ?',
        //     text: '"I was amazed by the level of dedication and commitment shown by MarketWatch Club members. The teamwork, research, and analysis skills they showcased are a testament to the excellent training provided by the club."  ',
        //     image: ImagePlaceholder2
        // },
        {
            header: "Parth - Marketwatch member",
            header2: 'Class of 2025',
            text: "'As an international student, joining the SUTD MarketWatch Club has allowed me to feel more connected to the university and the finance industry. The club's diverse and inclusive community has provided me with a welcoming space to learn and grow. I am grateful for the opportunities the club has provided me!'",
            image: Parth
        },
        {
            header: "Cyril",
            header2: 'Class of 2026',
            text: "'This club has been instrumental in helping me develop my critical thinking and analytical skills. By taking part in the club’s projects, I've learned how to apply my engineering knowledge to the field and gained real-world experience in finance and have. It's been an invaluable experience!'",
            image: Cyril
        },
        {
            header: "James",
            header2: 'Class of 2023',
            text: '"MarketWatch provided me with the platform to apply my classroom knowledge into practical investment research. The experience allowed me to develop critical thinking skills and foster relationships with like-minded peers." ',
            image: James
        },
    ]
    return (
    <div>
      <RedBanner bannerText="Testimonials"></RedBanner>

      {testimonials.map((testimonial: props, index: number) =>
        index % 2 === 0 ? (
          <TestimonialSectionLeft
            image={testimonial.image}
            header={testimonial.header}
            header2={testimonial.header2}
            text={testimonial.text}
          />
        ) : (
          <TestimonialSectionRight
            image={testimonial.image}
            header={testimonial.header}
            header2={testimonial.header2}
            text={testimonial.text}
          />
        )
      )}
    </div>
  );
};

export default Testimonials;
