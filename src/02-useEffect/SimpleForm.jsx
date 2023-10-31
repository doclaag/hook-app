import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {


    const [formState, setFormSate] = useState({
        username: 'doclaa',
        email: 'correo@correo.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;

        setFormSate({
            ...formState,
            [name]: value
        })
    };

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
                <h1 className="display-4">Formulario Simple</h1>
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

                <hr />
                
                
            </div>

            {
                (username === 'doclaag' ) && <Message/>
            }
        </>
  );
};
