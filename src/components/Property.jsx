import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Property({imagePath,
  saleText,
  address,
  details}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={saleText}
          height="300"
          image={imagePath}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color='primary'>
            {saleText}
          </Typography>
          <Typography variant="body2" component="p" color='secondary'>
           {address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {details}
      </CardActions>
    </Card>
  );
}
