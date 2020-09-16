import React from "react";
import NavigationHeader from "../components/navigationHeader.jsx";
//import blogArticleList from "../components/blog/blogArticleList";
import SectionTitle from "../components/sectionTitle.jsx";
import MarbleBackground from "../img/MarbleBackground.png";
import Footer from "../components/footer";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Pagination } from '@material-ui/lab';


import BlogPageImage1 from "../img/BlogPageImage1.png";
import blogPostImage1 from "../img/blogPostImage1.png";
import blogPostImage2 from "../img/blogPostImage2.png";
import blogPostImage3 from "../img/blogPostImage3.png";
import blogPostImage4 from "../img/blogPostImage4.png";
import blogPostImage5 from "../img/blogPostImage5.png";
import blogPostImage6 from "../img/blogPostImage6.png";

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
      padding: "0px 0px 0px 50px",
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
      padding: "60px 0px 0px 0px  ",
    },

    date: {
      padding: "60px 0px 0px 20px  ",
      float: "right",
    },

}));


const BlogPage = () => {
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
          <SectionTitle>Latest Articles</SectionTitle>
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
                  <Grid item xs={12}><Typography className={classes.headertext}>Millions in real Estate</Typography></Grid>
                  <Grid item xs={12}><Typography className={classes.ptext}>Real estate can make you a millionaire.</Typography></Grid>
                  <Grid item xs={4}><Typography className={classes.category}>Real Estate</Typography></Grid>
                  <Grid item xs={6}><Typography className={classes.date}>09 september, 2020</Typography></Grid>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className={classes.blogCard}>
                <img className={classes.blogpic}  alt="House with bule background" src={blogPostImage3}/>
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
                <img className={classes.blogpic}  alt="House with bule background" src={blogPostImage4}/>
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
                <img className={classes.blogpic}  alt="House with bule background" src={blogPostImage5}/>
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
                <img className={classes.blogpic}  alt="House with bule background" src={blogPostImage6}/>
                <Grid container>
                  <Grid item xs={12}><Typography className={classes.headertext}>Millions in real Estate</Typography></Grid>
                  <Grid item xs={12}><Typography className={classes.ptext}>Real estate can make you a millionaire.</Typography></Grid>
                  <Grid item xs={4}><Typography className={classes.category}>Real Estate</Typography></Grid>
                  <Grid item xs={6}><Typography className={classes.date}>09 september, 2020</Typography></Grid>
                </Grid>
              </div>
            </Grid>


          </Grid>
          <div><Pagination count={3} variant="outlined" shape="rounded" /></div>
          <Footer />
      </div>
    </div>        


);
};

export default BlogPage;
