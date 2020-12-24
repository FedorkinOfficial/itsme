import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';


let Header = (props) => {
        return (
            <div className={classes.header_wrap}>
                <div className={classes.header_menu}>
                    <ul>
                        <li><NavLink to='/mycompany'>My company</NavLink></li>
                        <li><NavLink to='/vacancies'>Vacancies</NavLink></li>
                        <li><NavLink to='/bank'>Bank</NavLink></li>
                        <li><NavLink to='/marketplace'>Marketplace</NavLink></li>
                        <li><NavLink to='/myprofile'>Profile</NavLink></li>
                    </ul>
                </div>
                <div className={classes.forms_wrap}>
                    {props.state.login.isAuth ? <div></div> : <NavLink to='/login'>log In</NavLink>}
                    <NavLink to='/register'>Register</NavLink>
                </div>                
            </div>
        )
}

export default Header;