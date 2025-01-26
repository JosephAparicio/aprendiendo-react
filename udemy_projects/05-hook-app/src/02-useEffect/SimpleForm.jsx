import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'joseph',
        email: 'joseph@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]:value
        });
    }

    useEffect(() => {
        // console.log('Se cambia el formulario');
    }, [formState]);
    
    useEffect(() => {
        // console.log('Se cambia el email');
    }, [email]);

    

    return (
        <>
        <h1>Formulario Simple</h1>
        <hr />

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
                placeholder="correo"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'joseph2' && <Message/>)
            }
        </>
    )
}

