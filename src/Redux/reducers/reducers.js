export const loginReducer = (state = {loginstatus: false, errormessages: ""},action) =>{
   switch(action.type){
       case "LOGIN_ACTION":
              return {loginstatus:action.data.status,errormessages: action.data.errormessages}
       default:
              return state
   }
}