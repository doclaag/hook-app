import PropTypes from 'prop-types';

export const Quote = ({ quote, author }) => {
    return (
        <blockquote className='blockquote text-end'>
            <p className='mb-0'>{quote}</p>
            <footer className='mt-1 blockquote-footer'>{author}</footer>
        </blockquote>
    );
};

Quote.propTypes = {
    quote: PropTypes.string,
    author: PropTypes.string,
};
