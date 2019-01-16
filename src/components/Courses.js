import React from 'react'
import { NavLink, Redirect, Route } from 'react-router-dom'

import HTML from './courses/HTML'
import CSS from './courses/CSS'
import JavaScript from './courses/JavaScript'

const Courses = ({ match }) => (
  <div className='main-content courses'>
    <div className='course-header group'>
      <h2>Courses</h2>
      <ul className='course-nav'>
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>

    {/* Write routes here... */}
    <Route exact path={match.path} render={() => <Redirect to={`${match.url}/html`} />} />
    <Route path={`${match.path}/html`} component={HTML} />
    <Route path={`${match.path}/css`} component={CSS} />
    <Route path={`${match.path}/javascript`} component={JavaScript} />
  </div>
)

export default Courses
