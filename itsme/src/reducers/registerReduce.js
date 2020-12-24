const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_PASS = 'CHANGE_PASS';
const CLICK_REGISTER = 'CLICK_REGISTER';



let initialState = {
    changedName: '',
    changedPass: '',
    status: false,
    reason: ''
}


export let registerReduce = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_NAME:{
            return {
                ...state,
                changedName: action.changedName
            }    
        }
        case CHANGE_PASS:{
            return {
                ...state,
                changedPass: action.changedPass
            }    
        }
        case CLICK_REGISTER:{
            return {
                ...state,
                changedName: '',
                changedPass: '',
                status: true,
                reason: action.reason
            }    
        }
        default:{
            return{
                ...state
            } 
        }
    }
}

export const changeNameAC = (changedName) => ({type: CHANGE_NAME, changedName});
export const changePassAC = (changedPass) => ({type: CHANGE_PASS, changedPass});
export const clickRegisterAC = (reason) => ({type: CLICK_REGISTER, reason});