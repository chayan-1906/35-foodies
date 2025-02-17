import Navbar from "@/app/components/navbar/Navbar";
import Banner from "@/app/components/banner/Banner";
import Footer from "@/app/components/footer/Footer";
import Hero from "@/app/components/hero/Hero";
import HotDessert from "@/app/components/hot-dessert/HotDessert";
import PopularRecipe from "@/app/components/popular-recipe/PopularRecipe";
import Testimonial from "@/app/components/testimonial/Testimonial";

function Home() {
    return (
        <div className={'overflow-x-hidden bg-white2 text-dark'}>
            <div className={'relative overflow-hidden'}>
                <Navbar/>
                <Hero/>
            </div>
            <HotDessert/>
            <Banner/>
            <PopularRecipe/>
            <Testimonial/>
            <Footer/>
        </div>
    );
}

export default Home;
