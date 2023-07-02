import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Bloom it</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout