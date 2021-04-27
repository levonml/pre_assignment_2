import React  from 'react'
import './Button.css'

 
const ButtonSynch = ({increment, decrement}) => {
 
    const synch= {
        display : 'inline-block',
        height : '100vh',
        width : '50%'
    }
    return(
        <div style = {synch}>
            <button className = "incSynch" onClick = {increment}>+</button>
            <button className = "decSynch" onClick = {decrement}>-</button>
            <div className = "sideSynch">SYNCHRON</div>
        </div>
    )
}
export default ButtonSynch;