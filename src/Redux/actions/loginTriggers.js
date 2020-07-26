export const loginTrigger = (userCredentials)=>{
    console.log(userCredentials)
    return {
        type: "PERFORM_LOGIN",
        data: userCredentials
    }
}