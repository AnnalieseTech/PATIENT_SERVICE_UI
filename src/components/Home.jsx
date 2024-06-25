import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  if (location.pathname === "/home" || location.pathname === "/") {
    return (
      <>
        <h1>Home</h1>
      </>
    );
  }
};

export default Home;
