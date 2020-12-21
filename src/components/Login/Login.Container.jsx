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
        // fetch(`https://mineproapi.000webhostapp.com/api/login`, {method: 'POST', body: formData}).then(function(response) {
        //         console.log(response);
        //         return response.json();
        //     }).then(function(body) {
        //         console.log(body);
        //         authLogin(body); 
        //     });
        // axios.post('https://mineproapi.000webhostapp.com/api/login', {data: formData}, {withCredentials: true})
        // .then(function(response) {
        //         console.log(response);
        //         if(!response.data.status){
        //              console.log("There are not cookies");
        //         } else {
        //             authLogin(response.data.info);
        //             console.log(response.data)
        //         }
        //     })
        axios({
            method: 'post',
            url: 'https://mineproapi.000webhostapp.com/api/login',
            data: formData
            })
            .then(function (response) {
                //handle success
                const cookies = new Cookies();
                cookies.set('token', response.data.token, { path: '/', maxAge: 40});
                localStorage.setItem('token', response.data.token);
                console.log(response.data);
                authLogin(response.data); 
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });       
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