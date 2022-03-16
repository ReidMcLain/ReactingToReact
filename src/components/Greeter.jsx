import React from 'react';

const Greeters = (props) => {
    return (
        <header>{props.phrase}, {props.name}!</header>
    )
}

export default Greeters;