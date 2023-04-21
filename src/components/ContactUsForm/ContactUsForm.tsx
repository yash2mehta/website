import "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { Row, Col, message } from "antd";
import "./ContactUsForm.css";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";

interface ContactUsFormValues {
	firstName: string;
	lastName: string;
	email: string;
	subject: string;
	message: string;
}

export const ContactUsForm: React.FC<{}> = () => {
	const initialValues: ContactUsFormValues = {
		firstName: "",
		lastName: "",
		email: "",
		subject: "",
		message: "",
	};

	const sendEmail = (
		values: ContactUsFormValues,
		actions: FormikHelpers<ContactUsFormValues>
	) => {
		try {
			emailjs.send(
				"service_8r0ixvf",
				"template_u1j3sr9",
				values as any,
				"dw4Wq3Wx9Rof3Vn4i"
			);
			message.success("Form has been successfully sent!");
		} catch {
			console.error("Error sending email");
			message.error(
				"There was an error sending the form, please try reaching out to us via our email instead."
			);
		}

		// alert(JSON.stringify(values, null, 2));
		actions.setSubmitting(false);
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, actions) => {
				sendEmail(values, actions);
			}}
			validationSchema={Yup.object({
				firstName: Yup.string().required("* First Name field is required"),
				lastName: Yup.string().required("* Last Name field is required"),
				subject: Yup.string().required("* Subject field is required"),
				email: Yup.string()
					.email("Invalid email address")
					.required("* Email field is required"),
				message: Yup.string().required("* Message field is required"),
			})}
		>
			<Form>
				<Row>
					<Col span={24} className="fieldLabel">
						<label>Name</label>
					</Col>
					<Col span={24}></Col>
					<Col span={12}>
						<div className="mr-4 field-container">
							<Field
								id="firstName"
								name="firstName"
								placeholder="  First Name"
								class="nameField field"
							/>
						</div>
					</Col>

					<Col span={12}>
						<div className="ml-4 field-container">
							<Field
								id="lastName"
								name="lastName"
								placeholder="  Last Name"
								class="nameField field"
							/>
						</div>
					</Col>
				</Row>
				<br></br>
				<Row>
					<Col span={24} className="fieldLabel">
						<label className="fieldLabel">Email</label>
					</Col>
					<Col span={24}>
						<div className="field-container">
							<Field
								id="email"
								name="email"
								placeholder=""
								class="longField field"
							/>
						</div>
					</Col>
				</Row>
				<br></br>
				<Row>
					<Col span={24} className="fieldLabel">
						<label className="fieldLabel">Subject</label>
					</Col>
					<Col span={24}>
						<div className="field-container">
							<Field
								id="subject"
								name="subject"
								placeholder=""
								class="longField field"
							/>
						</div>
					</Col>
				</Row>
				<br></br>
				<Row>
					<Col span={24} className="fieldLabel">
						<label className="fieldLabel">Message</label>
					</Col>
					<Col span={24}>
						<div className="field-container pt-2">
							<Field
								id="message"
								name="message"
								placeholder=""
								component="textarea"
								class="messageArea field"
							/>
						</div>
					</Col>
				</Row>
				<br></br>
				<Row justify={"center"}>
					<button type="submit" className="submit-button bg-[#ecb8b5]">
						Submit
					</button>
				</Row>
			</Form>
		</Formik>
	);
};
