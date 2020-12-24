import classes from './Profile.module.css';
import React from 'react';



let Profile = (props) => {
    if(props.state.login.isAuth) {
        return(
            <div className={classes.info_wrap}>
                <div className={classes.inf_item}> 
                    Name: {props.state.login.name}
                </div>
                <div className={classes.inf_item}>
                    id: {props.state.login.pass}
                </div>
                <div className={classes.inf_item}> 
                    Num of companies : 
                </div>
            </div>
        )
    } else {
        return(
            <div>
                Вы не авторизированы
            </div>
        )
    }
}

export default Profile;
