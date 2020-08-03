import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <div>
      <Typography>This page is not found</Typography>
      <Link to="/">
        <Typography>Click here to go to the homepage</Typography>
      </Link>
    </div>
  );
};

export default Page404;
