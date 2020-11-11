import React from 'react'
import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MessageSentAnimation from '../img/messageSentAnimation.gif';

import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        width: "511px",
        
        fontFamily: "Playfair Display",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "54px",
        color: "#BF7950",
        background: "#F5E9DE",
    },

    alertBox: {
        width: "900px",
        height: "700px",
        
    },

}));


const ContactUsAlert = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.alertBox}
      >
        <DialogTitle id="alert-dialog-title" className={classes.title}>Your message is sent</DialogTitle>
        <DialogContent>
          <DialogContent>
            <img src={MessageSentAnimation} alt="Message Sent Animation Gif"/>
          </DialogContent>  
          <DialogContentText id="alert-dialog-description">
            We appreciate your feedback. We will get intouch with you as soon as possible.
          </DialogContentText>
        </DialogContent>
      </Dialog>
            
        </div>
    )
}

export default ContactUsAlert
