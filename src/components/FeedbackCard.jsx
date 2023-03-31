import React from "react";
import image from "../constants/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function FeedbackCard(props) {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={image.quotes}
        alt="quote"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] text-white leading-[30px] my-10">
        {props.content}
      </p>
      <div className="flex flex-row items-center">
        <LazyLoadImage
          src={props.img}
          effect="blur"
          alt={props.name}
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-bold text-[20px] text-white leading-[32px]">
            {props.name}
          </h4>
          <p className="font-poppins font-normal text-[16px] text-dimWhite leading-[24px]">
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
