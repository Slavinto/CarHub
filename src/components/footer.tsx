import Link from "next/link";
import Image from "next/image";

import { footerLinks } from "@/data";

import { FooterLinkComponent } from "@/types";

const FooterLink: FooterLinkComponent = ({ title, url }) => {
    return (
        <Link className='text-gray-500' href={url}>
            {title}
        </Link>
    );
};

const Footer = () => {
    return (
        <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
            <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <Image
                        src={"/static/images/logo.svg"}
                        alt='logo'
                        width={118}
                        height={18}
                        className='object-contain'
                    />
                    <p className='text-base text-gray-700'>
                        CarHub&nbsp;{new Date().getFullYear()} <br />
                        All rights reserved &copy;
                    </p>
                </div>
                <div className='footer__links'>
                    {footerLinks.map((col) => (
                        <div key={col.title} className='footer__link'>
                            <h3 className='font-bold'>{col.title}</h3>
                            {col.links.map((link) => (
                                <FooterLink
                                    key={link.title}
                                    title={link.title}
                                    url={link.url}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-between  flex-wrap items-center mt-10 border-t sm:px-16 px-6 py-10 gap-8'>
                <p>@{new Date().getFullYear()} CarHub. All Rights Reserved</p>
                <div className='footer__copyrights-link'>
                    <Link href={"/"} className='text-gray-500'>
                        Privacy&nbsp;Policy
                    </Link>

                    <Link href={"/"} className='text-gray-500'>
                        Terms of&nbsp;Use
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
