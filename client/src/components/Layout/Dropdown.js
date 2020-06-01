import React from 'react'
import { NavLink } from 'react-router-dom';

const Dropdown = () => {
  return (
    <div id="dropdown">

      <ul>
        <li><NavLink to='/services/construction-management' activeClassName='active'>Construction Management</NavLink></li>
        <li><NavLink to='/services/facility-maintenance' activeClassName='active'>Facility Maintenance</NavLink></li>
        <li><NavLink to='/services/electrical-contractors' activeClassName='active'>Electrical Contractors</NavLink></li>
        <li><NavLink to='/services/site-location' activeClassName='active'>Site Location</NavLink></li>
        <li><NavLink to='/services/plumbing' activeClassName='active'>Plumbing</NavLink></li>
        <li><NavLink to='/services/residential-construction' activeClassName='active'>Residential Construction</NavLink></li>
      </ul>

    </div>
  )
}

export default Dropdown;