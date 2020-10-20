import React from "react";

import { Pagination } from '@material-ui/lab';


const BlogPagination = () => {

    return (
        <div>
            <Pagination 
                count={10}  
                variant="outlined" 
                shape="rounded" 
            />
        </div>
    )
}

export default BlogPagination
