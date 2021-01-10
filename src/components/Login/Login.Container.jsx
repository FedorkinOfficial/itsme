import React from 'react';
import {connect} from 'react-redux';
import Login from './Login';
import {changeNameAC, changePassAC, authLoginAC} from '../../reducers/loginReducer';
import axios from 'axios';
import Cookies from 'universal-cookie';

class LoginAPI extends React.Component{
    checkApi = () => {
        let authLogin = (data) => this.props.authLoginAC(data);  
        let formData = new FormData();
        formData.append('name', this.props.state.login.changedName);
        formData.append('pass', this.props.state.login.changedPass);
        axios({
            method: 'post',
            url: 'https://95.47.116.121/api/login',
            data: formData
            })
            .then(function (response) {
                const cookies = new Cookies();
                cookies.set('token', response.data.token, { path: '/', maxAge: 40});
                console.log(response.data);
                authLogin(response.data); 
            })    
    }
   
    render(){
        return(
            <Login state={this.props.state}
                   changeName={this.props.changeNameAC}
                   changePass={this.props.changePassAC}
                   checkApi={this.checkApi}
                   check={this.check}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        state: state
    }
}

const LoginContainer = connect(mapStateToProps, {changeNameAC, changePassAC, authLoginAC})(LoginAPI);
export default LoginContainer;