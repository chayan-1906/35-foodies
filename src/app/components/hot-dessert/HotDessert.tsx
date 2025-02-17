'use client';

import Image from "next/image";
import {motion} from "framer-motion";
import {SlideUp} from "@/styles/Animations";

const hotDesertData = [
    {
        id: 1,
        name: 'HotDessert',
        img: '/assets/food/food.png',
        price: '$5.99',
        delay: 0.4,
    },
    {
        id: 2,
        name: 'Hot Cake',
        img: '/assets/food/food2-plate.png',
        price: '$5.00',
        delay: 0.8,
    },
    {
        id: 3,
        name: 'Hot Cake',
        img: '/assets/food/banner.png',
        price: '$5.00',
        delay: 1.2,
    },
];

function HotDessert() {
    return (
        <section>
            <div className={'container py-12'}>
                {/** heading section */}
                <motion.h3 variants={SlideUp(0)} initial={'hidden'} whileInView={'show'} className={'text-2xl font-semibold text-darkGreen uppercase'}>Hot Desserts</motion.h3>

                {/** grid section */}
                <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'}>
                    {hotDesertData.map(({id, name, img, price, delay}, index) => (
                        <motion.div key={id} variants={SlideUp(delay)} initial={'hidden'} whileInView={'show'} className={'group bg-white/50 shadow-md p-3 flex items-center justify-center gap-3'}>
                            <Image src={img} alt={name} width={400} height={400}
                                   className={'w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]'}/>
                            <div>
                                <h3 className={'text-xl font-semibold'}>{name}</h3>
                                <p className={'text-xl text-yellow-500'}>{price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HotDessert;
