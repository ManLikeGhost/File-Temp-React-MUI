import React from 'react'
import Header from '../components/header';
import HeroSection from '../components/heroSection';
import PortfoliosList from '../components/PortfoliosList';
import PropertiesList from '../components/PropertiesList';
import ContactDetails from '../components/contactDetails';
import HomePageStats from '../components/homePageStats.jsx'

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection/>
            <ContactDetails/>
            <PortfoliosList/>
            <PropertiesList/>
            <HomePageStats />
        </div>
    )
}

export default HomePage
