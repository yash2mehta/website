import "./App.css";
import Navbar2 from "./components/Navbar/Navbar2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClubStructure from "./AboutUs/ClubStructure";
import ClubAdvisors from "./AboutUs/ClubAdvisors";
import Testimonials from "./AboutUs/Testimonials";
import ManagementCommittee from "./AboutUs/ManagementCommittee";
import ContactUs from "./ContactUs/ContactUs";
import Sponsors from "./Partners/Sponsors"
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Events from './Events/Events';
import UnderConstruction from './UnderConstruction/UnderConstruction';

function App() {
	return (
		<BrowserRouter>
			<div className="root">
			<Navbar2 />
			<div className="App">
				<Routes>
					<Route path='/' Component={Home} />
					
					<Route path="/aboutus/mission_values" Component={UnderConstruction} />
					<Route path="/aboutus/clubstructure" Component={ClubStructure} />
					<Route path="/aboutus/clubadvisors" Component={ClubAdvisors} />
					<Route path="/aboutus/testimonials" Component={Testimonials} />
					<Route
						path="/aboutus/managementcommittee"
						Component={ManagementCommittee}
					/>

					<Route path="/events" Component={Events} />

					<Route path="/news/blog" Component={UnderConstruction} />
					<Route path="/news/specialfeatures" Component={UnderConstruction} />

					<Route path="/research/researchreports" Component={UnderConstruction} />
					<Route path="/research/presentationmaterials" Component={UnderConstruction} />

					<Route path="/partners" Component={Sponsors} />

					<Route path="/contactus" Component={ContactUs} />

					<Route path="/joinus" Component={UnderConstruction} />

					{/* Random button on the home page I don't know where to link */}
					<Route path="/collaborate" Component={UnderConstruction} />

					<Route path="/comingsoon" Component={UnderConstruction} />
				</Routes>
			</div>
			<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;
