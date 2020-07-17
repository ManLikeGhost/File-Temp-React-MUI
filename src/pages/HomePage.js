import React from 'react'
import Header from '../components/header';
import HeroSection from '../components/heroSection';
import PortfoliosList from '../components/PortfoliosList';
import ContactDetails from '../components/contactDetails'

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection/>
            <ContactDetails/>
            <PortfoliosList/>
        </div>
    )
}

export default HomePage
