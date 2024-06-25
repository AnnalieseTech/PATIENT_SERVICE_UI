import { Box } from "@mui/material";
import { appWrapper } from "@styles/styles";
import AppNavMenu from "@navigation/AppNavMenu";
import { useState } from "react";
import AppContentArea from "./components/AppContentArea";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Patients from "./components/Patients";
import Hospitals from "./components/Hospitals";
import Physicians from "./components/Physicians";
import Nurses from "./components/Nurses";
import Appointments from "./components/Appointments";
import Home from "./components/Home";
import AddPatientForm from "./components/AddPatientForm";

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <BrowserRouter>
      <Box sx={appWrapper}>
        <AppNavMenu handleDrawerToggle={handleDrawerToggle} />
        <AppContentArea isOpen={mobileOpen} />
      </Box>
      <Routes>
        <Route path="/hospitals" element={Hospitals} />
        <Route path="/patients" element={Patients} />
        <Route path="/patients/add" element={AddPatientForm} />
        <Route path="/physicians" element={Physicians} />
        <Route path="/nurses" element={Nurses} />
        <Route path="/appointments" element={Appointments} />
        <Route path="/home" element={Home} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
