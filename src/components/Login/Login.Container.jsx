import React from 'react';
import {connect} from 'react-redux';
import Login from './Login';
import {changeNameAC, changePassAC, authLoginAC} from '../../reducers/loginReducer';
// import axios from 'axios';
// import Cookies from 'universal-cookie';

class LoginAPI extends React.Component{
    checkApi = () => {
        // let authLogin = (data) => this.props.authLoginAC(data);  
        let formData = new FormData();
        formData.append('name', this.props.state.login.changedName);
        formData.append('pass', this.props.state.login.changedPass);
        fetch(`https://95.47.116.121/api/login`, {mode: 'no-cors', method: 'POST', body: formData, credentials: "include"}).then(function(response) {
                console.log(response);
                return response;
            }).then(function(body) { 
                console.log(body);
            });
        // axios({
        //     method: 'post',
        //     url: 'https://95.47.116.121/api/login',
        //     data: formData,
        //     headers: {
        //         'Access-Control-Allow-Origin': 'https://95.47.116.121',
        //         'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
        //         'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, x-access-toke'
        //     }
        //     })
        //     .then(function (response) {
        //         const cookies = new Cookies();
        //         cookies.set('token', response.data.token, { path: '/', maxAge: 40});
        //         console.log(response.data);
        //         authLogin(response.data); 
        //     })    
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