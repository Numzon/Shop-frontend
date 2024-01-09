import { Navbar } from "../../components/Navbar";
import { Outlet } from "react-router-dom";

export const NavigationLayout = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div style={{ display: "flex", flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default NavigationLayout;
