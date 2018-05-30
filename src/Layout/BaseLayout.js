import React, { Component } from 'react'
import './BaseLayout.css'
import DrawerTopBar from '../Components/DrawerTopBar/DrawerTopBar'

class BaseLayout extends Component {
  render() {
    return (
      <div className="base-layout">
          <DrawerTopBar/>
      </div>
    )
  }
}

export default BaseLayout;
