import React from 'react';
import classes from './Register.module.css';


let Register = (props) => {
    
    if(props.state.login.isAuth){
        return(
            <div>
                Вы авторизированы!
            </div>
        )   
    } else {
        let refName = React.createRef();
        let refPass = React.createRef();
        let changeName = () => {
            props.changeName(refName.current.value);
        }
        let changePass = () => {
            props.changePass(refPass.current.value);
        }
        let clickRegister = () => {
            props.postApi();
        }
        return(
            <div className={classes.forms}>
                <input type="text" onChange={changeName} value={props.state.register.changedName} ref={refName}/>
                <input type="text" onChange={changePass} value={props.state.register.changedPass} ref={refPass}/>
                <button onClick={clickRegister}>Register</button>
            </div>
        )
    }
    
}

export default Register;