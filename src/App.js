import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RouterWithPaths from '@src/component/RouterWithPath'
import Admin from '../src/site/admin'


function app() {

  const router = [
    {
      path: ["/", "/:function1", "/:function1/:id", "/:function1/:function2/:id"],
      component: Admin
    },
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {
            router.map((item, index) => {
              if (item.component) {
                return (
                  <RouterWithPaths
                    exact
                    key={index}
                    path={item.path}
                    render={(props) => {
                      return <item.component {...props} />;
                    }}
                  />
                )
              }
            })
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default app;
