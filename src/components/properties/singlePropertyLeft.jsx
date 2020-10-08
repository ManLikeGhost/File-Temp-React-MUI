import React from 'react'


import { makeStyles } from "@material-ui/core/styles";

import SinglePageHouse from "../../img/SinglePageHouse.png";
import SinglePageBathroom3 from "../../img/SinglePageBathroom3.png";
import SinglePageBedroom1 from "../../img/SinglePageBedroom1.png";
import SinglePageBathroom1 from "../../img/SinglePageBathroom1.png";
import SinglePageBathroom2 from "../../img/SinglePageBathroom2.png";
import SinglePageKitchen from "../../img/SinglePageKitchen.png";
import SinglePageLivingroom from "../../img/SinglePageLivingroom.png";
import Bedrooms from "../../img/bedrooms.png";
import Bathrooms from "../../img/bathrooms.png";
import Parkinglotspace from "../../img/parkinglotspace.png";
import Toilet from "../../img/Toilet.png";


import { Grid, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles((theme) => ({

    img: {
        width: "745px", 
        height: "1105px",
        background: "#FFFFFF",
        border: "1px solid #BF7950",
        boxSizing: "border-box",
        borderRadius: "2px",
    },
        
    feat: {
        width: "745px",
        height: "165px",
        background: "#FFFFFF",
        border: "0.8px solid #BF7950",
        boxSizing: "border-box",
        margin: "20px 0px 0px 0px"
    },
        
    text: {
        width: "745px",
        height: "513px",
        background: "#FFFFFF",
        border: "0.8px solid #BF7950",
        boxSizing: "border-box",
        margin: "20px 0px 0px 0px"
    },

    firstImg: {
        width: "670px",
        height: "519px",
        border: "0.8px solid #BF7950",
        borderRadius: "2px",
        margin: "20px 0px 10px 35px"
    },

    oneImg: {
        padding: "0px 0px 0px 0px",
    },

    secondImg: {
        width: "152px",
        height: "229px",
        border: "0.8px solid #BF7950",
        boxSizing: "border-box",
        borderRadius: "2px",
        margin: "0px 0px 0px 7px"
    },

    thirdImg: {
        width: "383px",
        height: "271px",
        border: "0.8px solid #BF7950",
        boxSizing: "border-box",
        margin: "0px 0px 0px 20px"
    },

    fourthImg: {
        width: "270px",
        height: "270px",
        border: "0.8px solid #BF7950",
        boxSizing: "border-box",
        margin: "0px 0px 0px 60px"
    },

    paraheader: {
        color: "#04403A",
        padding: "20px 0px 30px 30px",
        fontFamily: "Playfair Display",
        //width: "254px",
        //height: "35px",
        //fontStyle: "normal",
        //fontWeight: "bold",
        //fontSize: "26px",
        //lineHeight: "35px",
    },

    paratext: {
        fontFamily: "Metropolis",
        //textAlign: "justify",
        color: "rgba(0, 0, 0, 0.51)",
        Padding: "50px 50px 50px 50px",
    },

    center: {
        padding: "25px 25px 25px 25px",
        
    }

}));






const SinglePropertyLeft = ({property}) => {
    const classes = useStyles();
    return (
        <div className={classes.BackgroundImage}>

            <div className={classes.img}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className={classes.firstImg}>
                            <img className={classes.oneImg} alt="" src={SinglePageHouse} />
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className={classes.secondImg}>
                            <img src={SinglePageBathroom3} alt=""/>
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className={classes.secondImg}>
                            <img src={SinglePageBathroom1} alt=""/>
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className={classes.secondImg}>
                            <img src={SinglePageBedroom1} alt=""/>
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className={classes.secondImg}>
                            <img src={SinglePageBathroom2} alt=""/>
                        </div>
                    </Grid>



                    <Grid item xs={6}>
                        <div className={classes.thirdImg}>
                            <img src={SinglePageKitchen} alt=""/>
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className={classes.fourthImg}>
                            <img src={SinglePageLivingroom} alt=""/>
                        </div>
                    </Grid>

                </Grid>
                
            </div>

            <div className={classes.feat}>
                <Grid container>
                    <Grid item container xs={3}>
                        <div className={classes.center}>
                            <Grid item xs={12}>
                                <div>
                                    <img src={Bedrooms} alt=""/>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                4 Bedrooms
                            </Grid>
                        </div>
                    </Grid>
                    
                    <Grid item container xs={3}>
                    <div className={classes.center}>
                        <Grid item xs={12}>
                            <div>
                                <img src={Bathrooms} alt=""/>
                            </div>
                        </Grid>
                        <Grid item xs={12}>    
                            4 Baths  
                        </Grid>
                    </div>  
                    </Grid>

                    <Grid item container xs={3}>
                    <div className={classes.center}>
                        <Grid item xs={12}>
                            <div>
                                <img src={Toilet} alt=""/>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            5 Toilets
                        </Grid>
                    </div>
                    </Grid>
                    
                    <Grid item container xs={3}>
                    <div className={classes.center}>
                        <Grid item xs={12}>
                        <div >
                            <img src={Parkinglotspace} alt=""/>
                        </div>
                        </Grid>
                        <Grid item xs={12}>
                            4 Parking Space
                        </Grid>
                    </div>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.text}>
                <Grid container>
                    <Grid item xs={12}> 
                        <Typography variant="h3" className={classes.paraheader}>
                            Property Description
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography  className={classes.paratext}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. 
                            Quis ipsum suspendisse ultrices gravida. 
                            Risus commodo viverra maecenas accumsan lacus vel facilisis ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Quis ipsum suspendisse ultrices gravida. 
                        </Typography>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default SinglePropertyLeft
