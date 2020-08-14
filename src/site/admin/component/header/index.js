import React from 'react';
import Menu from '@admin/component/menu'

function index() {

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img src={require("@images/logo.png")} alt=""></img>
        </div>
        <Menu></Menu>
      </div>
    </div>
  )
}
export default index