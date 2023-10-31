import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
export const FormWithCustomHook = () => {


    const { formState, onInputChange, onResetForm } = useForm(
        {
            username: '',
            email: '',
            password: ''
        }
    );

    const { username, email, password } = formState;
    

    useEffect(() => {
        return () => {
        //   console.log('useEffect')
        };
      }, []);

    useEffect(() => {
      return () => {
        // console.log('formState')
      };
    }, [formState]);

    useEffect(() => {
        return () => {
        //   console.log('email')
        };
      }, [email]);


  return (
    <>
            <div className="container-fluid p-3 text-white text-center">
                <h1 className="display-4">Formulario con Custom Hook</h1>
            </div>

            <div className="container mt-5">

                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />

                <input 
                    type="email" 
                    className="form-control mt-2"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />

<input 
                    type="password" 
                    className="form-control mt-2"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                />

                <hr />
                
                <button onClick={ onResetForm } className='btn mt-2'>Borrar</button>
                
            </div>
        </>
  );
};
