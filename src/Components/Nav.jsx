import React from 'react';
import styles from "../assets/css/nav.module.css";
import {Link} from 'react-router-dom'
const Nav =()=>{
    return(
    <header>
       <nav className={styles.container}>
           <ul className={styles.sar}>
               <li><Link to='/' className={styles.bakhsh}>home page</Link></li>
               <li><Link to='/products' className={styles.bakhsh}>Products</Link></li>
               <li><Link to='/contactus' className={styles.bakhsh}>contact us</Link></li>
               <li><Link to='/login' className={styles.bakhsh}>Login</Link> </li>
           </ul>
       </nav>
       <div>
           <span className={styles.shekl}></span>
       </div>
    </header>
)
}

export default Nav;