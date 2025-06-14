import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-orange-500 text-transparent bg-clip-text"
        >
          BTech Walleh
        </Link>

        {/* Nav Links */}
        <div className="space-x-6 text-sm font-medium flex items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-2 py-1 rounded transition duration-150 ${
                isActive
                  ? "text-sky-600 font-semibold border-b-2 border-sky-500"
                  : "text-gray-700 hover:text-sky-600 hover:bg-gray-100"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              `px-2 py-1 rounded transition duration-150 ${
                isActive
                  ? "text-sky-600 font-semibold border-b-2 border-sky-500"
                  : "text-gray-700 hover:text-sky-600 hover:bg-gray-100"
              }`
            }
          >
            Register
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-2 py-1 rounded transition duration-150 ${
                isActive
                  ? "text-sky-600 font-semibold border-b-2 border-sky-500"
                  : "text-gray-700 hover:text-sky-600 hover:bg-gray-100"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/announcements"
            className={({ isActive }) =>
              `px-2 py-1 rounded transition duration-150 ${
                isActive
                  ? "text-sky-600 font-semibold border-b-2 border-sky-500"
                  : "text-gray-700 hover:text-sky-600 hover:bg-gray-100"
              }`
            }
          >
            Announcements
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
