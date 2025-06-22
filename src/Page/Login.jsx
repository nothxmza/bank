import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { login, setUser } from '../redux/userSlice.js';
import { api } from '../api/api.js';

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const isLoading = useSelector((state) => state.user.isLoading);

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (email === '' || password === '') {
			alert("Please fill in all fields")
			return
		}
		const user = {
			email: email,
			password: password,
		}
		try{
			const response = await dispatch(login(user));
			if(login.fulfilled.match(response)) {
				navigate('/profile');
			}else{
				 alert(response.payload || "Identifiants invalides");
			}
		}catch (error) {
				console.error('Error:', error)
		}
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<main className="main bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form>
						<div className="input-wrapper">
							<label htmlFor="username">Username</label>
							<input type="text" id="username" onChange={(e) => setEmail(e.target.value)}/>
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password</label>
							<input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
						</div>
						{/* <!-- SHOULD BE THE BUTTON BELOW --> */}
						<button className="sign-in-button" onClick={handleSubmit}>Sign In</button> 
					</form>
				</section>
			</main>
		</>
	)
}

export default Login