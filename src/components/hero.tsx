import Image from "next/image";
import { Button } from ".";
const Hero = () => {
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
                <Button />
            </div>
        </section>
    );
};

export default Hero;
