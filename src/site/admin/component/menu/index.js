import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './style.scss'

function Index(props) {

  const [menus, setMenus] = useState()

  const getMenu = () => {
    let allMenus = [
      {
        userType: [],
        href: "/",
        name: "Home",
        menus: []
      },
      {
        userType: [],
        href: "/collection",
        name: "Collection",
        menus: []
      },
      {
        userType: [],
        href: "/product",
        name: "Product",
        menus: []
      },
      {
        userType: [],
        href: "/article",
        name: "Article",
        menus: []
      },
      {
        userType: [],
        href: "/contact",
        name: "Contact",
        menus: []
      },
    ]
    return allMenus.filter(option => {
      if (option.menus && option.menus.length) {
        let data = option.menus.filter(option2 => {
          if (!(option2.userType || [].length)) {
            return true;
          } else {
            let data = option2.userType.filter((option3) => {
              return option3;
            })
            if (data && data.length) {
              return true;
            }
          }
        })
        if (data && data.length) {
          return true;
        }
      } else {
        if (!(option.userType || []).length) {
          return true;
        } else {
          let data = option.userType.filter((option2) => {
            return option2
          })
          if (data && data.length) {
            return true;
          }
        }
      }
    })
  }

  useEffect(() => {
    setMenus(getMenu())
  }, [])

  return (
    <div className="menu">
      <ul className="container">
        {
          menus && menus.length && menus.map((menu, index) => {
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

export default Index