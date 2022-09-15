import React from 'react';

function ErrorMessage(props) {
    return (
        <div className='error'>
            {props.children}
        </div>
    );
}

export default ErrorMessage;