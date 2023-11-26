import React from "react";
import "./About.scss";

const About: React.FC = () => {
  return (
    <div className="container about">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          consequatur molestias consectetur numquam? Ex quos perferendis nisi
          vel quaerat, quam reprehenderit facere repellat obcaecati consequatur
          sapiente aliquid laboriosam, in enim quis!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab
          nulla animi voluptatem dolorum in id consectetur nostrum officia
          dignissimos.
        </p>
      </div>
    </div>
  );
};

export default About;
