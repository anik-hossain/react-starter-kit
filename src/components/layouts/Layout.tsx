import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <>
      <header className="bg-gray-700 text-white font-semibold flex justify-between p-4">
        <div className="logo">logo</div>
        <nav className="main-menu">
          <ul className="flex gap-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hello-world">Hello</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="w-11/12 mx-auto mt-8">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
