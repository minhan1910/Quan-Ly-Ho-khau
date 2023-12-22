import "./App.css";
import NavBar from "./Components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import HouseholdCreatePage from "./Pages/Household/HouseholdCreatePage";
import HouseholdEditPage from "./Pages/Household/HouseholdEditPage";
import HouseholdPage from "./Pages/HouseholdPage";
import PeoplePage from "./Pages/PeoplePage";
import PeopleCreatePage from "./Pages/People/PeopleCreatePage";
import PeopleEditPage from "./Pages/People/PeopleEditPage";

function App() {
  return (
    <>
      
      <NavBar>
        <Routes>
          <Route path="/" exact element={<HouseholdPage />} />
          <Route path="/household" exact element={<HouseholdPage />} />
          <Route path="/household/create" element={<HouseholdCreatePage />} />
          <Route path="/household/edit/:id" element={<HouseholdEditPage />} />

          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/create" element={<PeopleCreatePage />} />
          <Route path="/people/:householdId" element={<PeoplePage />} />
          <Route path="/people/edit/:id" element={<PeopleEditPage />} />

          {/* <Route path="/thuPhi" element={<HouseholdPage />} />
          <Route path="/contribute" element={<HouseholdPage />} /> */}

        </Routes>
      </NavBar>
    </>
  );
}

export default App;
