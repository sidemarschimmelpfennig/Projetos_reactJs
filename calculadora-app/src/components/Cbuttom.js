import React from "react"
import styles from './buttom.css'

export default function Cbuttom({name} ,props){
    return(
        <div>
            <button className={`${styles.btn} ${styles[props.customClass]}`}>{name}</button>
        </div>
    )
}