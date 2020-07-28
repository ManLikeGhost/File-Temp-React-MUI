import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import SideMenu from './sideMenu'

import AccountSettings from './accountSettings';

const SideMenuIndex= () => (
  <Router>
    <SplitPane
      split="vertical"
      minSize={100}
      defaultSize={100}
      resizerStyle={''}
    >
        <SideMenu />
     
      <div>
        {/* <Route path="/listings" component={ContentSection} /> */}
        <Route path="/account" component={AccountSettings} />
      </div>
    </SplitPane>
  </Router>
);

export default SideMenuIndex
