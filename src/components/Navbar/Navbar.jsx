

// dark mode 
import { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle, FaSun, FaMoon } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext); // Assume context provides user info and logout function
  const navigate = useNavigate();

  // State to manage theme
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || false
  );

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // On component mount, apply stored theme
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Error logging out!");
    }
  };

  return (
    <div className="bg-[#c7d2fe] sticky backdrop-filter backdrop-blur-lg bg-opacity-30 top-0 z-50 shadow dark:bg-gray-800">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-700"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/all-visas">All Visas</NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink to="/add-visa">Add Visa</NavLink>
                  </li>
                  <li>
                    <NavLink to="/my-added-visas">My Added Visas</NavLink>
                  </li>
                  <li>
                    <NavLink to="/my-visa-applications">
                      My Visa Applications
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl dark:text-white">
            𝙑𝙞𝙨𝙖 𝙉𝙖𝙫𝙞𝙜𝙖𝙩𝙤𝙧
          </NavLink>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 mx-1 dark:text-white">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-visas">All Visas</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/add-visa">Add Visa</NavLink>
                </li>
                <li>
                  <NavLink to="/my-added-visas">My Added Visas</NavLink>
                </li>
                <li>
                  <NavLink to="/my-visa-applications">
                    My Visa Applications
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle text-lg dark:text-yellow-400"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Auth Buttons */}
          {!user ? (
            <>
              <NavLink to="/login" className="btn btn-primary btn-sm">
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-secondary btn-sm">
                Register
              </NavLink>
            </>
          ) : (
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="w-10 rounded-full"
                  />
                ) : (
                  <FaUserCircle className="w-10 h-10 dark:text-white" />
                )}
              </button>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 dark:bg-gray-700"
              >
                <li>
                  <span className="text-center font-semibold dark:text-white">
                    {user.displayName || "User"}
                  </span>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline btn-sm dark:text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
