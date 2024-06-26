import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const AuthRoute = ({ component: Component, path, exact }) => {
    const isLoggedIn = useSelector((state) => !!state.session.user);

    return (
        <Route
            path={path}
            exact={exact}
            render={(props) =>
                !isLoggedIn ? <Component {...props} /> : <Redirect to='/' />
            }
        />
    );
};