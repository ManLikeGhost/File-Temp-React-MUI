import React from 'react'
// import NavigationHeader from '../components/home/navigationHeader';
import NavigationHeader from '../components/navigationHeader.jsx'
import HeroSection from '../components/home/heroSection';
import PortfoliosList from '../components/home/PortfoliosList';
import PropertiesList from '../components/home/PropertiesList';
import ContactDetails from '../components/home/contactDetails';
import HomePageStats from '../components/home/homePageStats.jsx';
import AboutHome from '../components/home/about';

const HomePage = () => {
    return (
        <div>
            <NavigationHeader />
            <HeroSection/>
            <ContactDetails/>
            <PortfoliosList/>
            <PropertiesList/>
            <HomePageStats />
            <AboutHome />
        </div>
    )
}

export default HomePage
