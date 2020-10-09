import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//import Link from "@material-ui/core/Link";
import AdvancedSearchFilter from "../advancedSearchFilter"; 

import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import MarketedBY from "../../img/MarketedBY.png";
import FacebookIcon from "../../img/facebookIcon.png";
import TwitterIcon from "../../img/twitterIcon.png";
import LinkedInIcon from "../../img/linkedInIcon.png";
import InstagramIcon from "../../img/instagramIcon.png";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  postARequestContainer: {
    background: "#F5E9DE",
    border: `0.8px solid ${theme.palette.primary.main}`,
    boxSizing: "border-box",
    borderRadius: "2px",
    padding: theme.spacing(8),
    color: theme.palette.primary.main,
    marginBottom: "20px",
  },
  postARequestText: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: theme.spacing(3),
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(3),
  },

  //marketedBYFeature
  marketedBy: {
    width: "360px",
    height: "364px",
    background: "#FFFFFF",
    border: "1px solid #BF7950",
    boxSizing: "border-box",
    boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.1)",
    borderRadius: "2px",
    margin: "0px 0px 20px 0px",
  },

  marketedByimg: {
    padding: "0px 0px 0px 50px",
  },

  marketedBytext: {
    padding: "0px 0px 0px 20px",
    color: "#BF7950",
    fontFamily: "Metropolis",
    //fontStyle: normal;
    fontWeight: "bold",
    //fontSize: 26px;
    //width: "191px",
    //height: "26px",
  },

  marketedByNumber: {
    color: "#04403A",
    fontFamily: "Metropolis",
    padding: "0px 0px 20px 20px",
  },

  markettedByContainer: {
    background: "#F5E9DE",
    borderBottom: `0.8px solid ${theme.palette.primary.main}`,
    margin: "0px 0px 10px 0px",
  },

  marketedByItems: {
    padding: "0px 0px 0px 20px",
    fontFamily: "Gilroy-Light",
    color: "#04403A"
  },

  //marketedBYFeature


  
  textRight: { textAlign: "right", paddingRight: "10px" },

  button: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "2px",
    fontSize: theme.spacing(2),
    color: "white",
    width: "100%",
    height: theme.spacing(7),
    "&:hover": {
      backgroundColor: "white",
      boxShadow: "none",
      color: theme.palette.primary.main,
      borderRadius: "2px",
      border: `0.8px solid ${theme.palette.primary.main}`,
    },
  },
  newsletterTitle: {
    textAlign: "left",
    fontWeight: "bold",
    color: theme.palette.secondary.main,
    fontSize: "30px",
    // lineHeight: "21px",
  },
  newsletterDesc: {
    fontSize: "18px",
    color: "rgba(0, 0, 0, 0.51)",
    margin: "30px 0",
  },

  socialMedia: {
    width: "360px",
    height: "47px",
    border: `0.8px solid ${theme.palette.primary.main}`,
    margin: "0px 0px 20px 0px",
    padding: "10px 0px 0px 0px",
    backgroundColor: "#F5E9DE",
  },
}));

const PostARequestButton = withStyles({
  root: {
    backgroundColor: " #BF7950",
    borderColor: "white",
    borderRadius: "2px",
    boxShadow: "none",
    color: "white",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    height: "50px",
    // border: "1px solid",
    lineHeight: 1.5,
    "&:hover": {
      backgroundColor: "white",
      borderColor: "white",
      boxShadow: "none",
      color: "#BF7950",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "white",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);
const SinglePropertyRight = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.marketedBy}>
        <div className={classes.markettedByContainer}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={2}>
              <PermContactCalendarIcon color="secondary" fontSize="large" />
            </Grid>
            <Grid item xs={10}>
              <Typography className={classes.advancedFilterTitleText}>
                Marketed by
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container >
            <Grid item xs={12}>
              <div className={classes.marketedByimg}>
                <img src={MarketedBY} alt=""/>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.marketedBytext} variant="h5">
                Acme Property
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.marketedByNumber} variant="h5">
                080 XXX 
              </Typography>
            </Grid>
            <Grid item container >
              <Grid item container xs={12} className={classes.marketedByItems}>
                  <Grid item xs={2}>
                    <RoomOutlinedIcon />
                  </Grid>
                  <Grid item xs={10}>
                    25 Maloney Street, Lagos Island, Lagos State.
                  </Grid>
              </Grid>

              <Grid item container xs={12} className={classes.marketedByItems}>
                  <Grid item xs={2}>
                    <PhoneInTalkOutlinedIcon />
                  </Grid>
                  <Grid item xs={10}>
                    08 123 456 789, 07 123 456 789
                  </Grid>
              </Grid>

              <Grid item container xs={12} className={classes.marketedByItems}>
                <Grid item xs={2}>
                  <ChatBubbleOutlineOutlinedIcon />
                </Grid>
                <Grid item xs={10}>
                  + 234 8 987 654 321
                </Grid>
              </Grid>

              <Grid item  container xs={12} className={classes.marketedByItems}>
                <Grid item xs={2}>
                  <LanguageOutlinedIcon />
                </Grid>
                <Grid item xs={10}>
                  www.acmepropertyltd.com
                </Grid>
                
              </Grid>
            </Grid>
          </Grid>
          
        </div>
      </div>
      {
        //ADVANCED FILTER COMPONENT
      }
       <AdvancedSearchFilter />
      {
        //ADVANCED FILTER COMPONENT
      }
      <div className={classes.socialMedia}>
        <Grid 
          container
          justify="center"
          alignItems="center"
        >
          <Grid item xs={1}>
            <ShareOutlinedIcon /> 
          </Grid>

          <Grid item xs={6}>
            Share this Property
          </Grid>

          <Grid item xs={1}>
            <img src={FacebookIcon} alt=""/>
          </Grid>
          
          <Grid item xs={1}>
            <img src={TwitterIcon} alt=""/>
          </Grid>
          
          <Grid item xs={1}>
            <img src={LinkedInIcon} alt=""/>
          </Grid>
          
          <Grid item xs={1}>
            <img src={InstagramIcon} alt=""/>
          </Grid>


        </Grid>
      </div>  
      <Grid
        container
        className={classes.postARequestContainer}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography className={classes.newsletterTitle}>
            Subscribe to our Weekly Newsletter
          </Typography>
          <Typography className={classes.newsletterDesc}>
            Get weekly updates on the best deal on property {"&"} developments
            in Nigeria.
          </Typography>
          <PostARequestButton>SUBSCRIBE</PostARequestButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default SinglePropertyRight;
