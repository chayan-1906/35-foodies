'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

function Footer() {
    return (
        <motion.footer initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} className={'bg-lightYellow rounded-t-3xl'}>
            <div className={'container py-24'}>
                <div className={'grid grid-cols-1 md:grid-cols-3 gap-12'}>
                    {/** brand info */}
                    <div className={'space-y-3 lg:max-w-[300px]'}>
                        <Image src={'/assets/food/logo.png'} alt={'logo'} width={400} height={400} className={'w-24'}/>
                        <p className={''}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem justo, maximus at molestie non, ultricies ac massa. Ut pretium purus vitae hendrerit mattis.
                        </p>
                        <Link href={'#'} className={'inline-block mt-6 text-sm'}>contact@food.com</Link>
                    </div>

                    {/** quick links */}
                    <div className={'grid grid-cols-2 md:grid-cols-3 col-span-2 gap-6'}>
                        <div>
                            <h1 className={'text-xl font-semibold'}>Quick Links</h1>
                            <ul className={'space-y-3 mt-6'}>
                                <li className={'footer-link'}>Home</li>
                                <li className={'footer-link'}>About</li>
                                <li className={'footer-link'}>Contact</li>
                                <li className={'footer-link'}>Food</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className={'text-xl font-semibold'}>Quick Links</h1>
                            <ul className={'space-y-3 mt-6'}>
                                <li className={'footer-link'}>Home</li>
                                <li className={'footer-link'}>About</li>
                                <li className={'footer-link'}>Contact</li>
                                <li className={'footer-link'}>Food</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className={'text-xl font-semibold'}>Quick Links</h1>
                            <ul className={'space-y-3 mt-6'}>
                                <li className={'footer-link'}>Home</li>
                                <li className={'footer-link'}>About</li>
                                <li className={'footer-link'}>Contact</li>
                                <li className={'footer-link'}>Food</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;
