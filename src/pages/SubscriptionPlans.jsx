import React, { useState, useEffect } from "react";
import axios from "axios";
// import CssBaseline from "@material-ui/core/CssBaseline";
import { API_BASE_URL} from "../constants/apiConstants";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";

import NavigationHeader from "../components/navigationHeader";
import SubscriptionPlan from "../components/subscriptionPlan/subscriptionPlan";
import ProfileTitle from "../components/profile/profileTitle";
import Footer from "../components/footer";

// const initialPlans = [
//   {
//     id: 0,
//     title: "Free",
//     price: "0",
//     discount1: "",
//     discount2: "",
//     listings1: "5",
//     listings2: "",
//     listings3: "",
//   },
//   {
//     id: 1,
//     title: "BRONZE",
//     price: "10,000",
//     discount1: "57,000",
//     discount2: "100,000",
//     listings1: "250",
//     listings2: "50",
//     listings3: "40",
//   },
//   {
//     id: 2,
//     title: "SILVER",
//     price: "15,000",
//     discount1: "85,000",
//     discount2: "162,000",
//     listings1: "270",
//     listings2: "60",
//     listings3: "45",
//   },
//   {
//     id: 3,
//     title: "GOLD",
//     price: "20,000",
//     discount1: "114,000",
//     discount2: "216,000",
//     listings1: "290",
//     listings2: "70",
//     listings3: "50",
//   },
//   {
//     id: 4,
//     title: "PLATINUM",
//     price: "25,000",
//     discount1: "142,500",
//     discount2: "270,000",
//     listings1: "310",
//     listings2: "80",
//     listings3: "55",
//   },
//   {
//     id: 5,
//     title: "PLATINUM+",
//     price: "35,000",
//     discount1: "199,500",
//     discount2: "378,000",
//     listings1: "350",
//     listings2: "100",
//     listings3: "65",
//   },
// ];

export default function SubscriptionPlans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(API_BASE_URL+"/plans");
      setPlans(result.data.plans);
    }
    fetchData();
  }, []);
  return (
    <div className="BackgroundImage">
      {/* <CssBaseline /> */}
      <NavigationHeader />
      <ProfileTitle>Subscription Plans</ProfileTitle>
      <Container component="main">
        <Grid container justify="center" alignItems="flex-end">

          {plans.map((plan) => (
            <SubscriptionPlan
              id={plan.id}
              name={plan.name}
              price={plan.price}
              duration={plan.duration}
              maxAdListing={plan.max_featured_ad_listings}
              listings1={plan.max_featured_ad_listings}
              listings2={plan.max_featured_ad_listings}
              listings3={plan.max_featured_ad_listings}
            />
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </div>
  );
}
