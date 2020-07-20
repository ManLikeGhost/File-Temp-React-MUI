import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    fontSize: 35,
    // lineHeight: 55,
  },
  unorderedList: {
    backgroundColor: theme.palette.background.paper,
    marginLeft: 70,
    color: theme.palette.primary.main,
    fontSize: 30,
lineHeight: 30,
  },
}));

const SaleRentShortlet = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={4}>
          <Typography className={classes.title}>For Sale by Town</Typography>
          <div className={classes.unorderedList}>
            <List component="nav" aria-label="secondary mailbox folders">
              <ListItem button>
                <ListItemText primary="Lekki (1250)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ajah (580)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikoyi (404)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikeja (685)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Victoria Island (900)" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.title}>For Rent by Town</Typography>
          <div className={classes.unorderedList}>
            <List component="nav" aria-label="secondary mailbox folders">
              <ListItem button>
                <ListItemText primary="Lekki (1250)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ajah (580)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikoyi (404)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikeja (685)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Victoria Island (900)" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.title}>Shortlet by Surburb</Typography>
          <div className={classes.unorderedList}>
            <List component="nav" aria-label="secondary mailbox folders">
              <ListItem button>
                <ListItemText primary="Lekki (1250)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ajah (580)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikoyi (404)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Ikeja (685)" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Victoria Island (900)" />
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SaleRentShortlet;
