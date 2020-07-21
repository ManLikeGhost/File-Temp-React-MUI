import React from 'react'
// import NavigationHeader from '../components/home/navigationHeader';
import NavigationHeader from '../components/navigationHeader.jsx'
import HeroSection from '../components/home/heroSection';
import PortfoliosList from '../components/home/PortfoliosList';
import PropertiesList from '../components/home/PropertiesList';
import ContactDetails from '../components/home/contactDetails';
import HomePageStats from '../components/home/homePageStats.jsx';
import AboutHome from '../components/home/about';
import AddListingSection from '../components/home/addListing';
import SaleRentShortlet from '../components/home/saleRentShortlet';
import Footer from '../components/footer';
//MUI
import { makeStyles } from "@material-ui/core/styles";
import MarbleBackground from "../img/MarbleBackground.png";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paperContainer: {
    height: "100%",
    backgroundImage: `url(${MarbleBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  
}));

const HomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.paperContainer}>
            <NavigationHeader />
            <HeroSection/>
            <ContactDetails/>
            <PortfoliosList/>
            <PropertiesList/>
            <HomePageStats />
            <AboutHome />
            <AddListingSection/>
            <SaleRentShortlet />
            <Footer />
        </div>
    )
}

export default HomePage
