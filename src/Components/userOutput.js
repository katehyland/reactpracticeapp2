import React from 'react';


const UserOutput = (props) => {
    return ( 
        <div className="output">
        <p>Username: {props.userName}</p>
        <p>Password: Password123</p>
    </div>
    ); 
};

export default UserOutput;