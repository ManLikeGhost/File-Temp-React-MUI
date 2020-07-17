import React from 'react'
import Header from '../components/header';
import HeroSection from '../components/heroSection';
import Properties from '../components/Properties';
import ContactDetails from '../components/contactDetails'

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection/>
            <ContactDetails/>
            <Properties/>
        </div>
    )
}

export default HomePage
