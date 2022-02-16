import React,{useState,useEffect,useReducer} from 'react';
import styles from "../assets/css/LoginPage.module.css"
import image from "../assets/images/My password-bro.svg"
import {validation} from "../Components/validation"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [con,setCon] = useState(false)
    const [btn,setBtn] = useState(false)
    const [data,setData] = useState({
        username : '',
        password: '',
        email: '',
        confirmPass:'',
        tik : false,

        emailLog:"",
        passwordLog:""
    })
    const [error,setError]= useState({})
    const [error2,setError2]= useState({})

    const notify = (text,type) => {
        if(type=="success"){
            toast.success(text)
        }else if(type=="error"){
            toast.error(text)
        }
    };

    useEffect(()=>{
        setError(validation(data,"signup"))
        setError2(validation(data,"Login"))
        console.log(error)
    },[data])

    const  changeHandler = (event)=>{
            setData({...data,[event.target.name]:event.target.value})
    }
    const btnHandler = ()=>{
            setBtn(true)
        if (!Object.keys(error).length ){
            notify("you signed in","success")
        }else{
            notify("You Faild","error")
        }
        
    }
    const btn2Handler = ()=>{
        if (!(error2.emailLog && error2.passwordLog) ){
            notify("you signed in","success")
        }else{
            notify("You Faild","error")
        }
    }

    return (
        <div className={styles.container} >
            <div className={con ? styles.signUP : styles.signUP2}> 
                    <h1>Sign Up</h1>
                    <label htmlFor='username'>Username</label>
                    <input name='username' value={data.username} onChange={changeHandler}></input>
                    <span className={btn ?styles.error:styles.notError}>{error.username}</span>

                    <label htmlFor='email'>Email</label>
                    <input name='email' value={data.email} onChange={changeHandler}></input>
                    <span className={btn ?styles.error:styles.notError}>{error.email}</span>

                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={data.password} onChange={changeHandler}></input>
                    <span className={btn ?styles.error:styles.notError}>{error.password}</span>

                    <label htmlFor='confirmPass'> Repeat Password</label>
                    <input type='password' name='confirmPass' value={data.confirmPass} onChange={changeHandler}></input>
                    <span className={btn ?styles.error:styles.notError}>{error.confirmPass}</span>

                    <button type='submit' className={styles.btn} onClick={btnHandler}>submit</button>
                    <h1 onClick={() => setCon(!con)}>back to login</h1>
            </div>


            <div className={con ? styles.Login2:styles.Login}>
                <div className={styles.mainLog}>
                    <h1>Login</h1>  
                    <label htmlFor='emailLog'>Email</label>
                    <input name='emailLog' value={data.emailLog} onChange={changeHandler}></input>
                    
                    
                    <label htmlFor='passwordLog'>Password</label>
                    <input type='password' name='passwordLog' value={data.passwordLog} onChange={changeHandler}></input>
                    

                    <button type='submit' className={styles.btn} onClick={btn2Handler} >submit</button>
                    <h1 onClick={() => setCon(!con)}>create account</h1>
                </div>
            </div>

            <div>
                 <img src={image} alt="image" className={con?styles.asideSign:styles.aside}></img>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;