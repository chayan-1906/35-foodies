'use client';

import Image from "next/image";
import {Routes} from "@/utils/Routes";
import Link from "next/link";
import {motion} from "framer-motion";
import {IoCartOutline} from "react-icons/io5";
import {SlideDown} from "@/styles/Animations";

const navMenus = [
    {
        id: 1,
        title: 'Home',
        path: Routes.homePath,
        delay: 0.1,
    },
    {
        id: 2,
        title: 'About',
        path: Routes.aboutPath,
        delay: 0.2,
    },
    {
        id: 3,
        title: 'Menu',
        path: Routes.menuPath,
        delay: 0.3,
    },
    {
        id: 4,
        title: 'Delivery',
        path: Routes.deliveryPath,
        delay: 0.4,
    },
    {
        id: 5,
        title: 'Contact Us',
        path: Routes.contactUsPath,
        delay: 0.5,
    },
];

function Navbar() {
    return (
        <nav className={'container flex justify-between items-center font-league'}>
            {/** logo section */}
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8, delay: 0.5}}>
                <Image src={'/assets/food/logo.png'} alt={'logo'} width={400} height={400} className={'w-36'}/>
            </motion.div>

            {/** menu section */}
            <div className={'hidden md:block'}>
                <ul className={'flex gap-6'}>
                    {navMenus.map(({id, title, path, delay}, i) => (
                        <motion.li key={i} variants={SlideDown(delay)} initial={'initial'} animate={'animate'} data-delay={delay} className={'nav-menu'}>
                            <Link href={path} className={'inline-block px-2 py-2 text-2xl'}>{title}</Link>
                        </motion.li>
                    ))}
                </ul>
            </div>

            {/** button section */}
            <motion.div variants={SlideDown(0.6)} initial={'initial'} animate={'animate'}>
                <button className={'h-10 w-10 grid place-items-center rounded-full text-white bg-dark'}>
                    <IoCartOutline/>
                </button>
            </motion.div>
        </nav>
    );
}

export default Navbar;
