import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    background: "#F5E9DE",
    border: "1px solid #BF7950",
    boxSizing: "border-box",
    borderRadius: "4px",
    width: "300px",
    margin: "0 auto",
    marginBottom: "50px",
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
    textAlign: "center",
  },
  price: {
    fontSize: "2rem",
    color: theme.palette.secondary.main,
  },
  naira: {
    fontSize: "1rem",
  },
  monthly: {
    color: theme.palette.secondary.main,
  },
  discount: {
    fontSize: "15px",
    // lineHeight: "13px",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.51)",
    paddingTop: "10px",
  },
  listings: {
    fontSize: "20px",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  divider: {
    margin: "20px 0",
    backgroundColor: theme.palette.primary.main,
    height: "1px",
  },
  buttonContainer: {
    textAlign: "center",
    // display: "grid",
    margin: "0 auto",
  },
  subscriptionButton: {
    borderRadius: "2px",
    // width: "195px",
    // height: "49px",
    marginLeft: "30%",
  },
}));
const SubscriptionPlan = (props) => {
  const classes = useStyles();
  const { plan } = props;
  return (
    <div>
      <Grid item key={plan.title} xs={12} sm={12} md={4}>
        <Card className={classes.cardContainer}>
          <CardHeader
            title={plan.title}
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
                    {plan.price}
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
                    ₦{plan.discount1} for 6 months (5% discount)
                  </Typography>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    className={classes.discount}
                  >
                    ₦{plan.discount2} for 12 months (10% discount)
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
                Up to {plan.listing1} Listings
              </Typography>
              <Divider variant="middle" className={classes.divider} />
              <Typography
                component="li"
                variant="subtitle1"
                align="center"
                className={classes.listings}
              >
                Up to {plan.listing2} Premium Listings
              </Typography>
              <Divider variant="middle" className={classes.divider} />
              <Typography
                component="li"
                variant="subtitle1"
                align="center"
                className={classes.listings}
              >
                Up to {plan.listing3} Featured Ad Listings
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
    </div>
  );
};

export default SubscriptionPlan;
