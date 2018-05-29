import React, { Component } from 'react'
import './BaseLayout.css'

import TopBar from './TopBar/TopBar'

class BaseLayout extends Component {
  render() {
    return (
      <div className="base-layout">
        <div className="menu-bar">
          menu-bar
        </div>
        <div className="content">
          <TopBar/>
        </div>
      </div>
    )
  }
}

export default BaseLayout;
