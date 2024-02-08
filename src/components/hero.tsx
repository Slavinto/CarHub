"use client";

import Image from "next/image";
import { Button } from ".";
const Hero = () => {
    const handleClick = () => {};
    return (
        <section className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Find, book or rent a car &#8212; quickly and easily
                </h1>
                <p className='hero__subtitle'>
                    Streamline your car rental experience with our effortless
                    booking process.
                </p>
                <Button
                    title={"Explore Cars"}
                    containerStyles={
                        "bg-primary-blue text-white rounded-full mt-10"
                    }
                    handleClick={handleClick}
                />
                <div className='hero__image-container'>
                    <div className='hero__image'>
                        <Image
                            src={"/static/images/hero.png"}
                            fill
                            className='object-contain'
                            alt='auto image'
                        />
                        <div className='hero__image-overlay'></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
