import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author }) => {

    const pRef = useRef();

    const [boxSize, setBoxSize] = useState({ height: 0, width: 0 });

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();

        setBoxSize({ height, width });
    }, [quote]);

    return (
        <>
            <blockquote
                className='blockquote text-end'
                style={{ display: 'flex' }}
            >
                <p ref={pRef} className='mb-0'>{quote}</p>
                <footer className='mt-1 blockquote-footer'>{author}</footer>
            </blockquote>
            <code>
                {JSON.stringify(boxSize)}
            </code>
        </>
    );
};

Quote.propTypes = {
    quote: PropTypes.string,
    author: PropTypes.string,
};
