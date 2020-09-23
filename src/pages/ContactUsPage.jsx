import React from 'react'
import NavigationHeader from "../components/navigationHeader.jsx";
import MarbleBackground from "../img/MarbleBackground.png";
import Footer from "../components/footer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
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

    form: {
        width: "1064px",
        height: "1101px",
        background: "#FFFFFF",
        border: "0.8px solid #BF7950",
        boxSizing: "border-box",
        boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.1)",
        borderRadius: "2px",
    },

}));




const ContactUsPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.backgroundImage}>
            <NavigationHeader />
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h3">Questions, inquiries...We would love to hear from you. Email us.</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={classes.form}>
                            <form className={classes.root} noValidate autoComplete="off">
                                <FormControl>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <TextField 
                                                id="name"
                                                label="Name"
                                                variant="outlined"
                                                color="secondary"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField 
                                                id="email"
                                                label="Email"
                                                variant="outlined"
                                                color="secondary"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField 
                                                id="subject"
                                                label="Subject"
                                                variant="outlined"
                                                color="secondary"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextareaAutosize
                                                rowsMax={20}
                                                aria-label="maximum height"
                                                style={{
                                                width: "39rem",
                                                height: "10rem",
                                                }}
                                            />
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
                        <div>
                            <img className={classes.pic} src={contactUs} alt="contactUsMap"/>
                        </div>

                </Grid>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUsPage
