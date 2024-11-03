import { Link, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};

export function Header({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row w-full">
      <nav
        className={`flex flex-col py-2 px-3 bg-gray-900 transition-width duration-300 ease-in-out ${
          isOpen ? 'w-40' : 'w-[50px]'
        }`}>
        <FaBars onClick={handleOpen}></FaBars>
        {isOpen && <h3 className="mt-3">Hylian Shopping</h3>}
        {menuItems.map((menu) => (
          <div className="flex items-center mt-5" key={menu.name}>
            <img
              className="w-[30px] text-white"
              src={menu.iconUrl}
              alt={menu.name}
              style={{ filter: 'brightness(0) invert(1)' }}
            />

            {isOpen && (
              <Link to={menu.path} className="ml-2 text-white">
                {menu.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
