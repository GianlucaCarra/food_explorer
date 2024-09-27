import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Meal from "../pages/Meal";
import NewMeal from "../pages/NewMeal";
import UpdateMeal from "../pages/UpdateMeal";

function AdminRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meal/:id" element={<Meal />} />
      <Route path="/new-meal" element={<NewMeal />} />
      <Route path="/update-meal/:id" element={<UpdateMeal />} />

      <Route path="*" element={<Home />}/>
    </Routes>
  );
}

export default AdminRoutes;