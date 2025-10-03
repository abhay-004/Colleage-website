import React from "react";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({setPlayState}) => {
  return (
    <div className="about my-24 mx-auto flex items-center justify-between w-11/12">
      <div className="about-left basis-[40%] relative">
        <img src={about_img} className="about-img w-full rounded-2.5" />
        <img src={play_icon} className="play-icon cursor-pointer " onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right basis-[56%]">
        <h3 className="font-semibold  text-xl text-[#212EA0]">
          ABOUT UNIVERSITY
        </h3>
        <h2 className="text-4xl text-[#000F38] my-2.5 mx-auto max-w-[400px] ">
          Nuturing Tomorrow's Leaders Today
        </h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
