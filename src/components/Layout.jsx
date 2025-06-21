import { Link, useNavigate } from 'react-router'
import argentBankLogo from '../assets/img/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/userSlice'


export const Layout = ({children}) => {
	const data = useSelector((state) => state.user)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSignOut = () => {
		dispatch(logout())
		navigate('/')
	}

	return(
		<div className='bodyContent'>
			<nav className="main-nav">
				<Link className="main-nav-logo" to="/">
					<img
					className="main-nav-logo-image"
					src={argentBankLogo}
					alt="Argent Bank Logo"
					/>
					<h1 className="sr-only">Argent Bank</h1>
				</Link>
				{!data.isLoggedIn ?(
					<div>
						<Link className="main-nav-item" to="/login">
							<i className="fa fa-user-circle"></i>
							Sign In
						</Link>
					</div>
				):(
					<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20}}>
						<a className="main-nav-item" >
							<i className="fa fa-user-circle"></i>
							{data.user.firstName}
						</a>
						<a className="main-nav-item" onClick={handleSignOut}>
							<i className="fa fa-sign-out"></i>
							Sign Out
						</a>
					</div>
				)}
			</nav>
				{children}
			<footer className="footer">
				<p className="footer-text">Copyright 2020 Argent Bank</p>
			</footer>
		</div>
	)
}