import React from "react";

// import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Container from "@material-ui/core/Container";

import NavigationHeader from "../components/navigationHeader";
import SubscriptionPlan from "../components/subscriptionPlan/subscriptionPlan";
import ProfileTitle from "../components/profile/profileTitle";
import Footer from "../components/footer";

const plans = [
  {
    title: "Free",
    price: "0",
    discount1: "",
    discount2: "",
    listings1: "5",
    listings2: "",
    listings3: "",
  },
  {
    title: "BRONZE",
    price: "10,000",
    discount1: "57,000",
    discount2: "100,000",
    listings1: "250",
    listings2: "50",
    listings3: "40",
  },
  {
    title: "SILVER",
    price: "15,000",
    discount1: "85,000",
    discount2: "162,000",
    listings1: "270",
    listings2: "60",
    listings3: "45",
  },
  {
    title: "GOLD",
    price: "20,000",
    discount1: "114,000",
    discount2: "216,000",
    listings1: "290",
    listings2: "70",
    listings3: "50",
  },
  {
    title: "PLATINUM",
    price: "25,000",
    discount1: "142,500",
    discount2: "270,000",
    listings1: "310",
    listings2: "80",
    listings3: "55",
  },
  {
    title: "PLATINUM+",
    price: "35,000",
    discount1: "199,500",
    discount2: "378,000",
    listings1: "350",
    listings2: "100",
    listings3: "65",
  },
];

export default function SubscriptionPlans() {
  return (
    <div className="BackgroundImage">
      {/* <CssBaseline /> */}
      <NavigationHeader />
      <ProfileTitle>Subscription Plans</ProfileTitle>
      <Container component="main">
        <Grid container justify="center" alignItems="flex-end">
          {/* <Grid item xs={12} sm={12} md={4}>
            <Card className={classes.cardContainer}>
              <CardHeader
                title="Bronze"
                // subheader="Most popular"
                titleTypographyProps={{ align: "center" }}
                // subheaderTypographyProps={{ align: "center" }}
                // action={tier.title === "Pro" ? <StarIcon /> : null}
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.cardPricing}>
                  <Grid container justify="center" alignItems="center">
                    <Grid item xs={12}>
                      <Typography
                        component="h2"
                        variant="p"
                        color="secondary"
                        className={classes.price}
                      >
                        <span className={classes.naira}>₦</span>
                        {"10,000"}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="h5"
                        color="textSecondary"
                        className={classes.monthly}
                      >
                        monthly
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        className={classes.discount}
                      >
                        ₦{"57,000"} for 6 months (5% discount)
                      </Typography>
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        className={classes.discount}
                      >
                        ₦{"100,000"} for 12 months (10% discount)
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <ul>
                  <Divider variant="middle" className={classes.divider} />
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                    className={classes.listings}
                  >
                    Up to {250} Listings
                  </Typography>
                  <Divider variant="middle" className={classes.divider} />
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                    className={classes.listings}
                  >
                    Up to {50} Premium Listings
                  </Typography>
                  <Divider variant="middle" className={classes.divider} />
                  <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                    className={classes.listings}
                  >
                    Up to {40} Featured Ad Listings
                  </Typography>
                  <Divider variant="middle" className={classes.divider} />
                </ul>
              </CardContent>
              <CardActions className={classes.buttonContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.subscriptionButton}
                >
                  SUBSCRIBE
                </Button>
              </CardActions>
            </Card>
          </Grid> */}
          {plans.map((plan) => (
            <SubscriptionPlan plan={plan} />
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </div>
  );
}
