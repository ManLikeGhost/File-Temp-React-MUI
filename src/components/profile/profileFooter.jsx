import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const style = {
  textAlign: "center",
  fontSize: "31px",
  marginTop: `calc(5% + 150px)`,
  bottom: 0,
};
const ProfileFooter = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography color="primary" style={style}>
            {new Date().getFullYear()} {"© "} Terrell Davies Enterprise. All
            rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileFooter;
