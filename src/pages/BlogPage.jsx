import React from "react";
import NavigationHeader from "../components/navigationHeader.jsx";
import SectionTitle from "../components/sectionTitle.jsx";
import MarbleBackground from "../img/MarbleBackground.png";
import Footer from "../components/footer";
import Grid from "@material-ui/core/Grid";

import { Pagination } from '@material-ui/lab';


import BlogArticleList from "../components/blog/BlogArticleList";
import BlogPageImage1 from "../img/BlogPageImage1.png";


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
    
    adjust: {
      padding: "0px 0px 0px 50px"
    },

    imgHeadadjust: {
      padding: "0px 0px 0px 50px",
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
          <BlogArticleList />
          <div><Pagination count={3} variant="outlined" shape="rounded" /></div>
          <Footer />
      </div>
    </div>        


);
};

export default BlogPage;
