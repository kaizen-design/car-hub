"use client";

import Image from "next/image";
import { Button } from ".";

const Hero = () => {
  const handleScroll = () => {

  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 xl:pb-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car – quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking process.
        </p>
        <Button 
          title="Explore Cars"
          type="button"
          styles="primary-blue mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image 
            src="/hero.png"
            fill
            className="object-contain"
            alt="Hero"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  )
};

export default Hero;