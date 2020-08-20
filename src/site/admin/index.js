import React from 'react';
import Loadable from 'react-loadable';
import Loading from '@admin/component/loading';
import Header from '@admin/component/header';
import Footer from '@admin/component/footer';
import { Switch, Route } from 'react-router-dom';
import './style.scss'
// import RouterWithPath from '../../component/RouterWithPath';

function index(props) {

  const routers = [
    {
      path: "/",
      component: Loadable({
        loader: () => import("@admin/container/home"),
        loading: Loading
      })
    },
    {
      path: "/collection",
      component: Loadable({
        loader: () => import("@admin/container/collection"),
        loading: Loading
      })
    },
    {
      path: "/product",
      component: Loadable({
        loader: () => import("@admin/container/product"),
        loading: Loading
      })
    }
    ,
    {
      path: "/article",
      component: Loadable({
        loader: () => import("@admin/container/article"),
        loading: Loading
      })
    }
    ,
    {
      path: "/contact",
      component: Loadable({
        loader: () => import("@admin/container/contact"),
        loading: Loading
      })
    }
  ]

  return (
    <div>
      <Header></Header>
      <div className="body1">
        <Switch>
          {routers.map((item, index) => {
            if (item.component) {
              return (
                <Route exact key={index} path={item.path} component={item.component} />
                // <RouterWithPath
                //   exact
                //   key={index}
                //   path={item.path}
                //   render={(props) => {
                //     return <item.component {...props} />;
                //   }}
                // />
              )
            }
          })
          }
        </Switch>
      </div>
      <Footer></Footer>
    </div >
  )
}

export default index
