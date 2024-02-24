import React from "react";
import BBlogo from "../Assets/BBLogo.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: BBlogo,
      title: "Logo Design",
    },
    {
      image: ChooseMeals,
      title: "Web Design",
    },
    {
      image: DeliveryMeals,
      title: "Hardware Services",
    },
  ];
  return (
    <div className="work-section-wrapper" id="Work">
      <div className="work-section-top">  
        <p className="primary-heading">Our Works</p>
        <h1 className="primary-subheading">We are ready to Design your product IDEAS💡</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
