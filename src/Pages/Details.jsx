import React from 'react';
import {useParams,useNavigate,Outlet} from "react-router-dom"
function Details(props) {
    const navigate = useNavigate()
    const params = useParams()
    console.log(params )
   const push = ()=>{
        navigate('/notfound')
    }
    return (
        <div>
            <h1>Details #{params.id}</h1>
            <button onClick={push}>Not found</button>
        </div>
    );
}

export default Details;