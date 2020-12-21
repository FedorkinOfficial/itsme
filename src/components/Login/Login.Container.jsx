import React from 'react';
import {connect} from 'react-redux';
import Login from './Login';
import {changeNameAC, changePassAC, authLoginAC} from '../../reducers/loginReducer';

class LoginAPI extends React.Component{
    checkApi = () => {
        let authLogin = (data) => this.props.authLoginAC(data);  
        let formData = new FormData();
        formData.append('name', this.props.state.login.changedName);
        formData.append('pass', this.props.state.login.changedPass);
        // fetch(`https://mineproapi.000webhostapp.com/api/login`, {method: 'POST', body: formData, mode: 'cors', credentials: 'include'}).then(function(response) {
        //         console.log(response);
        //         return response.json();
        //     }).then(function(body) {
        //         console.log(body);
        //         authLogin(body); 
        //     });
        axios.post('https://mineproapi.000webhostapp.com/api/login', {data: formData}, {withCredentials: true}).then(function(response) {
                console.log(response);
                if(!response.data.status){
                     console.log("There are not cookies");
                } else {
                    authLogin(response.data.info);
                    console.log(response.data)
                }
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