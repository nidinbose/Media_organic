'use client'

import AboutUs from "../Components/About"
import BlogsPage from "../Components/Blogs"
import Cards from "../Components/Cards"
import Footer from "../Components/Footer"
import Landing from "../Components/Landing"
import MonetizationPlans from "../Components/Monitorplan"
import Navbar from "../Components/Navbar"
import Posters from "../Components/Posters"
import Pricing from "../Components/pricing"
import ProjectsSection from "../Components/Projects"
import ServicesPage from "../Components/Services"
import Testimonial1 from "../Components/testimonial1"

export default function Hero(){
    return(
        <div>
            <Navbar/>
            <Landing/>
             <AboutUs/>
             <Posters/>
             <BlogsPage/>
            <ServicesPage/>
            <MonetizationPlans/>
            <Cards/>
            <Pricing/>
            <Testimonial1/>
            <ProjectsSection/>
            <Footer/>
           
        </div>
    )
}