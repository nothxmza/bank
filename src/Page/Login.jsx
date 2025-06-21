import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setUser } from '../redux/userSlice.js';
import { api } from '../api/api.js';

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const dispatch = useDispatch()

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
			const response = await api.login(user)
			if(response.status === 200) {
				const data = await api.getUser(response.body.token)
				const userName = {
					firstName: data.body.firstName,
					lastName: data.body.lastName,
				}
				dispatch(setUser({user: userName, token: response.body.token}))
				navigate('/profile')
			}else if(response.status === 400) {
				alert(response.message || "invalid credentials")
			}else if(response.status === 500) {
				alert(response.message || "internal server error")
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