import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
	const [open, setOpen] = useState(false)
	const [name, setName] = useState('Tony')
	const [firstName, setFirstName] = useState('Jarvis')
	const user = useSelector((state) => state.user)
	console.log(user)

	const handleSubmit =  (e) => {
		e.preventDefault()
		console.log(name, firstName)
	}

	return(
		<main className="main bg-dark">
			<div className="header">
				<h1>Welcome back<br />Tony Jarvis!</h1>
				{!open && <button className="edit-button" onClick={setOpen}>Edit Name</button>}
				{open && (
					<div className="edit-form">
						<form>
							<label htmlFor="name"></label>
							<input type="text" id="name" placeholder={name} onChange={(e) => setName(e.target.value)}/>
							<label htmlFor="firstname"></label>
							<input type="text" id="firstname" placeholder={firstName} onChange={(e) => setFirstName(e.target.value)}/>
							<button className="save-button" onClick={handleSubmit}>Save</button>
							<button className="cancel-button" onClick={() => setOpen(false)}>Cancel</button>
						</form>
					</div>
				)}
			</div>
			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
				<h3 className="account-title">Argent Bank Checking (x8349)</h3>
				<p className="account-amount">$2,082.79</p>
				<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
				<h3 className="account-title">Argent Bank Savings (x6712)</h3>
				<p className="account-amount">$10,928.42</p>
				<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
				<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
				<p className="account-amount">$184.30</p>
				<p className="account-amount-description">Current Balance</p>
				</div>
				<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
				</div>
			</section>
	</main>
	)
}

export default Profile