import { useLocation } from "react-router-dom";

const Physicians = () => {
  const location = useLocation();

  if (location.pathname === "/physicians") {
    return (
      <>
        <h1>Physicians</h1>
      </>
    );
  }
};

export default Physicians;
