import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authSelectors';

const PublicRoute = ({restricted = false, redirectTo}) => {
  const isLoggedIn = useSelector(getLoggedIn);
  const redirect = isLoggedIn && restricted;
  return redirect
    ? <Navigate to={redirectTo} />
    : <Outlet />
};

export default PublicRoute;

PublicRoute.propTypes = {
  restricted: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
