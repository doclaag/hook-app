import { useCounter, useFetch } from '../hooks';
import { Quote, LoadingQuote } from '../03-examples';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    // console.log(counter)

    const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    // console.log({ data, isLoading, error });

    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote quote={quote} author={author} />
            }

            <button
                className='btn btn-primary fw-bold'
                disabled={isLoading}
                onClick={() => increment(1)}
            >
                Next Quote
            </button>
        </>
    );
};
