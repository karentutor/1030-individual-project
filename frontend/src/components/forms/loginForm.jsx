import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { authenticate, signin } from "../../auth";
import { toast } from "react-toastify";

class LoginForm extends Form {
	state = {
		data: {
			email: "",
			password: "",
		},
		errors: {},
	};

	schema = {
		email: Joi.string().email().label("Email"),
		password: Joi.string().min(8).max(14).label("Password"),
	};

	
	handleAdd = (user) => {
		signin(user).then((data) => {
			if (data.error) {
				const errors = { ...this.state.errors };
				errors.email = "Incorrect username or password";
				this.setState({ errors });
			} else {
				// authenticate
				authenticate(data, () => {
					//window.location = "/"; // causes a full reload to remount app
					toast.success("Success - you have logged in");
				});
			}
		});
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
							<h3 className="display-4 mb-5 text-white">Login</h3>

							<form
								className="contact-form"
								id="form-contact"
								onSubmit={this.handleSubmit}
							>
								{this.renderInput("email", "Email", "email")}
								{this.renderInput("password", "password", "password")}
								{this.renderButton("Submit")}
							</form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default LoginForm;
