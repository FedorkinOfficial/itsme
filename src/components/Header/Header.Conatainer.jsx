import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import axios from 'axios';
import {authLoginAC} from '../../reducers/loginReducer';
import Cookie from 'universal-cookie';


class HeaderAPI extends React.Component{
    componentDidMount(){
        let authLogin = (data) => this.props.authLoginAC(data);
        let cookie = new Cookie();
        let formData = new FormData();
        formData.append('token', cookie.get('token'));
        axios({
            method: 'post',
            url: 'https://95.47.116.121/api/rusers',
            data: formData,
            headers: {
                'Access-Control-Allow-Origin': 'https://95.47.116.121',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
                'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, x-access-toke'
            }
            })
            .then(function (response) {
                if(!response.data.status){
                    console.log("There are not cookies");
                } else {
                    console.log(response.data);
                    authLogin(response.data);
                }             
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