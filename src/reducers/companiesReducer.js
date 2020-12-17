const  CHANGE_NAME = 'CHANGE_NAME';
const  CHANGE_INFO = 'CHANGE_INFO';
const  ADD_COMPANY = 'ADD_COMPANY';
const  FIND_COMPANY = 'FIND_COMPANY';



let initialState = {
    changedName: null,
    changedInfo: null,
    companies: [],
    isHaveCompany: false
}

let loginReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_NAME:{
            return{
                ...state,
                changedName: action.changeName
            }
        }
        case CHANGE_INFO:{
            return{
                ...state,
                changedInfo: action.changeInfo
            }
        }
        case ADD_COMPANY:{
            return{
                ...state,
                changedPass: null,
                changedInfo: null
            }
        }
        case FIND_COMPANY:{
            return{
                ...state,
                companies: action.data,
                isHaveCompany: true
            }
        }
        default:{
            return state;
        }
    }

}

export const changeNameAC = (changeName) => ({type: CHANGE_NAME, changeName});
export const changeInfoAC = (changeInfo) => ({type: CHANGE_INFO, changeInfo});
export const addComapnyAC = (data) => ({type: ADD_COMPANY, data});
export const findComapnyAC = (data) => ({type: FIND_COMPANY, data});



export default loginReducer;