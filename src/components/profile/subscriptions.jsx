import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonAccount from './miniComponents/button';
import MessageAccount from './miniComponents/message';
import './content.css';

const Subscriptions=()=> {
  return (
    <div  className="content">
        <MessageAccount>
        You have no subscription plan on your page.
        </MessageAccount>
        <ButtonAccount>VIEW PLANS</ButtonAccount>
     
    </div>
  );
}

export default Subscriptions;
