import React from 'react';
import {connect} from 'react-redux';
import Companies from './Companies';
import {addComapnyAC, changeNameAC, changeInfoAC, findComapnyAC} from '../../reducers/companiesReducer';
import axios from 'axios';
import Cookie from 'universal-cookie';


class ComapniesAPI extends React.Component{
    componentDidMount(){
        let findComapny = (data) => this.props.findComapnyAC(data)
        let cookie = new Cookie();
        let formData = new FormData();
        formData.append('token', cookie.get('token'));
        axios({
            method: 'post',
            url: 'https://95.47.116.121/api/companies',
            data: formData,
            headers: {
                'Access-Control-Allow-Origin': 'https://95.47.116.121',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
                'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, x-access-toke'
            }
            })
            .then(function (response) {
                console.log(response);
                if(!response.data.status){
                    console.log("There are not companies");
                } else {
                    console.log(response.data);
                    findComapny(response.data);
                }             
            });
    }
    addCompany = () => {
        let formData = new FormData();
        let cookie = new Cookie();
        formData.append('name', this.props.state.companies.changedName);
        formData.append('info', this.props.state.companies.changedInfo);
        formData.append('token', cookie.get('token'));
        fetch(`https://itsmeapi/api/company`, {method: 'POST', body: formData}, {withCredentials: true}).then(function(response) {
                console.log(response);
                return response.json();
            }).then(function(body) { 
                console.log(body);
            }); 
    }
    render(){
        return(
            <Companies state={this.props.state}
                       addComapny={this.props.addComapnyAC}
                       changeName={this.props.changeNameAC}
                       changeInfo={this.props.changeInfoAC}
                       addCompany={this.addCompany}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        state: state
    }
}

const ComapniesContainer = connect(mapStateToProps, {addComapnyAC, changeNameAC, changeInfoAC, findComapnyAC})(ComapniesAPI);
export default ComapniesContainer;