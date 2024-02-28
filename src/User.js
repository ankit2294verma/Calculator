import React, { useState } from 'react';

const User = (props) => {
    
    return(
        <>
            <h4 data-testid="counterdata">{props.counter}</h4>
            <button onClick={props.Increment}>Increment</button>
            <button onClick={props.Decrement}>Decrement</button>
        </>
    )
}
export default User;