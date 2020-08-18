import React from 'react';
import Menu from '@admin/component/menu';
import { Link } from 'react-router-dom';
import './style.scss'

function index() {

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={require("@images/logo.png")} alt=""></img>
            </Link>
          </div>
          <div className="input search">
            <input type="text"></input>
          </div>
          <div className="user">
            <Link to="#">Tài khoản</Link>
          </div>
        </div>
        <Menu></Menu>
      </div>
    </div>
  )
}
export default index