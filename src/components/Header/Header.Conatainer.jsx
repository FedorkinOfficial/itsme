import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import axios from 'axios';
import {authLoginAC} from '../../reducers/loginReducer';
import Cookie from 'universal-cookie';


class HeaderAPI extends React.Component{
    componentDidMount(){
        let authLogin = (data) => this.props.authLoginAC(data);
        // fetch("https://mineproapi.000webhostapp.com/api/rusers",{method: 'POST', credentials: 'include'}).then(function(response) {
        //             console.log(response);
        //             return response.json();
        //         }).then(function(body) {
        //             console.log(body);
        //         });
        // axios.get('https://mineproapi.000webhostapp.com/api/users', {withCredentials: true}, {withCredentials: true}).then(function(response) {
        //         console.log(response);
        //         if(!response.data.status){
        //              console.log("There are not cookies");
        //              console.log(response.data);
        //         } else {
        //             // authLogin(response.data.info);
        //             console.log(response.data)
        //         }
        //     })
        let cookie = new Cookie();
        let formData = new FormData();
        formData.append('token', cookie.get('token'));
        axios({
            method: 'post',
            url: 'https://itsmeapi/api/rusers',
            data: formData,
            })
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                authLogin(response.data);
            });
    }
 
    render(){
        return(
            <Header state={this.props.state}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        state: state
    }
}

const HeaderContainer = connect(mapStateToProps, {authLoginAC})(HeaderAPI);
export default HeaderContainer;