
export const validation = (data,type) =>{
        const errors = {};
  if(type === "Login"){
    if(!data.emailLog){
        errors.emailLog='Enter an email address'
    }else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.emailLog)){
        errors.emailLog= "Enter a Valid Email Address"
    }else{
        delete errors.emailLog
    }

    if(!data.passwordLog){
        errors.passwordLog='Enter a Password'
    }else if(data.passwordLog.length<6){
        errors.passwordLog = "Enter more than 6 characters"
    }else{
        delete errors.passwordLog
    }
  }
   

    if (type === "signup"){

        if(!data.email){
            errors.email='Enter an email address'
        }else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email)){
            errors.email= "Enter a Valid Email Address"
        }else{
            delete errors.email
        }
    
        if(!data.password){
            errors.password='Enter a Password'
        }else if(data.password.length<6){
            errors.password = "Enter more than 6 characters"
        }else{
            delete errors.password
        }

        if(!data.confirmPass){
            errors.confirmPass="Enter the confirmation password"
        }else if(data.confirmPass !== data.password){
            errors.confirmPass = "Password Does Not Match"
        }else{
            delete errors.confirmPass
        }
    
        if (data.tik){
            delete errors.tik
        }else{
            errors.tik = "Accept our terms"
        }

        if (!data.username.trim()){
            errors.username="Enter a valid Username"
        }else{
            delete errors.username
        }
    }else{}

    return errors
}
