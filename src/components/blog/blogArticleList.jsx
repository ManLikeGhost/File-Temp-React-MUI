import React from "react";
import { detailsBlogPost } from "../../demoData/demoDataBlog";

import BlogProperty from "./BlogProperty";
import Grid from "@material-ui/core/Grid";

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

const BlogArticleList = () => {
  // const classes = useStyles();
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        {detailsBlogPost.map((blogProperty) => (
          <Grid key={blogProperty.id} item xs={4}>
            <BlogProperty
              title={blogProperty.title}
              imagePath={blogProperty.imagePath}
              text={blogProperty.text}
              type={blogProperty.type}
              date={blogProperty.date}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default BlogArticleList;
