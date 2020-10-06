import React from "react";
import NavigationHeader from "../components/navigationHeader.jsx";
//import blogArticleList from "../components/blog/blogArticleList";
import SectionTitle from "../components/sectionTitle.jsx";
import MarbleBackground from "../img/MarbleBackground.png";
import Footer from "../components/footer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import BlogPageImage1 from "../img/BlogPageImage1.png";

import blogPostImage1 from "../img/blogPostImage1.png";
import blogPostImage2 from "../img/blogPostImage2.png";
import blogPostImage3 from "../img/blogPostImage3.png";

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
    
    blogHead: {
      width: "126px",
      height: "80px",
      fontFamily: "Playfair Display",
      fontWeight: "bold",
      fontSize: "60px",
      //textAlign: "center",
      color: "#BF7950",
    },

    blogImgHead: {
      width: "1064px",
      height: "323px",
      border: "2px solid #BF7950",
      padding: "10px 10px 10px 10px"
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

    adjust: {
      padding: "0px 0px 0px 50px"
    },

    imgHeadadjust: {
      padding: "0px 0px 0px 120px",
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

    articleHead: {
        width: "393px",
        height: "40px",
        fontFamily: "Playfair Display",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "30px",
        color: "#BF7950",
        padding: "10px 0px 0px 0px"
    },

    articlebody: {
        width: "1064px",
        height: "884px",
        fontFamily: "Metropolis",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "25px",
        lineHeight: "25px",
        color: "rgba(0, 0, 0, 0.51)",
        padding: "10px 0px 0px 0px "
    },



}));


const BlogPageArticle = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <NavigationHeader />
      <div className={classes.adjust}>
          <SectionTitle>Blog</SectionTitle>
          <div className={classes.imgHeadadjust}>
          <Grid container >
            <Grid item xs={12}>
              <div className={classes.blogImgHead}>
                <img className={classes.pic} alt="jumbo" src={BlogPageImage1}/>
              </div> 
            </Grid>
          </Grid>
          </div> 
          <div >
            <Grid container>
              <Grid item xs={12}>
                <Typography className={classes.articleHead}>
                  Millions in real estate
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography className={classes.articlebody} variant="p">
                  Real estate can make you a millionaire.

                  Sure, this might sound like the promise of a late-night television salesperson trying to get you to attend the latest "free seminar," but the reality exists: real estate is a powerful wealth building tool that has made millions of individuals millionaires.

                  Could you be next?

                  Maybe - but here's the catch: not everyone who buys a piece of property becomes rich. In fact-  many people buy real estate only to find stress and empty bank accounts. They struggle for years and years but never build the kind of wealth they've dreamed of (or the riches promised by the late night TV guru.)

                  So - how does someone use real estate to truly become a millionaire?

                  As I discussed recently in the longest article I've ever written, How to Become a Millionaire, there are four primary “wealth generators” at play when you invest in real estate, depending on the strategy you get into:

                  Cash Flow. This is the extra income you’ll get to keep each month (or year) that you own the property. Cash flow can be deceptive because it fluctuates when certain repairs are higher or lower in different months, so it’s important to factor in non-monthly costs like vacancy (the amount of time the property sits vacant), repairs, capital expenditures (expensive projects that need to be replaced on a home every so often, like appliances, roofs, windows, plumbing, etc.), along with the regular expenses (utilities, management, etc.).

                  Appreciation. When the value of a property increases, we call this “appreciation.” While appreciation is not always guaranteed (just ask people who bought in 2006 and sold in 2010!), over time, historically, real estate has always increased in America, averaging 3% per year over the past century. Another type of appreciation that can come into play is known as “forced appreciation,” the concept of increasing the value by physically improving the property.
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  Real Estate
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography>
                  09 september 2020
                </Typography>
              </Grid>
              
              {//profile picture. about author
              }
              <Grid item xs={12}>
                
              </Grid>

            </Grid>
          </div>
          <SectionTitle>Related Articles</SectionTitle>
          <Grid container spacing={3} className={classes.blogArtHold}> 
            <Grid item xs={4}>
              <div className={classes.blogCard}>
                <img className={classes.blogpic}  alt="House with bule background" src={blogPostImage1}/>
                <Grid container>
                  <Grid item xs={12}><Typography className={classes.headertext}>Millions in real Estate</Typography></Grid>
                  <Grid item xs={12}><Typography className={classes.ptext}>Real estate can make you a millionaire.</Typography></Grid>
                  <Grid item xs={4}><Typography className={classes.category}>Real Estate</Typography></Grid>
                  <Grid item xs={6}><Typography className={classes.date}>09 september, 2020</Typography></Grid>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className={classes.blogCard}>
                <img className={classes.blogpic}  alt="House with bule background" src={blogPostImage2}/>
                <Grid container>
                  <Grid item xs={12}><Typography className={classes.headertext}>Estate housing</Typography></Grid>
                  <Grid item xs={12}><Typography className={classes.ptext}>Get the best estate housing at a very affordable price.</Typography></Grid>
                  <Grid item xs={4}><Typography className={classes.category}>Real Estate</Typography></Grid>
                  <Grid item xs={6}><Typography className={classes.date}>09 september, 2020</Typography></Grid>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className={classes.blogCard}>
                <img className={classes.blogpic}  alt="House with bule background" src={blogPostImage3}/>
                <Grid container>
                  <Grid item xs={12}><Typography className={classes.headertext}>Houses on island</Typography></Grid>
                  <Grid item xs={12}><Typography className={classes.ptext}>There are some things youneed to know about....</Typography></Grid>
                  <Grid item xs={4}><Typography className={classes.category}>Real Estate</Typography></Grid>
                  <Grid item xs={6}><Typography className={classes.date}>09 september, 2020</Typography></Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Footer />
      </div>
    </div>        


);
};

export default BlogPageArticle;
