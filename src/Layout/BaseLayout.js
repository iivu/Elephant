import React, { Component } from 'react'
import './BaseLayout.css'
import TopBar from '../Components/TopBar/TopBar'

class BaseLayout extends Component {
  render() {
    return (
      <div className="base-layout">
          <TopBar/>
      </div>
    )
  }
}

export default BaseLayout;
