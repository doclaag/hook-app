import React from 'react';
import PropTypes from 'prop-types';

export const Child = React.memo(({ number, increment }) => {

    console.log('Me volví a generar :(');

    return (
        <button
            className='btn mr-3'
            onClick={() => increment(number)}
        >{number}</button>
    );
});

Child.propTypes = {
    number: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired
};