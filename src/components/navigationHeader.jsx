import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Divider from "@material-ui/core/Divider";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
// import MenuOpenIcon from "@material-ui/icons/MenuOpen";

import Logo from "../img/logo.png";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  logo: {
    marginLeft: 20,
  },

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  button: {
    margin: theme.spacing(1),
    color: theme.palette.primary.dark,
    fontSize: 21,
    borderRadius: 1,
    border: "2px solid",
    textDecoration: "none",
    "&:hover": {
      background: theme.palette.secondary.main,
      color: "white !important",
      textDecoration: "none",
    },
  },

  inputRoot: {
    color: "inherit",
  },
  menuBackground: {
    marginTop: 20,
    background: "transparent",
    boxShadow: "none",
    marginBottom: 20,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  mainMenu: {
    textAlign: "center",
    "& .MuiPaper-root": {
      color: theme.palette.secondary.main,
    },
  },
  menuItem: {
    color: "white",
    margin: theme.spacing(2),
    textAlign: "center",
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.secondary.main,
      },
    },
  },
  MenuOpenIcon: {
    marginLeft: "auto",
    textAlign: "right",
    transform: "rotate(90deg)",
  },
  linkText: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    "&:hover": { textDecoration: "none" },
  },
  divider: {
    margin: "15px 15px",
    backgroundColor: theme.palette.primary.main,
    height: "1px",
  },
}));

const NavigationHeader = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.mainMenu}
    >
      <div style={{ textAlign: "right", paddingRight: "50px" }}>
        <FormatAlignRightIcon
          fontSize="large"
          color="primary"
          className={classes.MenuOpenIcon}
          onClick={handleMenuClose}
        />
      </div>

      <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
        <Link href="/about" className={classes.linkText}>
          About Terrel Davies
        </Link>
      </MenuItem>
      <Divider className={classes.divider} />
      <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
        <Link href="/post-property-request" className={classes.linkText}>
          Post Property Request
        </Link>
      </MenuItem>
      <Divider className={classes.divider} />
      <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
        <Link href="/subscription-plans" className={classes.linkText}>
          Subscription Plans
        </Link>
      </MenuItem>
      <Divider className={classes.divider} />
      <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
        <Link href="/blog" className={classes.linkText}>
          Blog
        </Link>
      </MenuItem>
      <Divider className={classes.divider} />
      <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
        <Link href="/contact" className={classes.linkText}>
          Contact
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ></Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.menuBackground}>
        <Toolbar>
          <Link href="/" variant="body2">
            <img src={Logo} alt="TD logo" className={classes.logo} />
          </Link>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button variant="outlined" className={classes.button}>
              <Link href="/add-listing">ADD LISTING</Link>
            </Button>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleMenuOpen}
              color="inherit"
            >
              <Link href="/signin">
                <AccountCircle fontSize="large" color="primary" />
              </Link>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="open drawer"
            onClick={handleMenuOpen}
          >
            <FormatAlignRightIcon fontSize="large" color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default NavigationHeader;
