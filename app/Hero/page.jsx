'use client'

import AboutUs from "../Components/About"
import BlogsPage from "../Components/Blogs"
import Cards from "../Components/Cards"
import Footer from "../Components/Footer"
import Landing from "../Components/Landing"
import Navbar from "../Components/Navbar"
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
             <BlogsPage/>
            <ServicesPage/>
            <Cards/>
            <Pricing/>
            <Testimonial1/>
            <ProjectsSection/>
            <Footer/>
           
        </div>
    )
}