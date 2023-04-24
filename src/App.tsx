import "./App.css";
import Navbar2 from "./components/Navbar/Navbar2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClubStructure from "./AboutUs/ClubStructure";
import ClubAdvisors from "./AboutUs/ClubAdvisors";
import Testimonials from "./AboutUs/Testimonials";
import ManagementCommittee from "./AboutUs/ManagementCommittee";
import ContactUs from "./ContactUs/ContactUs";
import Sponsors from "./Partners/Sponsors";
import Events from "./Events/Events";

function App() {
  return (
    <BrowserRouter>
      <Navbar2 />
      <Routes>
        <Route path="/aboutus/clubstructure" Component={ClubStructure} />
        <Route path="/aboutus/clubadvisors" Component={ClubAdvisors} />
        <Route path="/aboutus/testimonials" Component={Testimonials} />
        <Route
          path="/aboutus/managementcommittee"
          Component={ManagementCommittee}
        />
        <Route path="/contactus" Component={ContactUs} />

        <Route path="/partners" Component={Sponsors} />
        <Route path="/events" Component={Events} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
