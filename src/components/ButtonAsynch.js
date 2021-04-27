import React  from 'react'
import './Button.css'

const ButtonAsynch = ({increment, decrement}) => {
    const asynch = {
        display : 'inline-block',
        width: '50%',
        height: '100vh',
    }
    return(
        <div style = {asynch}>
            <button className ="incAsynch" onClick = {increment}>+</button>
            <button className ="decAsynch" onClick = {decrement}>-</button>
            <div className ="sideAsynch">ASYNCHRON</div>
        </div>
    )
}
export default ButtonAsynch;