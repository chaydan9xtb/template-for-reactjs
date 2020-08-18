import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
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
      <Router>
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
      </Router>
    </div>
  );
}

export default app;
