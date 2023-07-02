import { NavLink, Outlet } from "react-router-dom"

function HelpLayout() {
  return (
    <div className="help-layout">
        <h2>Website help</h2>
        <p>lorem ipsum</p>

        <nav>
            <NavLink to="faq">Vew the FAQ</NavLink>
            <NavLink to="contact">Contact US</NavLink>
        </nav>

        <Outlet />
    </div>
  )
}

export default HelpLayout