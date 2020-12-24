import React from 'react';
import classes from './Companies.module.css';


let Companies = (props) => {
        let nameRef = React.createRef();
        let nameInfo = React.createRef();
        let changeName = () => {
            props.changeName(nameRef.current.value)
        }
        let changeInfo = () => {
            props.changeInfo(nameInfo.current.value)
        }
        let addComapny = () => {
            props.addCompany();
        }
        if(props.state.companies.isHaveCompany){
            return (
                <div className={classes.wrap}>
                    {props.state.companies.companies.info.map(company => (
                        <div>{company}</div>
                    ))}
                </div>
            )
        } else {
            return (
                <div className={classes.wrap}>
                    <input type="text" onChange={changeName} ref={nameRef}/>
                    <input type="text" onChange={changeInfo} ref={nameInfo}/>
                    <button onClick={addComapny} >Add</button>
                </div>
            )
        }
}

export default Companies;