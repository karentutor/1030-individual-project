import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { signup } from "../auth";
import { toast } from "react-toastify";

class Register extends Form {
	state = {
		data: {
			name: "",
			email: "",
			password: "",
		},
		errors: {},
	};

	schema = {
		name: Joi.string().required().label("Name"),
		email: Joi.string().email().label("Email"),
		password: Joi.string().min(8).max(14).label("Password"),
	};
	handleAdd = async (data) => {
		try {
			await signup(data);
			// window.location = '/';
			toast.success("Success - you have registered");
		} catch (e) {
			if (e.response && e.response.status === 400) {
				const errors = { ...this.state.error };
				errors.name = "Sorry there was a problem, please use a different email";
				this.setState({ errors });
			}
		}
	};

	doSubmit = () => {
		const data = this.state.data;
		this.handleAdd(data);
	};

	render() {
        return (
			<section className="contact p-5">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-5 pb-4">
							<h3 className="display-4 mb-5 text-white">Get In Touch</h3>

							<form
								className="contact-form"
								id="form-contact"
								onSubmit={this.handleSubmit}
							>
								{this.renderInput("name", "Name")}
								{this.renderInput("email", "Email", "email")}
								{this.renderInput("password", "Password", "password")}
								{this.renderButton("Submit")}
							</form>
						</div>
					</div>
				</div>
			</section>
        );
	}
}

export default Register;
