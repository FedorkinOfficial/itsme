import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import axios from 'axios';
import {authLoginAC} from '../../reducers/loginReducer';



class HeaderAPI extends React.Component{
    componentDidMount(){
        let authLogin = (data) => this.props.authLoginAC(data)
        fetch('https://itsmeapi/api/users', {method: 'GET', credentials: 'include', mode: 'cors'}, {credentials: 'include', mode: 'cors'}).then(function(response) {
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