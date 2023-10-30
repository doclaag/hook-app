import { useState } from "react";

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <div className="container-fluid p-5 text-white text-center">
                <h1 className="display-4">Count App</h1>
            </div>

            <div className="container mt-5">

                <h2 className="h2">Counter1: {counter1}</h2>
                <h2 className="h2">Counter2: {counter2}</h2>
                <h2 className="h2">Counter3: {counter3}</h2>

                <hr />

                
                <button
                    className="btn"
                    onClick={
                        () => setCounter({
                            ...state,
                            counter1: counter1 + 1,
                        })
                    }
                >Increment
                </button>
            </div>
        </>
    );
};
