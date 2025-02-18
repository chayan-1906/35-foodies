'use client';

import Image from "next/image";
import {motion} from "framer-motion";
import {SlideUp} from "@/styles/Animations";

const bannerData = [];

function Banner() {
    return (
        <section className={'container py-24'}>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center'}>
                {/** image section */}
                <div className={'relative'}>
                    <motion.div initial={{opacity: 0, x: -100, y: 100}} whileInView={{opacity: 1, x: 0, y: 0}} whileHover={{scale: 1.2, rotate: 15, x: 50, y: -50}}
                                transition={{duration: 0.8, delay: 0.5, scale: {duration: 0.5}}} className={'relative z-10 w-full lg:max-w-[350px] img-shadow'}>
                        <Image src={'/assets/food/banner.png'} alt={'banner'} width={400} height={400}
                               className={'h-[200px] sm:h-[320px] md:h-[360px] w-[200px] sm:w-[320px] md:w-[360px] flex-shrink-0'}/>
                    </motion.div>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.5}}
                                className={'absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[200px] sm:h-[320px] md:h-[360px] w-[200px] sm:w-[320px] md:w-[360px] bg-lightYellow rounded-full'}/>
                </div>

                {/** text content section */}
                <div className={'space-y-3 lg:max-w-[400px]'}>
                    <motion.h1 variants={SlideUp(1)} initial={'hidden'} whileInView={'show'} className={'text-6xl uppercase font-semibold font-league'}>The best yummy food in the town</motion.h1>
                    <motion.p variants={SlideUp(1.3)} initial={'hidden'} whileInView={'show'} className={''}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem justo, maximus at molestie non, ultricies ac massa. Ut pretium purus vitae hendrerit mattis.
                    </motion.p>
                    <motion.button variants={SlideUp(1.6)} initial={'hidden'} whileInView={'show'} className={'btn-primary'}>Order Now</motion.button>
                </div>
            </div>
        </section>
    );
}

export default Banner;
