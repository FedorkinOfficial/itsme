import React from 'react';
import classes from './Login.module.css';


let Login = (props) => {
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
        let checkApi = () => {
            props.checkApi()
        }
        let check = () => {
            props.check()
        }
        return(
            <div className={classes.forms}>
                <input type="text" onChange={changeName} value={props.state.register.changedName} ref={refName}/>
                <input type="text" onChange={changePass} value={props.state.register.changedPass} ref={refPass}/>
                <button onClick={checkApi}>Login</button>
                <button onClick={check}>Add</button>
            </div>
        )
    }
    
}

export default Login;