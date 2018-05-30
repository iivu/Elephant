import React, { Component } from 'react'
import './BaseLayout.css'
import TopBar from '../Components/TopBar/TopBar'
import MenuDrawer from '../Components/MenuDrawer/MenuDrawer'

class BaseLayout extends Component {
  render() {
    return (
      <div className="base-layout">
          <TopBar/>
	      <MenuDrawer/>
      </div>
    )
  }
}

export default BaseLayout;
