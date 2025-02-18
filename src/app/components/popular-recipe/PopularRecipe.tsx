'use client';

import {motion} from "framer-motion";
import {SlideUp} from "@/styles/Animations";
import Image from "next/image";

const popularRecipeData = [
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

function PopularRecipe() {
    return (
        <section className={'container py-24'}>
            <motion.h3 variants={SlideUp(0)} initial={'hidden'} whileInView={'show'} className={'text-4xl text-center font-league font-semibold uppercase py-8'}>Our Popular Recipe</motion.h3>

            {/** card section */}
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center'}>
                {popularRecipeData.map(({id, name, img, price, delay}, index) => (
                    <div key={id} className={'group space-y-3 flex flex-col h-full w-full text-center bg-white/50 shadow-xl p-3 rounded-xl'}>
                        <div className={'h-44'}>
                            <Image src={img} alt={name} width={400} height={400}
                                   className={'w-44 mx-auto img-shadow group-hover:scale-x-110 group-hover:translate-y-[-15px] group-hover:translate-x-5 group-hover:rotate-[50deg] transition-all duration-1000'}/>
                        </div>
                        <div className={''}>
                            <button className={'btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100'}>Buy Now</button>
                            <p className={'text-xl font-semibold'}>{name}</p>
                            <p className={'text-xl font-bold text-yellow-500'}>{price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PopularRecipe;
