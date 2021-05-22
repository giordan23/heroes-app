import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


export const Navbar = () => {

    const {user:{name}, dispatch} = useContext(AuthContext);

    const history = useHistory();

    const logoutHandler = () => {
        dispatch({
            type: types.logout
        });
        history.replace('/login');
    };
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between ">
            <div className='d-flex navbar-nav p-2 collapse navbar-collapse'>
                <Link 
                    className="navbar-brand d-flex" 
                    to="/"
                >
                    Asociaciones
                </Link>

                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/marvel"
                >
                    Marvel
                </NavLink>

                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/dc"
                >
                    DC
                </NavLink>

                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/search"
                >
                    Buscar
                </NavLink>

            </div>
            <div className='d-flex navbar-nav p-2'>
                <p className='nav-item nav-link text-info d-flex'>
                    {name}
                </p>

                <button 
                    className="nav-item nav-link d-flex btn" 
                    onClick={logoutHandler}
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}