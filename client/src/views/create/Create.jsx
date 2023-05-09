import "./create.css";
import { postGame } from "../../redux/actions/actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import validate from "./errors"

const Create = () => {

    const navigate = useNavigate();

    //me seteo el estado de los inputs
    const [input, setInput] = useState({
        name: "",
        image: "",
        description: "",
        platforms: ["cosa1", "cosa2"],
        released: "",
        rating: "",
    });
    //seteo una variable error
    const [error, setError] = useState({
        name: "",
        image: "",
        description: "",
        released: "",
        rating: "",
    })

    //uso un handleChange para mostrar lo que se escribe en los inputs
    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });

        //al estado de errores le vamos a ejecutar la funcion validate pasandole como parametros el estado de los input 
        //y saber a que inpute le esta seteando el error
        setError(
            validate({
                ...input,
                [event.target.name]: event.target.value,
            })
        )
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        if (Object.keys(error).length === 0) {
            postGame(input)
            alert("Esta todo correcto");
        }
    }

    const back = () => {
        navigate("/home");
    }

    console.log(error);

    return (
        <div>
            <div className="divContainer-general">
                <div className="create-container__header">
                    <button className="button" onClick={back} >Volver</button>
                    <h1 className="h1">Create the new VideoGame</h1>
                </div>
                <form onSubmit={handleSubmit} className="formContainer">
                    <div className="create-container__info">
                        <div className="create-container__name">
                            <label> Name:
                                <input className="input" name="name" value={input?.name} autoComplete="off" onChange={handleChange} />
                            </label>
                        </div>
                        <div className="create-container__name">
                            <label> Image:
                                <input className="input" name="image" value={input?.image} autoComplete="off" onChange={handleChange} />
                            </label>
                        </div>
                        <div className="create-container__name">
                            <label> Description:
                                <input className="input" name="description" value={input?.description} autoComplete="off" onChange={handleChange} />
                            </label>
                        </div>
                        <div className="create-container__name">
                            <label> Released:
                                <input className="input" type="date" name="released" value={input?.released} autoComplete="off" onChange={handleChange} />
                            </label>
                        </div>
                        <div className="create-container__name">
                            <label> Rating:
                                <input className="input" name="rating" value={input?.rating} autoComplete="off" onChange={handleChange} />
                            </label>
                        </div>
                        <button className="button-submit" type="submit" >Create</button>
                    </div>
                </form>
            </div>
        </div >
    )
}
export default Create;



// {
//     "name": "leo",
//     "genres": "fulbito",
//     "description": "el mejor de todos",
//     "platforms": ["mucho", "fultob"],
//     "released": "campeon",
//     "image": "el 10",
//     "rating": "10"
//   }

// description
// :
// "es un juego de autos"
// image
// :
// "https://1000marcas.net/wp-content/uploads/2022/01/Rocket-League-Logo-2015.png"
// name
// :
// "gonzalo"
// platforms
// :
// "pc"
// rating
// :
// "4.6"
// released
// :
// "2000-05-09"










{/* <h2>NAME:</h2>
            <input name="name" value={form?.name} onChange={handleForm} autoComplete="off" />
            <h2>IMAGE:</h2>
            <input name="image" value={form?.image} onChange={handleForm} autoComplete="off" />
            <h2>DESCRIPTION:</h2>
            <input name="description" value={form?.description} onChange={handleForm} autoComplete="off" />
            <h2>PLATFORMS:</h2>
            <input type="checkbox" name="PC" onChange={[manejarClick, handleForm]} >
                PC
            </input >
            <input type="check" onChange={manejarClick} name="XBOX">
                XBOX
            </input >
            <input type="check" onChange={manejarClick} name="PLAY">
                PLAY
            </input>
            <p>Botones presionados: {botonPresionado.join(', ')}</p>
            <h2>RELEASED:</h2>
            <input name="released" value={form?.released} onChange={handleForm} autoComplete="off" />
            <h2>RATING:</h2>
            <input name="rating" value={form?.rating} onChange={handleForm} autoComplete="off" />
            <button onClick={() => postGame(form)} >Enviar</button> */}



