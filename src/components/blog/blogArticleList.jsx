import React, { useState, useEffect } from "react";
import axios from "axios";
import { detailsBlogPost } from "../../demoData/demoDataBlog";
import { API_BASE_URL } from "../../constants/apiConstants";
import BlogProperty from "./BlogProperty";
import Grid from "@material-ui/core/Grid";
//import { Functions } from "@material-ui/icons";

// import MarbleBackground from "../img/MarbleBackground.png";

// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   backgroundImage: {
//     height: "80vh",
//     // backgroundImage: `url(${MarbleBackground})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     // width: `calc(100vw + 48px)`,
//   },
// }));

function BlogArticleList() {
  const [newDetailsBlogPost, setNewDetailsBlogPost] = useState(detailsBlogPost);
  const [currentDetailsBlogPost, setCurrentDetailsBlogPost] = useState(10);
  const displayDetailsBlogPost = newDetailsBlogPost.slice(0, currentDetailsBlogPost);
  
  useEffect(() => {
    async function fetchData() {
      const result = await axios(API_BASE_URL + "/blogs");
       console.log(result.data.data)
      setNewDetailsBlogPost(result.data.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Grid container justify="center" alignItems="center">
        {displayDetailsBlogPost.map((blogProperty) => (
          <Grid key={blogProperty.id} item xs={4}>
            <BlogProperty
              imagePath={blogProperty.image}
              title={blogProperty.title}
              text={blogProperty.text}
              {...BlogProperty}              
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default BlogArticleList;
