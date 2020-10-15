
import React from 'react'

//import MarbleBackground from "../../img/MarbleBackground.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    backgroundImage: {
      height: "80vh",
      //backgroundImage: `url(${MarbleBackground})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      margin: "0px 5px 0px 50px",
      // width: `calc(100vw + 48px)`,
    },

    blogpic: {
        width: "100%",
        height: "50%",
    },
  
    blogCard: {
        width: "311px",
        height: "352px",
        border: "2px solid #BF7950",
    },
  
    blogArtHold: {
        padding: "0px 0px 20px 0px",
    },

    headertext: {
        width: "260px",
        height: "25px",
        fontFamily: "Metropolis",
        fontStyle: "normal",
        fontSize: "25px",
        color: "#BF7950",
        padding: "0px 0px 10px 20px",
    },
  
    ptext: {
        width: "269px",
        height: "40px",
        fontFamily: "Metropolis",
        fontStyle: "normal",
        fontSize: "20px",
        color: "rgba(0, 0, 0, 0.51)",
        padding: "10px 0px 10px 20px"
    },
  
      
    category: {
        width: "86px",
        height: "16px",
        fontFamily: "Metropolis",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "16px",
        color: "#04403A",
        padding: "60px 0px 0px 10px  ",
    },
  
    date: {
        padding: "60px 0px 0px 20px  ",
        float: "right",
    },
  
}));



const BlogProperty = ({ title, imagePath, text, type, date, ...BlogProperty }) => {
    const classes = useStyles();
    return (
        <div>
           <Grid container spacing={3} className={classes.blogArtHold}> 
                <Grid item xs={4}>
                <div className={classes.blogCard}> 
                    <img className={classes.blogpic}  alt="House with bule background" src={imagePath || 'http://placehold.it/200'}/>
                    <Grid container>
                    <Grid item xs={12}><Typography className={classes.headertext}>{title}</Typography></Grid>
                    <Grid item xs={12}><Typography className={classes.ptext}>{text}</Typography></Grid>
                    <Grid item xs={4}><Typography className={classes.category}>{type}</Typography></Grid>
                    <Grid item xs={6}><Typography className={classes.date}>{date}</Typography></Grid>
                    </Grid>
                </div>
                </Grid>
            </Grid>
 
        </div>
    )
}

export default BlogProperty;


     
  









        