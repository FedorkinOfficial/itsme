const  CHANGE_NAME = 'CHANGE_NAME';
const  CHANGE_PASS = 'CHANGE_PASS';
const  AUTH_LOGIN = 'AUTH_LOGIN';


let initialState = {
    changedName: '',
    changedPass: null,
    name: null,
    pass: null,
    isAuth: false
}

let loginReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_NAME:{
            return{
                ...state,
                changedName: action.changeName
            }
        }
        case CHANGE_PASS:{
            return{
                ...state,
                changedPass: action.changePass
            }
        }
        case AUTH_LOGIN:{
            return{
                ...state,
                name: action.data.name,
                pass: action.data.id,
                isAuth: true,
                changedPass: null,
                changedName: null
            }
        }
        default:{
            return state;
        }
    }

}

export const changeNameAC = (changeName) => ({type: CHANGE_NAME, changeName});
export const changePassAC = (changePass) => ({type: CHANGE_PASS, changePass});
export const authLoginAC = (data) => ({type: AUTH_LOGIN, data});


export default loginReducer;