import { Navlink, Outlet } from "react-router";
const Root = () => {
  return (
    <>
      <div>
        <nav>
          <li>
            <Navlink to="/simple">Simple</Navlink>
          </li>
          <li>
            <Navlink to="/buttop-tap">Button Tap</Navlink>
          </li>
          <li>
            <Navlink to="/key-frame">Key Frame</Navlink>
          </li>
        </nav>
      </div>
      <div className="text-center mt-10">
        <Outlet />
      </div>
    </>
  );
};
export default Root;
