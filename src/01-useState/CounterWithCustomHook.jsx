import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
            <div className="container-fluid p-5 text-white text-center">
                <h1 className="display-4">Counter App with Hook</h1>
            </div>

            <div className="container mt-5">

                <h2 className="h2">Counter: { counter }</h2>

                <hr />
                
                <button
                    className="btn"
                    onClick={ () => increment(1)  }
                >+1
                </button>
                <button
                    className="btn"
                    onClick={ reset }
                >Reset
                </button>
                <button
                    className="btn"
                    onClick={ () => decrement(1) }
                >-1
                </button>
            </div>
        </>
  )
}
