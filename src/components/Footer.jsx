import React from "react";
import styles from "../style";
import image from "../constants/image";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} flex-col bg-primary`}
    >
      <div className={`${styles.boxWidth}`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className="flex-1 flex flex-col justify-start">
            <img
              src={image.logo}
              alt="footer-logo"
              className="sm:w-[260px] w-[200px] h-[72px] object-contain"
            />
            <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
              a new way to make the payments easy, reliable and secure.
            </p>
          </div>
          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerLink) => (
              <div
                key={footerLink.key}
                className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              >
                <h4 className="font-poppins font-medium text-white text-[18px] leading-[27px] cursor-pointer">
                  {footerLink.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerLink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px] hover:text-secondary cursor-pointer ${
                        index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
          <p className="font-poppins font-thin text-center text-dimWhite text-[18px] leading-[27px] cursor-pointer capitalize">
            2021 HooBank. all rights reserved.
          </p>
          <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
