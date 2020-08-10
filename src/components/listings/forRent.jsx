import React from 'react';
import NavigationHeader from '../navigationHeader.jsx'
import MarbleBackground from '../../img/MarbleBackground.png'
import Footer from '../footer';
import SaleRentShortlet from '../home/saleRentShortlet';


import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  backgroundImage :{
    height: '80vh',
    backgroundImage: `url(${MarbleBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // width: `calc(100vw + 48px)`,
    
  },
  cardRight :{
    background: "#F5E9DE",
    width: "324px",
    height: "200px",
    left: "848px",
    top: "189px",
    border: "0.8px solid #BF7950",
    boxsizing: "border-box",
    borderradius: "2px",
    margin: "0px 0px 10px 0px", 
  },

  filters :{
    width: "630px",
    height: "199px",
    left: "108px",
    top: "373px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    boxsizing: "border-box",
    borderradius: "2px",
    margin: "10px"
  },
  
  homeImg :{
    width: "629.34",
    height: "261.67px",
    left: "108px",
    top: "694px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    borderradius: "2px",
    margin: "10px 0px 0px 0px",
  }, 

  dropdownMenu: {
    width: "630px",
    height: "71px",
    left: "108px",
    top: "598px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    boxsizing: "border-box",
    borderradius: "2px",
  },

  all: {
    padding: "10px",
  },
  
  holder: {
    margin: "20px 50px 20px 50px",
  },

  typo: {
    width: "235px",
    height: "50px",
    left: "894px",
    top: "236px",
    fontFamily: "Metropolis",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "25px",
    lineHeight: "25px",
    color: "#04403A",
  },

  typohead: {
    width: "525px",
    height: "65px",
    left: "108px",
    top: "230px",
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "49px",
    padding: "0px 0px 0px 10px",
    lineHeight: "65px",
    color: "#BF7950"
  },

  bar: {
    width: "630px",
    height: "299px",
    left: "108px",
    top: "373px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    boxSizing: "border-box",
    borderRadius: "2px",
    margin: "0px 0px 10px 0px",
  },
  
  button: {
    marginLeft: "60px",
    color: theme.palette.primary.contrastText,
    fontSize: 21,
    borderRadius: 1,
    border: `2px solid ${theme.palette.primary.main}`
  },
  
  aFilters: {
    width: "323.89px",
    height: "531.52px",
    left: "848.11px",
    top: "438px",
    background: "#FFFFFF",
    border: "0.8px solid #BF7950",
    borderradius: "2px"

  },

  textpaper: {
     textalign: "center"
  },
 
}));


const ForRent = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <NavigationHeader />
      <div className={classes.holder}>
        <Grid container spacing={3}>
          {//left-column  
          }
          <Grid item container xs={8}>
            <Grid item>
              <Typography  className={classes.typohead} color="textSecondary" >Flats for rent in Nigeria </Typography>
            </Grid>

            <Grid item>
              <Card className={classes.bar} variant="outlined">
                <CardContent>
                  <Typography  className={classes.typo}>
                    Quick Filters
                  </Typography>
                </CardContent> 
                <CardActions>
                  <Button color="primary">1 Bedroom</Button>
                  <Button color="primary">2 Bedroom</Button>
                  <Button color="primary">3 Bedroom</Button>
                  <Button color="primary">4 Bedroom</Button>
                  <Button color="primary">+5 Bedroom</Button>
                </CardActions>
                <CardActions>
                  <Button color="primary">Mini Flat</Button>
                  <Button color="primary">Single Room</Button>
                  <Button color="primary">1 Bedroom</Button>
                </CardActions>
                <CardActions>
                  <Button color="primary">Serviced</Button>
                  <Button color="primary">Furnished</Button>
                  <Button color="primary">Non-Furnished</Button>
                </CardActions> 
              </Card>
              <Card className={classes.dropdownMenu} variant="outlined">
                <Grid container>
                  <Grid item xs={6}>
                    <Typography  className={classes.dropText}>
                      Results 1-2 of 2 
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography  className={classes.dropText}>
                      Menu 
                    </Typography>
                  </Grid>  
                </Grid>
              </Card>
              <Card className={classes.homeImg} variant="outlined">
                <CardMedia className={classes.img} />
                <Divider orientation="vertical" flexItem />
              </Card>
            </Grid>
          </Grid>


          {//right-column  
          }
          <Grid item container xs={4}>
            <Grid item xs={12}>
              <Card className={classes.cardRight} variant="outlined">
                <CardContent>
                  <Typography  className={classes.typo} color="textSecondary" gutterBottom>
                    Can’t find your ideal property?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained"color="primary">POST A REQUEST</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.aFilters}>
                <div className={classes.paperform}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography  className={classes.textpaper} color="textSecondary">
                        <FilterListIcon />Advanced Filters
                      </Typography>
                    </Grid>
                    <Grid item container xs={12}>

                    </Grid>
                  </Grid>

                </div>
              </Paper>
            </Grid>  
          </Grid>
        </Grid>
      </div>
              
      <SaleRentShortlet />
      <Footer />


    </div>
  );
};
export default ForRent;




