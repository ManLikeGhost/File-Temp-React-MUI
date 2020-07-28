import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import SwitchRoutes from "../components/test/SwitchRoutes";
import Account from "../components/test/account";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "150px",
  },
}));

const ProfileSetting = () => {
  const classes = useStyles();
  return (
    <div>
      <Account />
      <SwitchRoutes />
    </div>
  );
};

export default ProfileSetting;
