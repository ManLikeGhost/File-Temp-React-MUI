import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideMenu from "../components/profile/sideMenu";
import ContentSection from "../components/profile/contentSection";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const ProfileSetting = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideMenu />
      <ContentSection />
    </div>
  );
};

export default ProfileSetting;
