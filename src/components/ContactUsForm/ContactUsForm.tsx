import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Row, Col } from "antd";
import "./ContactUsForm.css";

interface MyFormValues {
	firstName: string;
}

export const ContactUsForm: React.FC<{}> = () => {
	const initialValues: MyFormValues = { firstName: "" };
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, actions) => {
				console.log({ values, actions });
				alert(JSON.stringify(values, null, 2));
				actions.setSubmitting(false);
			}}
		>
			<Form>
				<Row>
					<Col span={24} className="fieldLabel">
						<label>Name</label>
					</Col>
					<Col span={24}></Col>
					<Col span={11}>
						<Field
							id="firstName"
							name="firstName"
							placeholder="  First Name"
							class="nameField field"
						/>
					</Col>
					<Col span={2}></Col>
					<Col span={11}>
						<Field
							id="lastName"
							name="lastName"
							placeholder="  Last Name"
							class="nameField field"
						/>
					</Col>
				</Row>
				<br></br>
				<Row>
					<Col span={24} className="fieldLabel">
						<label className="fieldLabel">Email</label>
					</Col>
					<Col span={24}>
						<Field
							id="email"
							name="email"
							placeholder=""
							class="longField field"
						/>
					</Col>
				</Row>
				<br></br>
				<Row>
					<Col span={24} className="fieldLabel">
						<label className="fieldLabel">Subject</label>
					</Col>
					<Col span={24}>
						<Field
							id="subject"
							name="subject"
							placeholder=""
							class="longField field"
						/>
					</Col>
				</Row>
				<br></br>
				<Row>
					<Col span={24} className="fieldLabel">
						<label className="fieldLabel">Message</label>
					</Col>
					<Col span={24}>
						<Field
							id="message"
							name="message"
							placeholder=""
							component="textarea"
							class="messageArea field"
						/>
					</Col>
				</Row>
				<br></br>
				<Row justify={"center"}>
					<button type="submit" className="submit-button">
						Submit
					</button>
				</Row>
			</Form>
		</Formik>
	);
};
