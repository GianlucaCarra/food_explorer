import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Meal from "../pages/Meal";

function UserRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meal/:id" element={<Meal />} />

      <Route path="*" element={<Home />}/>
    </Routes>
  );
}

export default UserRoutes;