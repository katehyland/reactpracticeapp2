import React from 'react';

const UserInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    }
    return  ( 
    <input type="text" 
    onChange={props.changed}
    style={inputStyle}
    value={props.currentName}
    placeholder= 'Enter a username'
    />
    );
}

export default UserInput;