import React, {useState} from 'react';

function CreateCharacter() {
    const [input, setInput] = useState({
        name: '',
        lastName: '',
        age: '',
    });

    function onChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault()
        alert([input.name, input.lastName, input.age])
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Nombre
                    <input type='text' name='name' onChange={onChange} />
                </label>
                <label>
                    Apellido
                    <input
                        type='text'
                        name='lastName'
                        onChange={onChange}
                    />
                </label>
                <label>
                    Edad
                    <input type='text' name='age' onChange={onChange} />
                </label>
                <button type="submit">Enviame</button>
            </form>
        </div>
    );
}

export default CreateCharacter;
