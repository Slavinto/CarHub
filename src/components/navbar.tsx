import Link from "next/link";
import Image from "next/image";

import { Button } from ".";

const Navbar = () => {
    return (
        <header className='w-full flex absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between sm:px-16 px-6 py-4 w-full'>
                <Link
                    href={"/"}
                    className='flex
                 justify-center items-center'
                >
                    <Image
                        src={"/static/images/logo.svg"}
                        alt='logo'
                        width={118}
                        height={18}
                        className='object-contain'
                    />
                </Link>
                <Button
                    title='Sing In'
                    type='button'
                    containerStyles='bg-white text-primary-blue rounded-full min-w-[130px]'
                />
            </nav>
        </header>
    );
};

export default Navbar;
