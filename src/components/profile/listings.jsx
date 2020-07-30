import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonAccount from './miniComponents/button';
import MessageAccount from './miniComponents/message'


const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    marginTop:theme.spacing(30),
    padding: theme.spacing(3),
  },
  number:{
    color: theme.palette.primary.main
  }

}));
const Listings = (props) => {
  const [properties, setProperties] = useState(0)
  const classes = useStyles();
  return (
    <div  className={classes.content}>
      
        <MessageAccount>
        You have <span  className={classes.number}>{properties}</span> property listings on your page.
        </MessageAccount>
        <ButtonAccount>ADD LISTINGS</ButtonAccount>
     
    </div>
  );
};

export default Listings;
