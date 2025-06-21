import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/userSlice';
import { api } from '../api/api';

const Profile = () => {
	const [open, setOpen] = useState(false)
	const [lastName, setLastName] = useState('')
	const [firstName, setFirstName] = useState('')

	const data = useSelector((state) => state.user)
	const dispatch = useDispatch()

	const handleSubmit = async (e) => {
		e.preventDefault()
		if(lastName === '' || firstName === '') {
			alert('Please fill in all fields')
			return
		}
		let user = {
			firstName: firstName,
			lastName: lastName,
		}
		try{
			const response = await api.updateUserName(user, data.token)
			if(response.status === 200){
				dispatch(updateUser({firstName: user.firstName, lastName: user.lastName}))
				setOpen(false)
				setFirstName('')
				setLastName('')
			}else if(response.status === 400) {
				alert(response.message || "invalid fields")
			}else if(response.status === 500) {
				alert(response.message || "internal server error")
			}
		}catch (error) {
			console.error('Error:', error)
		}
	}

	return(
		<main className="main bg-dark">
			<div className="header">
				{data && <h1>Welcome back<br />{data.user.firstName} {data.user.lastName} !</h1>}
				{!open && <button className="edit-button" onClick={setOpen}>Edit Name</button>}
				{open && (
					<div className="edit-form">
						<form>
							<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 15}}>
								<div style={{display: 'flex', gap: 10}}>
									<input type="text" id="name" placeholder="lastName" onChange={(e) => setLastName(e.target.value)} required style={{padding: 10, width: 200}}/>
									<input type="text" id="firstname" placeholder="firstName" onChange={(e) => setFirstName(e.target.value)} required style={{padding: 10, width: 200}}/>
								</div>
								<div style={{display: 'flex', gap: 10}}>
									<button className="save-button" onClick={handleSubmit} style={{padding: "5px 10px"}}>Save</button>
									<button className="cancel-button" onClick={() => setOpen(false)} style={{padding: "5px 10px"}}>Cancel</button>
								</div>
							</div>
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