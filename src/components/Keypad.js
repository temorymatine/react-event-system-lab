// Code Keypad Component Here
import React, { Component } from 'react'

export class Keypad extends Component {
    
    render() {
        return (
            <div>
                <input onKeyUp={() => {console.log('Entering password...')}} type="password" />
            </div>
        )
    }
}

export default Keypad