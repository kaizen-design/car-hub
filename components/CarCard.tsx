"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { Button, CarDetails } from ".";
import { calculateCarRent } from "@/utils";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const {
    city_mpg,
    drive,
    make,
    model,
    transmission,
    year
  } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model} 
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] font-medium">
          /day
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image 
          src="/hero.png"
          alt={`${make} ${model}`}
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative w-full flex mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image 
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="Transmission"
            />
            <p className="text-[14px]">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image 
              src="/tire.svg"
              width={20}
              height={20}
              alt="Drive"
            />
            <p className="text-[14px]">
              {drive.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image 
              src="/gas.svg"
              width={20}
              height={20}
              alt="MPG"
            />
            <p className="text-[14px]">
              {city_mpg} MPG
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <Button 
            title="View More"
            styles="w-full py-[16px] rounded-full bg-primary-blue hover:opacity-90 transition-opacity"
            textStyles="text-white text-[14px] leading=[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails 
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  )
};

export default CarCard;