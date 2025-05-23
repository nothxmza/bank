import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (userName === '' || password === '') {
			alert('Manque un champ')
			return
		}
		const user = {
			email: userName,
			password: password,
		}
		console.log(user)
		
		try{
			const response = await fetch('http://localhost:3001/api/v1/user/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user),
			})
			if(response.ok){
				navigate('/profile')
			}
		}catch (error) {
				console.error('Error:', error)
				
		}
	}

	return (
		<>
			<main className="main bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form>
						<div className="input-wrapper">
							<label for="username">Username</label>
							<input type="text" id="username" onChange={(e) => setUserName(e.target.value)}/>
						</div>
						<div className="input-wrapper">
							<label for="password">Password</label>
							<input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
						</div>
						<div className="input-remember">
							<input type="checkbox" id="remember-me" />
							<label for="remember-me">Remember me</label>
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