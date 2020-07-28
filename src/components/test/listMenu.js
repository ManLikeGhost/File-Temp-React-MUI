import React from 'react';
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const mainListItems = (
    <div >
        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Avatar
              alt="terrel davies"
              src=""
            
              fontSize="large"
              color="primary"
            />

            <Typography >John Doe</Typography>
            <Link>
              <Typography>Click to change photo</Typography>
            </Link>
          </Grid>
          <Grid item>
            <List>
              <Link color="inherit" href="profile/account">
                <Typography >Account</Typography>
              </Link>
              <Link color="inherit" href="profile/listings">
                <Typography >Listings</Typography>
              </Link>
              <Link color="inherit" href="profile/subscriptions">
                <Typography >
                  Subscriptions
                </Typography>
              </Link>
              <Link color="inherit" href="profile/saved-property">
                <Typography >
                  Saved Property
                </Typography>
              </Link>
              <Link color="inherit" href="profile/security">
                <Typography>Security</Typography>
              </Link>
            </List>
          </Grid>
          <Grid>
            <List>
              <Link color="inherit" href="/login">
                <Typography >
                  Logout
                  <ExitToAppIcon />
                </Typography>
              </Link>
            </List>
          </Grid>
        </Grid>
      </div>
      
)