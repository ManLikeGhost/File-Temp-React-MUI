import React from 'react';
import NavigationHeader from '../components/navigationHeader.jsx'
import Typography from "@material-ui/core/Typography";
import SectionTitle from "../components/sectionTitle.jsx";
import MarbleBackground from '../img/MarbleBackground.png'
import Footer from '../components/footer';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';


import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  backgroundImage :{
    height: '80vh',
    backgroundImage: `url(${MarbleBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // width: `calc(100vw + 48px)`,
    
  },

  head: {
    width: "509px",
    padding: "0px 0px 30px 50px",
    color: "#BF7950",
  },

  sub: {
    width: "281px",
    padding: "30px 0px 50px 50px",
    fontSize: "25px",
    color: "#04403A",
    fontFamily: "Metropolis",
  },

  text: {
    padding: "20px 0px 0px 50px",
    width: "466px",
    color: "#04403A",
    fontSize: "25px",
  },

  imgBox1: {
    width: "563px",
    height: "733px",
    border: "1px solid #BF7950",
    boxSizing: "border-box",
  },

  imgBox2: {
    width: "563px",
    height: "733px",
    border: "1px solid #BF7950",
    boxSizing: "border-box",
    padding: "20px 0px 0px 250px",

  },

  marble: {

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
      <div>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="h2" className={classes.head}>More than just about property, it's about legacy.</Typography>
            <Typography variant="h6" className={classes.sub}>Mission statement</Typography>
            <Typography className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. 
              Quis ipsum suspendisse ultrices gravida. 
              Risus commodo viverra maecenas accumsan lacus vel facilisis ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <div className={classes.imgBox1}>
            <Card className={classes.cardImg}>
              <CardMedia
              className={classes.marble}
              image = "src/img/Marble 8.png"
              title= "marble image"
              />
            </Card>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
        <Grid item xs={6}>
            <div className={classes.imgBox2}>
            <Card className={classes.cardImg}>
              <CardMedia
              className={classes.marble}
              image = "src/img/Marble 8.png"
              title= "marble image"
              />
            </Card>
            </div>
          </Grid>


          <Grid item xs={6}>
            <Typography variant="h2" className={classes.head}>More than just about property, it's about legacy.</Typography>
            <Typography className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. 
              Quis ipsum suspendisse ultrices gravida. 
              Risus commodo viverra maecenas accumsan lacus vel facilisis ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </Typography>
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




