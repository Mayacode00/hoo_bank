import React from "react";
import styles, { layout } from "../style";
import image from "../constants/image";
import { features } from "../constants/index";
import { Button } from "../components";

const FeatureCard = (props) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] feature-card mb-2`}
  >
    <div className={`w-[60px] h-[60px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={props.icon}
        alt="icon"
        className="w-[50%] h-[50%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semiBold text-white text-[18px] mb-1">{props.title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[18px] mb-1">{props.content}</p>
    </div>
  </div>
);

function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          you do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Business;
