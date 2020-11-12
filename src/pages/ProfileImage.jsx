import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import NavigationHeader from "../components/navigationHeader";
import ProfileTitle from "../components/profile/profileTitle";
import ProfileFooter from "../components/profile/profileFooter";
import axios from "axios";
import { ACCESS_TOKEN_NAME, API_BASE_URL } from "../constants/apiConstants";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: theme.spacing(20),
    // marginLeft: theme.spacing(10),
  },
  container: {
    background: "#F5E9DE",
    border: "0.8px solid #BF7950",
    boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    width: "60vw",
    margin: "100px 200px 0px 250px",
    padding: "30px",
  },
  bigAvatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    color: theme.palette.primary.main,
  },
  uploadImageText: {
    fontFamily: "Metropolis",

    fontWeight: 500,
    fontSize: "1.2rem",
    lineHeight: "3rem",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  inputUpload: {
    display: "none",
  },
  chooseFileButton: {
    background: "#FFFFFF",
    border: "1px solid #BF7950",
    boxSizing: "border-box",
    borderRadius: " 4px",
    color: theme.palette.primary.main,
  },
  noFileChosenText: {
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "18px",
    marginTop: theme.spacing(1),
    marginLeft: "5px",
    color: "rgba(0, 0, 0, 0.51)",
  },
  fileTypeDesc: {
    marginTop: theme.spacing(2),
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "18px",

    color: " rgba(0, 0, 0, 0.51)",
  },
}));

const ProfileImage = () => {
  const classes = useStyles();
  const [avatar, setAvatar] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [uploadedMessage, setUploadedMessage] = useState('');
  const fileChangedHandler = (event) => {
    const image = event.target.files[0];
    setAvatar(image);
  };
  const { token } = JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME));
  const uploadHandler = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("avatar", avatar);
      const response = await axios.post(
        API_BASE_URL + "/profile/image/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "multipart/form-data",
          },
        }
      );
      setIsUploaded(true)
      setUploadedMessage(response.data[0].message);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="BackgroundImage">
      <NavigationHeader />

      <div className={classes.root}>
        <ProfileTitle>Profile Settings</ProfileTitle>
        <Grid container className={classes.container}>
          <Grid item xs={4}>
            {avatar ? (
              <Avatar
              alt="terrel davies"
              src={URL.createObjectURL(avatar)}
              className={classes.bigAvatar}
              fontSize="large"
              color="primary"
            />
            ) : (
              <Avatar
                alt="terrel davies"
                src={avatar}
                className={classes.bigAvatar}
                fontSize="large"
                color="primary"
              />
            )}
          </Grid>
          {isUploaded ? (<Alert severity="success">{uploadedMessage}</Alert>):(<Grid item xs={6}>
            <Typography className={classes.uploadImageText}>
              Upload Profile Image
            </Typography>
            <input
              accept="image/*"
              className={classes.inputUpload}
              id="upload-file"
              type="file"
              onChange={fileChangedHandler}
            />
            <label htmlFor="upload-file">
              <Grid container>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    component="span"
                    className={classes.chooseFileButton}
                  >
                    Choose file
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  {avatar? (null):(<Typography className={classes.noFileChosenText}>
                    No file chosen
                  </Typography>)}
                  
                </Grid>
              </Grid>
            </label>
            <Grid item xs={12}>
              <Typography className={classes.fileTypeDesc}>
                JPG, GIF, or PNG. Max size of 800k
              </Typography>
            </Grid>
          </Grid>
          )}
          
          {isUploaded ? (null):(
          <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          >
            <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              component="span"
              onClick={uploadHandler}
            >
              Upload
            </Button>
            </Grid>
            
          </Grid>
        )}
          
        </Grid>
      </div>
      <ProfileFooter />
    </div>
  );
};

export default ProfileImage;
