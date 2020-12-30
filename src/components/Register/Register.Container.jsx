import React from 'react';
import {connect} from 'react-redux';
import Register from './Register';
import {changeNameAC, changePassAC, clickRegisterAC} from '../../reducers/registerReduce';

class RegisterAPI extends React.Component{
    postApi = () => {
        let formData = new FormData();
        formData.append('name', this.props.state.register.changedName);
        formData.append('pass', this.props.state.register.changedPass);
        fetch(`https://itsmeapi/api/users`, {method: 'POST', body: formData, credentials: "include"}).then(function(response) {
                console.log(response);
                return response.json();
            }).then(function(body) { 
                console.log(body);
            }); 
    }           

    render(){
        return(
            <Register 
                        state={this.props.state}
                      changeName={this.props.changeNameAC}
                      changePass={this.props.changePassAC}
                      postApi={this.postApi}
                      clickRegister={this.props.clickRegisterAC}
                      
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        state: state
    }
}

const RegisterContainer = connect(mapStateToProps, {changeNameAC, changePassAC, clickRegisterAC})(RegisterAPI);
export default RegisterContainer;