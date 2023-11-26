import React from "react";
import "./About.scss";

const About: React.FC = () => {
  return (
    <div className="container about z-1">
      <div className="about-image">
        <img
          src={process.env.PUBLIC_URL + `/images/Profile.jpg`}
          alt="Profile"
        />
      </div>
      <div className="about-info fs-5">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed unde
          repudiandae nostrum similique assumenda ipsum magnam vel recusandae
          impedit quasi, deleniti consectetur cum tempora sequi error eum,
          voluptas at adipisci voluptatem quisquam minus alias.
          <br />
          <br />
          Inventore eaque doloremque architecto dolores unde harum animi laborum
          voluptatibus placeat, laudantium dolor iusto veritatis consequatur
          magnam molestias voluptate et ut perferendis? Et voluptate cum eveniet
          voluptates, incidunt alias iusto nemo, accusamus optio vel vero fugiat
          ad.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          consequatur eius eaque consequuntur voluptate ea tempora sapiente ipsa
          ex, repellendus nostrum cupiditate maxime architecto ipsum modi,
          laborum laudantium natus, placeat aliquam error alias a?
        </p>
      </div>
      <div className="about-info-2 fs-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ab reprehenderit architecto eveniet voluptates laboriosam porro, eius
          consequatur suscipit, debitis ea, nihil amet obcaecati harum tempora
          molestias nobis sint in veritatis laudantium ducimus nesciunt expedita
          doloribus. Ipsa consectetur architecto minus vel optio. Omnis ab
          inventore nesciunt voluptas sapiente exercitationem ex perferendis
          impedit ea libero, sed repudiandae iste eius, ipsam fugit ducimus,
          quaerat rem consequuntur.
        </p>
      </div>
      <img
        src={process.env.PUBLIC_URL + `/images/marble.jpg`}
        alt="Cover"
        className="background_image"
      />
    </div>
  );
};

export default About;
