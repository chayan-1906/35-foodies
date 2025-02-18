'use client';

import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import {SlideUp} from "@/styles/Animations";

function Testimonial() {
    return (
        <section className={'container py-24'}>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center'}>
                {/** text content section */}
                <div className={'space-y-3 lg:max-w-[400px]'}>
                    <motion.p variants={SlideUp(0.4)} initial={'hidden'} whileInView={'show'} className={'text-xl font-serif relative z-10'}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem justo, maximus at molestie non, ultricies ac massa. Ut pretium purus vitae hendrerit mattis."
                    </motion.p>
                    <div className={'flex items-center gap-3'}>
                        <motion.div variants={SlideUp(0.8)} initial={'hidden'} whileInView={'show'}>
                            <Image src={'https://picsum.photos/id/237/200/300'} alt={''} width={400} height={400} className={'w-14 h-14 object-cover rounded-full'}/>
                        </motion.div>
                        <motion.div variants={SlideUp(1.2)} initial={'hidden'} whileInView={'show'}>
                            <h2 className={'text-xl'}>John Doe</h2>
                            <p className={'text-sm'}>Designation</p>
                        </motion.div>
                    </div>
                </div>

                {/** image section */}
                <div className={'relative'}>
                    <motion.div initial={{opacity: 0, x: -100, y: 100}} whileInView={{opacity: 1, x: 0, y: 0}} whileHover={{scale: 1.2, rotate: 15, x: 50, y: -50}}
                                transition={{duration: 0.8, delay: 0.5, scale: {duration: 0.5}}} className={'relative z-10 w-full max-w-[350px] img-shadow'}>
                        <Image src={'/assets/food/banner.png'} alt={'banner'} width={400} height={400} className={'h-[200px] sm:h-[320px] md:h-[360px] w-[200px] sm:w-[320px] md:w-[360px] flex-shrink-0'}/>
                    </motion.div>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.5}}
                                className={'absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[200px] sm:h-[320px] md:h-[360px] w-[200px] sm:w-[320px] md:w-[360px] bg-lightYellow rounded-full'}/>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
