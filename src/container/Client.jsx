import React from "react";
import { clients } from "../constants";
import styles from "../style";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Client() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <LazyLoadImage
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain cursor-pointer hover:opacity-50"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Client;
