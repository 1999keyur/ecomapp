import Slider from "../../components/Slider/Slider"
import React from 'react'
import "./Home.scss"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import CategoryGrid from "../../components/CategoryGrid/CategoryGrid"
import ContactUsBar from "../../components/ContactUsBar/ContactUsBar"
const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="Featured"/>
      <CategoryGrid/>
      <FeaturedProducts type="Trending"/>
      <ContactUsBar/>

    </div>
  )
}

export default Home;