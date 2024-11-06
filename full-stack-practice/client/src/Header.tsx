import { Outlet, Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <nav className="navBar">
        <ul>
          <li className="">
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li className="">
            <Link to="/" className="text-white">
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
      {<Outlet />}
      {/* outlet will display whatever component, but always have the header there. the outlet will show up underneath the header
        it will display wherever outlet is. */}
    </div>
  );
}
