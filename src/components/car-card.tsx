"use client";
import { useState } from "react";

import { Button } from ".";
import type { CarCardComponent } from "@/types/component-types";

const CarCard: CarCardComponent = ({ car }) => {
    const {
        city_mpg,
        class: car_class,
        combination_mpg,
        cylinders,
        displacement,
        drive,
        fuel_type,
        highway_mpg,
        make,
        model,
        transmission,
        year,
    } = car;
    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>
                    {make} {model}
                </h2>
            </div>
            <p className=''>
                <span>Car Rent...</span>
            </p>
        </div>
    );
};

export default CarCard;
