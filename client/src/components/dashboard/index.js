import React from 'react'
import { Switch, Route, Redirect, Link, useRouteMatch, useLocation } from 'react-router-dom'

import DashboardLayout from '../layout/Layout'
import Sidepanel from '../layout/Sidepanel'

import { data as dashboardData} from './dashboard.data'


const Dashboard = () => {


  let { path, url } = useRouteMatch()
  let location = useLocation()

  console.log("path:", path);
  console.log("location:", location);
  
  return (
    <DashboardLayout>
      <Sidepanel>
        {dashboardData.map(({ id, route, title }) => (
          <Link
            key={id}
            to={`${url}${route}`}
          >
            <div className={location.pathname === `${url}${route}` ? "sidepanel-options__menu-item active" : "sidepanel-options__menu-item"}>
              <p>{title}</p>
            </div>
          </Link>
        ))}
      </Sidepanel>
      <div className="dashboard-container">
        <Switch>
          {dashboardData.map(({ component, id, route }) => (
            <Route 
              key={id}  
              path={`${path}${route}`} 
            >
                {component} 
              </Route>
          ))}
          <Redirect from="/dashboard" to="/dashboard/me" />
        </Switch>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard