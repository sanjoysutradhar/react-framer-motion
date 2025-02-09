import { NavLink, Outlet } from "react-router-dom";
function App() {
  return (
    // <>
    //   <Simple />
    //   {/* <KeyFrame /> */}
    //   {/* <ButtopTap /> */}
    //   {/* <TextMotion /> */}
    //   {/* <TransitionType /> */}
    //   {/* <Variants /> */}
    //   {/* <Counter /> */}
    // <ScrollReveal />
    // </>
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <nav className="w-full md:w-64 bg-white shadow-lg p-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              Simple
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/button-tap"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              Button Tap
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/key-frame"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              Key Frame
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/counter"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/scroll-reveal"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              Scroll Reveal
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/text-motion"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              Text Motion
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transition-type"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              Transition Type
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/variants"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              Variants
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
