import React from "react";
import NavigationHeader from "../components/navigationHeader.jsx";
import Typography from "@material-ui/core/Typography";
import SectionTitle from "../components/sectionTitle.jsx";
import MarbleBackground from "../img/MarbleBackground.png";
import Footer from "../components/footer";
import Grid from "@material-ui/core/Grid";

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
      textAlign: "center",
      color: "#BF7950",
    },

}));


const BlogPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundImage}>
      <NavigationHeader />
      <Typography variant="h3" className="blogHead">Blog</Typography>
      <div>

      </div>
    </div>        


);
};

export default BlogPage;
