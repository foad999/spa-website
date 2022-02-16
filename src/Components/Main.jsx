import React from 'react';
import styles from '../assets/css/main.module.css'
import background from '../assets/images/123.jpg'
const Main=()=>{
        return (
            <div className={styles.all}>
                 <h1 className={styles.h1}>foad's design</h1>
                 <details className={styles.detail}>
                 <h3>winter colection</h3>
                 <h3>summer colection</h3>
                    <summary>samples</summary>
                 </details>
                <img className={styles.pic} src={background}  alt='background'></img>
            </div>
        );
}

export default Main;