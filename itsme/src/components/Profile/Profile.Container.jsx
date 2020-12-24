import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';


class ProfileAPI extends React.Component{
    render(){
        return(
            <Profile state={this.props.state}/>
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        state: state
    }
}

let ProfileContainer = connect(mapStateToProps) (ProfileAPI);
export default ProfileContainer;