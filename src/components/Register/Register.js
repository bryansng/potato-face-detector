import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	onNameChange = (event) => {
		this.setState({ name: event.target.value });
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value });
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value });
	}

	saveAuthTokenInSession(token) {
		window.sessionStorage.setItem('token', token);
	}

	onSubmitRegister = () => {
		fetch(`${this.props.BACKEND_URL}register`, {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(resp => resp.json())
		.then(data => {
			if (data.userId && data.success === 'true') {
				this.saveAuthTokenInSession(data.token);
				this.props.fetchUserData(data.userId, data.token);
			}
		})
	}

	render() {
		return (
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<div className="pa4 black-80">
					<div className="measure">
						<fieldset id="register" className="ba b--transparent ph0 mh0">
							<legend className="f1 fw6 ph0 mh0">Register</legend>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
								<input
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
									type="text"
									name="name"
									id="name"
									onChange={this.onNameChange}
									required
								/>
							</div>
							<div className="mt3">
								<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
								<input
									className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
									type="email"
									name="email-address"
									id="email-address"
									onChange={this.onEmailChange}
									required
								/>
							</div>
							<div className="mv3">
								<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
								<input
									className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
									type="password"
									name="password"
									id="password"
									onChange={this.onPasswordChange}
									required
								/>
							</div>
						</fieldset>
						<div className="">
							<input
								onClick={this.onSubmitRegister}
								className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
								type="submit"
								value="Register"
							/>
						</div>
					</div>
				</div>
			</article>
		)
	}
};

export default Register;