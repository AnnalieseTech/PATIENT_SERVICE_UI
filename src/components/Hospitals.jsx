import { useLocation } from "react-router-dom";

const Hospitals = () => {
  const location = useLocation();

  if (location.pathname === "/hospitals") {
    return (
      <>
        <h1>Hospitals</h1>
      </>
    );
  }
};

export default Hospitals;
