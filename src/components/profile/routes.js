import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SideMenu from "./sideMenu";
import AccountSettings from './accountSettings';
import ContentSection from './contentSection'

export const routes = [
    // {
    //   path: '/',
    //   exact: true,
    //   sidebar: () => <AccountSettings/>,
    //   main: () => <h2>Account Setting</h2>
    // },
    {
      path: '/account',
      sidebar: () => <AccountSettings />,
      main: () => <h2>Account Setting</h2>
    },
    {
      path: '/listings',
      sidebar: () => <ContentSection />,
      main: () => <h2>Content Sections</h2>
    }
  ]