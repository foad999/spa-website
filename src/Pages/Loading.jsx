import React, { Component } from 'react';
import styles from "../assets/css/loading.module.css";
class Loading extends Component {
    render() {
        return (
            <div  className={styles.contain1}>
                <div  className={styles.contain}>
                    <span className={styles.circle} id={styles.circle1}></span>
                    <span className={styles.circle} id={styles.circle2}></span>
                    <span className={styles.circle} id={styles.circle3}></span>
                </div>
                <h1>loading...</h1>
            </div>
        );
    }
}

export default Loading;