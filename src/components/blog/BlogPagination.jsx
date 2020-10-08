import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { Pagination } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
    backgroundImage: {
      height: "80vh",
      //backgroundImage: `url(${MarbleBackground})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      margin: "0px 5px 0px 50px",
      // width: `calc(100vw + 48px)`,
    },

}));




const BlogPagination = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div>
            <Pagination 
                count={10} 
                page={page}
                onChange={handleChange} 
                variant="outlined" 
                shape="rounded" 
            />
        </div>
    )
}

export default BlogPagination
