
import React from 'react';

import MarbleBackground from '../../img/MarbleBackground.png'


import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    backgroundImage :{
      height: '80vh',
      backgroundImage: `url(${MarbleBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // width: `calc(100vw + 48px)`,
      
    },
    
}));



const list = () => {
    const classes = useStyles();
    return (
        <div>


        </div>
    );
};
export default list;