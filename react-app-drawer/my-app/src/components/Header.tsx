import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaBug, FaBook } from 'react-icons/fa';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row w-full">
      <nav
        className={`flex flex-col py-2 px-3 bg-gray-900 transition-width duration-300 ease-in-out ${
          isOpen ? 'w-40' : 'w-[40px]'
        }`}>
        <FaBars onClick={handleOpen}></FaBars>
        <div className="mt-5 text-white flex items-center ">
          <FaBug />
          {isOpen && (
            <Link className="text-white ml-2 " to="about">
              About
            </Link>
          )}
        </div>
        <div className="mt-5 text-white flex items-center">
          <FaBook />
          {isOpen && (
            <Link className="text-white ml-2" to="/">
              Catalog
            </Link>
          )}
        </div>
      </nav>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
