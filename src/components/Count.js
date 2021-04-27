import React from 'react'

const Count = ({count}) => {
    const center = {
        position: 'absolute',
        width: 20,
        height: 20,
        left: '50%',
        top: '50%',
    }
    const middle = {
        boxSizing: 'border-box',
        textAlign: 'center',
        fontSize: 80,
        paddingTop: 50,
        fontFamily: 'Roboto',
        width: 200,
        height: 200,
        color:'#141715',
        borderRadius: '100%',
        background: 'radial-gradient(#d4af37, #944d06)',
        position: 'relative',
        right: 100,
        bottom: 90,
        border: 'solid',
        borderWidth: 0,
    }
    return(
        <div style = {center}>
            <div style = {middle}>{count}</div>
        </div>
    )
}

export default Count 