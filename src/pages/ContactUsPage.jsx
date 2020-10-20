import React from 'react'
import NavigationHeader from "../components/navigationHeader.jsx";
import MarbleBackground from "../img/MarbleBackground.png";
import Footer from "../components/footer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MapContainer from "../components/contactUs/googleMap"
import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";


import contactUs from "../img/ContactUsMap.png";

import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    backgroundImage: {
      height: "80vh",
      backgroundImage: `url(${MarbleBackground})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      margin: "0px 5px 0px 50px",
      // width: `calc(100vw + 48px)`,
    },

    contactUs: {
        margin: "0px 0px 0px 100px",
    },

    form: {
        width: "1064px",
        height: "1101px",
        background: "#FFFFFF",
        border: "0.8px solid #BF7950",
        boxSizing: "border-box",
        boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.1)",
        borderRadius: "2px",
    },

    contactText: {
        width: "873px",
        height: "279px",
        fontFamily: "Playfair Display",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "70px",
        color: "#BF7950",
    },

    input: {
        width: "950px",
        height: "55px",
        background: "#FFFFFF",
        //border: "0.5px solid #BF7950",
        //boxSizing: "border-box",
        //borderRadius: "2px",
    },

    nameInput: {
        
        padding: "50px 25px 15px 25px",
        
    },

    map: {
        padding: "20px 0px 0px 0px"
    },

    //message: {
        //width: "950px",
        //height: "466px",
        //background: "#FFFFFF",
        //border: "0.5px solid #BF7950",
        //boxSizing: "border-box",
        //borderRadius: "2px",
    //},
    
}));




const ContactUsPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.backgroundImage}>
            <NavigationHeader />
            <div className={classes.contactUs}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography className={classes.contactText} variant="h3">Questions, inquiries...We would love to hear from you. Email us.</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={classes.form}>
                            <form className={classes.root} noValidate autoComplete="off">
                                <FormControl>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <div className={classes.nameInput}>                                            
                                                <TextField 
                                                    id="name"
                                                    className={classes.input}
                                                    label="Name"
                                                    variant="outlined"
                                                    color="secondary"
                                                />
                                            </div>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <div className={classes.nameInput}>
                                                <TextField 
                                                    id="email"
                                                    className={classes.input}
                                                    label="Email"
                                                    variant="outlined"
                                                    color="secondary"
                                                />
                                            </div>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <div className={classes.nameInput}>
                                                <TextField 
                                                    id="subject"
                                                    className={classes.input}
                                                    label="Subject"
                                                    variant="outlined"
                                                    color="secondary"
                                                />
                                            </div>    
                                        </Grid>

                                        <Grid item xs={12}>
                                            <div className={classes.nameInput}>
                                                <TextareaAutosize
                                                    className={classes.message}
                                                    rowsMax={20}
                                                    aria-label="maximum height"
                                                    style={{
                                                    width: "950px",
                                                    height: "466px",
                                                    }}
                                                />
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={6}></Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                            > Send Message </Button>
                                        </Grid>
                                    </Grid>
                                </FormControl>    
                            </form>    
                        </div>
                
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.map}>
                            {/* <img className={classes.pic} src={contactUs} alt="contactUsMap"/> */}
                            <MapContainer />
                        </div>
                    </Grid>    

                </Grid>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUsPage
