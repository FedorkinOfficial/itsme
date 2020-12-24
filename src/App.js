import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/Header.Conatainer';
import LoginContainer from './components/Login/Login.Container';
import RegisterContainer from './components/Register/Register.Container';
import ProfileContainer from './components/Profile/Profile.Container';
import ComapniesContainer from './components/Companies/CompaniesConatainer';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
        <HeaderContainer />
        </div>
        <div className="main_body">
          <Route path={'/mycompany'}/>
          <Route path={'/login'} render={() => <LoginContainer />}/>
          <Route path={'/register'} render={() => <RegisterContainer />}/>
          <Route path={'/myprofile'} render={() => <ProfileContainer />}/>
          <Route path={'/mycompany'} render={() => <ComapniesContainer />}/>
        </div>
      </div>    
    </BrowserRouter>
  );
}

export default App;
