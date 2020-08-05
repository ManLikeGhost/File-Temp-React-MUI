import React from 'react';
import NavigationHeader from '../navigationHeader.jsx'
import MarbleBackground from '../../img/MarbleBackground.png'
import Footer from '../footer';
import SaleRentShortlet from '../home/saleRentShortlet';


import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
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
  root :{
    background: "#F5E9DE",
    width: "324px",
    height: "200px",
    left: "848px",
    top: "189px",
    border: "0.8px solid #BF7950",
    boxsizing: "border-box",
    borderradius: "2px" 
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

  Typography: {
    width: "235px",
    height: "50px",
    left: "894px",
    top: "236px",
    fontfamily: "Metropolis",
    fontstyle: "normal",
    fontweight: "500",
    fontsize: "25px",
    lineheight:"25px",
    textalign: "center !important",
    color: "#ffff"
  },


  text: {
    padding: "20px 80px",
    color: theme.palette.primary.main,
    fontSize: "30px",
    textalign: "center",
  },

  all: {
    padding: "10px",
  },
  
  result: {
    width: "630px",
    height: "71px",
    left: "108px",
    top:"598px", 
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    boxsizing: "border-box",
    borderradius: "2px",
    margin: "10px", 

  },
  
  itemCard: {
    width: "629.34px",
    height: "261.67px",
    left: "108px",
    top: "694px",
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    borderradius: "2px",
    margin: "10px"
  },
  divider: {
    margin: "20px 0",
    backgroundColor: theme.palette.primary.main,
    height: "1px",
  },
  
  button: {
    marginLeft: "60px",
    color: theme.palette.primary.contrastText,
    fontSize: 21,
    borderRadius: 1,
    border: `2px solid ${theme.palette.primary.main}`
  },
 
}));


const ForRent = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <NavigationHeader />
        <Grid container 
          direction="row"
          justify="center" 
          alignItems="center"
          fluid 
          spacing={3}
        >
          <Grid className={classes.all} container xs={8}>
            <Grid item xs={8}>
                <Typography variant="h5" component="h2" style={{textAlign:"center"}}>Flats for rent in Nigeria
                </Typography>
            </Grid>
            <Grid className="text-center" >
              <Card className={classes.filters} variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">Quick Filters</Typography>
                </CardContent>
                <CardActions>
                  <Button  size="small" color="primary">
                    1 Bedroom
                  </Button>
                  <Button  size="small" color="primary">
                    2 Bedroom
                  </Button>
                  <Button  size="small" color="primary">
                    3 Bedroom
                  </Button>
                  <Button  size="small" color="primary">
                    4 Bedroom
                  </Button>
                  <Button  size="small" color="primary">
                    +5 Bedroom
                  </Button>
                </CardActions>
                <CardActions>
                  <Button  size="small" color="primary">
                    Miniflat
                  </Button>
                  <Button  size="small" color="primary">
                    Singleroom
                  </Button>
                </CardActions>
                <CardActions>
                  <Button  size="small" color="primary">
                    Serviced
                  </Button>
                  <Button  size="small" color="primary">
                    Furnished
                  </Button>
                  <Button  size="small" color="primary">
                    Non-Furnished
                  </Button>
                </CardActions>
              </Card> 
          </Grid>
          <br />
          <Grid item xs={8}> 
            <Card className={classes.result} variant="outlined">
              <CardContent>Results 1-2 of 2</CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Card className={classes.itemCard} variant="outlined">
              <CardMedia/>
              <Divider orientation="vertical" className={classes.divider} />
            
            </Card>
          </Grid>  
          </Grid>
          <Grid container xs={4}>
            <Grid item xs={12}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">Can’t find your ideal 
                    property?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" size="small" color="primary">
                    POST A REQUEST 1
                  </Button>
                </CardActions>
              </Card>
              </Grid>
          </Grid>

     
        </Grid>
              
      <SaleRentShortlet />
      <Footer />


    </div>
  );
};
export default ForRent;




