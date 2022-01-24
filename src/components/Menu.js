import React from 'react'

function Menu(props) {
    return (
        <div className="container" >
            <h2>Select the Game Mode</h2>
            <div className="items" onClick={props.onClick}>
                Local Player vs Player
            </div>
            <div className="items disabled">
                Player Vs Pc
            </div>
            <div className="items disabled">
                Online Player Vs Player
            </div>
            
        </div>
    )
}

export default Menu
