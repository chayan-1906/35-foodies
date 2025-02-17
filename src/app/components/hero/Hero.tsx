'use client';

import Image from "next/image";
import {IoCartOutline} from "react-icons/io5";
import {motion} from "framer-motion";
import {SlideUp} from "@/styles/Animations";

function Hero() {
    return (
        <main>
            <div className={'container flex justify-center min-h-[600px] relative z-10'}>
                <div className={'grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between'}>
                    {/** text content */}
                    <div className={'space-y-3 mt-14 md:mt-0 text-center md:text-start'}>
                        <motion.h1 variants={SlideUp(0.5)} initial={'hidden'} whileInView={'show'}
                                   className={'relative text-5xl lg:text-7xl xl:text-8xl font-bold text-outline text-transparent uppercase'}>
                            Yummy
                            <Image src={'/assets/food/leaf.png'} alt={'yummy'} width={400} height={400} className={'absolute w-12 top-0 right-0 md:right-24'}/>
                        </motion.h1>
                        <motion.h1 variants={SlideUp(0.5)} initial={'hidden'} whileInView={'show'} className={'text-5xl lg:text-7xl xl:text-8xl font-bold uppercase'}>Breakfast</motion.h1>
                        <motion.p variants={SlideUp(1)} initial={'hidden'} whileInView={'show'} className={'text-sm'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sem
                            justo, maximus at molestie non, ultricies ac massa. Ut pretium purus vitae hendrerit mattis.
                        </motion.p>
                        <motion.button variants={SlideUp(1.5)} initial={'hidden'} whileInView={'show'} className={'btn-primary flex items-center !mt-10'}>
                            <IoCartOutline size={24} className={'inline mr-2'}/>
                            Order Now
                        </motion.button>
                    </div>

                    {/** images */}
                    <motion.div initial={{opacity: 0, rotate: 20, x: 200, y: 100}} whileInView={{opacity: 1, rotate: 0, x: 0, y: 0}} transition={{duration: 1, delay: 1}} className={'relative z-10'}>
                        <Image src={'/assets/food/food.png'} alt={'food'} width={1000} height={1000} className={'w-[450px] img-shadow'}/>
                        <Image src={'/assets/food/spoon.png'} alt={'spoon'} width={1000} height={1000} className={'absolute bottom-[-120px] -left-16 rotate-[75deg] w-[350px] img-shadow'}/>
                        <Image src={'/assets/food/banana.png'} alt={'banana'} width={1000} height={1000} className={'absolute top-[-30px] right-[-130px] md:right-[-160px] w-[400px] img-shadow'}/>
                    </motion.div>
                </div>

                {/** yellow background */}
                <motion.div
                    initial={{opacity: 0, rotate: 60, x: 200, y: 100}} whileInView={{opacity: 1, rotate: 40, x: 0, y: 0}}
                    className={'absolute top-[-30%] left-[60%] xs:left-[75%] sm:left-[70%] md:left-[50%] lg:left-[65%] w-[2500px] h-[2500px] rounded-3xl bg-lightYellow z-0'}>

                </motion.div>
            </div>
        </main>
    );
}

export default Hero;
