import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import NavigationHeader from "../components/navigationHeader";
import SubscriptionPlan from "../components/subscriptionPlan/subscriptionPlan";
import Footer from "../components/footer";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  // cardContainer: {
  //   background: "#F5E9DE",
  //   border: "1px solid #BF7950",
  //   boxSizing: "border-box",
  //   borderRadius: "4px",
  // },
  // cardHeader: {
  //   backgroundColor: theme.palette.primary.main,
  //   color: "white",
  // },
  // cardPricing: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "baseline",
  //   marginBottom: theme.spacing(2),
  //   textAlign: "center",
  // },
  // price: {
  //   fontSize: "2rem",
  //   color: theme.palette.secondary.main,
  // },
  // naira: {
  //   fontSize: "1rem",
  // },
  // monthly: {
  //   color: theme.palette.secondary.main,
  // },
  // discount: {
  //   fontSize: "15px",
  //   // lineHeight: "13px",
  //   textAlign: "center",
  //   color: "rgba(0, 0, 0, 0.51)",
  //   paddingTop: "10px",
  // },
  // listings: {
  //   fontSize: "20px",
  //   color: theme.palette.primary.main,
  //   fontWeight: "bold",
  // },
  // divider: {
  //   margin: "20px 0",
  //   backgroundColor: theme.palette.primary.main,
  //   height: "1px",
  // },
  // buttonContainer: {
  //   textAlign: "center",
  //   // display: "grid",
  //   margin: "0 auto",
  // },
  // subscriptionButton: {
  //   borderRadius: "2px",
  //   // width: "195px",
  //   // height: "49px",
  //   marginLeft: "30%",
  // },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const plans = [
  {
    title: "Free",
    price: "0",
    description: ["10 users included", " ", " ", " "],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
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
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationHeader />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Pricing
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} sm={12} md={4}>
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
          </Grid>
          {plans.map((plan) => (
            <SubscriptionPlan plan={plan} />
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}
