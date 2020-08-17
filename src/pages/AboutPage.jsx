import React from 'react';
import NavigationHeader from '../components/navigationHeader.jsx'
import Typography from "@material-ui/core/Typography";
import SectionTitle from "../components/sectionTitle.jsx";
import MarbleBackground from '../img/MarbleBackground.png'
import Footer from '../components/footer';
import Grid from '@material-ui/core/Grid';


import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  backgroundImage :{
    height: '80vh',
    backgroundImage: `url(${MarbleBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // width: `calc(100vw + 48px)`,
    
  },
  text: {
    padding: "20px 80px",
    color: theme.palette.primary.main,
    fontSize: "30px",
    textAlign: "justify",
  },

  holder: {
    margin: "20px 50px 20px 100px",
  },

  button: {
    marginLeft: "60px",
    color: theme.palette.primary.contrastText,
    fontSize: 21,
    borderRadius: 1,
    border: `2px solid ${theme.palette.primary.main}`
  },
 
}));

const AboutPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <NavigationHeader />
      <SectionTitle>More about Terrell Davies Enterprise</SectionTitle>
        <Typography className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididuntut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
            lacus vel facilisis ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel faca
          </Typography>

        <SectionTitle>Meet our Team </SectionTitle>
        <div className={classes.holder}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={4}>
              <Avatar alt="" src="" className={classes.large} />
            </Grid>
            <Grid item xs={4}>
              <Avatar alt="" src="" className={classes.large} />
            </Grid>
            <Grid item xs={4}>
              <Avatar alt="" src="" className={classes.large} />
            </Grid>
            <Grid item xs={4}>
              <Avatar alt="" src="" className={classes.large} />
            </Grid>
            <Grid item xs={4}>
              <Avatar alt="" src="" className={classes.large} />
            </Grid>
            <Grid item xs={4}>
              <Avatar alt="" src="" className={classes.large} />
            </Grid>  
          </Grid>
        </div>  
        <SectionTitle>Why Terrell Davies</SectionTitle>
        <SectionTitle>Testimonials</SectionTitle>
        <SectionTitle>Strategic Partners</SectionTitle>  
        <Footer />


    </div>
  );
};
export default AboutPage;




