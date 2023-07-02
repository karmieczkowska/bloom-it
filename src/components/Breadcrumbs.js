import React from 'react'
import { useLocation } from 'react-router-dom'

function Breadcrumbs() {

    const location = useLocation()
    let currenLocation = ""

    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== "")
    .map(crumb => {
        currenLocation =+  `/${crumb}`

        return(
            <div className="crumbs">
                <Link to={currenLocation}>{crumb}</Link>
            </div>
        )
    })

  return (
    <div className="breadcrumbs">
        {crumbs}</div>
  )
}

export default Breadcrumbs