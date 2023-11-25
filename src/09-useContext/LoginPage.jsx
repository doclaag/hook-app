import { useContext } from 'react';
import { UserContext } from './context';

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);


    return (
        <>
            <h1>LoginPage</h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                className='btn'
                onClick={() => setUser({ id: 123, name: 'Luis Alonzo', email: 'correo@corre.com' })}
            >
                Establecer Usuario
            </button>
        </>
    )
}
