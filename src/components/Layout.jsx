import { Link } from 'react-router'
import argentBankLogo from '../assets/img/argentBankLogo.png'


export const Layout = ({children}) => {
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
			<div>
				<Link className="main-nav-item" to="/login">
				<i className="fa fa-user-circle"></i>
				Sign In
				</Link>
			</div>
			{/* <div>
				<a class="main-nav-item" >
					<i class="fa fa-user-circle"></i>
					Tony
				</a>
				<a class="main-nav-item" href="./index.html">
					<i class="fa fa-sign-out"></i>
					Sign Out
				</a>
			</div> */}
    	</nav>
			{children}
		<footer className="footer">
			<p className="footer-text">Copyright 2020 Argent Bank</p>
		</footer>
		</div>
	)
}