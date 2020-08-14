import React from 'react';
import { Link } from "react-router-dom";
import './style.scss'

function index() {

  const menus = [
    {
      href: "/",
      name: "Home"
    },
    {
      href: "/collection",
      name: "Collection"
    },
    {
      href: "/product",
      name: "Product"
    },
    {
      href: "/article",
      name: "Article"
    },
    {
      href: "/contact",
      name: "Contact"
    },
  ]

  return (
    <div className="menu">
      <ul>
        {
          menus.map((menu, index) => {
            if (menu.name) {
              return (
                <li key={index}>
                  <Link to={menu.href}>{menu.name}</Link>
                </li>
              )
            }
          })
        }
      </ul>
    </div>
  )
}

export default index