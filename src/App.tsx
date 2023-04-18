import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<Navbar />
			{/* <div className="App">
        <Navbar/>
        <h1>Some content</h1>
      </div> */}
			<Routes>
				<Route path="/contactus" Component={ContactUs} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
