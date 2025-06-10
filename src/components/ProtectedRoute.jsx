import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

export const ProtectedRoute = () => {
	const token = useSelector((state) => state.user.token);
	return token ? <Outlet /> : <Navigate to="/login" />;
};
