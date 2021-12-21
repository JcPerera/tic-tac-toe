import React from 'react'

const Square = (props) => {
    return (
        <div className="square" {...props}>
            {props.square}
        </div>
    )
}

export default Square
