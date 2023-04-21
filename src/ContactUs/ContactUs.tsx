import React from "react";
import RedBanner from "../components/RedBanner";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { Row, Col, Typography } from "antd";
import "leaflet/dist/leaflet.css";
import "./ContactUs.css";
import { ContactUsForm } from "../components/ContactUsForm/ContactUsForm";

const ContactUs: React.FC = () => {
	const position: LatLngExpression = [1.3404822924519935, 103.96269799696039];

	return (
		<>
			<RedBanner bannerText="Contact Us"></RedBanner>
			<Row justify={"center"}>
				<MapContainer center={position} zoom={18} scrollWheelZoom={false}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={position}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>
			</Row>
			<Row style={{ padding: "2vw" }}>
				<Col span={12} xs={24} sm={24} md={24} lg={12}>
					<h2 className="subHeader">Address</h2>
					<p className="normalText">
						Singapore University of Technology and Design
					</p>
					<p className="normalText">8 Somapah Road</p>
					<p className="normalText">Singapore 487372</p>
					<br />
					<h2 className="subHeader">Email</h2>
					<a href="marketwatch@club.sutd.edu.sg" className="normalText">
						marketwatch@club.sutd.edu.sg
					</a>
				</Col>
				<Col span={12} xs={24} sm={24} md={24} lg={12}>
					<ContactUsForm></ContactUsForm>
				</Col>
			</Row>
		</>
	);
};

export default ContactUs;
