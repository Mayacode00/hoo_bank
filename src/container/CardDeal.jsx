import React from "react";
import image from "../constants/image";
import styles, { layout } from "../style";
import { Button } from "../components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          find a better a card deal in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          arcu tortor, purus in mattis at sed integer faucibus. aliquet quis
          aliquet eget mauris totor. aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <LazyLoadImage
          src={image.card}
          alt="card"
          className="w-[100%] h-[100%]"
        />
      </div>
    </section>
  );
}

export default CardDeal;
