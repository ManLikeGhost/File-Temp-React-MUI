import React, {useState} from "react";

import Blog from "./blogArticle"; 
//import Property from "./Property";

import {detailsBlogPost} from '../../demoData/demoDataBlog'; //import {properties} from '../../demoData/demoData'

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function blogArticleList() {
const [currentdetailsBlogPost, setCurrentdetailsBlogPost] = useState(3)
const displaydetailsBlogPost = detailsBlogPost.slice(0, currentdetailsBlogPost);
  return (
    <div>
      
      <Box p={(2, 4)}>
        <Grid container justify="center" alignItems="center">
          {displaydetailsBlogPost.map((Blog) => (
            <Grid key={Blog.id} item xs={4}>
              <Blog imagePath={Blog.imagePath} text={Blog.text} title={Blog.title} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default blogArticleList;
