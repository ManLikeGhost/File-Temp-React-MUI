import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import NavigationHeader from "../components/navigationHeader";
import Footer from "../components/footer";
import SubscriptionPlan from "../components/subscriptionPlan/subscriptionPlan";

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
  cardContainer: {
    background: "#F5E9DE",
    border: "1px solid #BF7950",
    boxSizing: "border-box",
    borderRadius: "4px",
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
    textAlign: "center"
  },
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
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
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
            <Card  className={classes.cardContainer}>
              <CardHeader
                title="STANDARD"
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
                        variant="h3"
                        color="textPrimary"
                      >
                        ₦{"0"}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6" color="textSecondary">
                        monthly
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <ul>
                  <Typography component="li" variant="subtitle1" align="center">
                    "20 users included"
                  </Typography>
                  <Typography component="li" variant="subtitle1" align="center">
                    "20 users included"
                  </Typography>
                  <Typography component="li" variant="subtitle1" align="center">
                    "20 users included"
                  </Typography>
                  <Typography component="li" variant="subtitle1" align="center">
                    "20 users included"
                  </Typography>
                  <Typography component="li" variant="subtitle1" align="center">
                    "20 users included"
                  </Typography>
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant="contained" color="primary">
                  SUBSCRIBE
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}
