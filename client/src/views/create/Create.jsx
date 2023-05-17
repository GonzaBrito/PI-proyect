import "./create.css";
import { postGame, getGenres } from "../../redux/actions/actions";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input/Input"
import validate from "./errors";

const Create = () => {

    const allGames = useSelector((state) => state.games)
    const allGenres = useSelector((state) => state.genres)
    const navigate = useNavigate();

    const [error, setError] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch]);

    const allPlatforms = ['PC', 'Xbox', 'PlayStation', 'Nintendo', 'Switch', 'iOS', 'Android']

    const genresMap = allGenres?.map((gen) => gen.name)

    const [form, setForm] = useState({
        platforms: [],
        genres: [],
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target

        if (type === "checkbox") {
            if (name === "platform") {
                const platforms = form.platforms.includes(value)
                    ? form.platforms.filter(platform => platform !== value)
                    : [...form.platforms, value]
                setForm({
                    ...form,
                    platforms
                })
            } else {
                const genres = form.genres.includes(value)
                    ? form.genres.filter(gen => gen !== value)
                    : [...form.genres, value]
                setForm({
                    ...form,
                    genres: genres
                })
            }
        } else {
            setForm({
                ...form,
                [name]: value
            })
        }
        setError(
            validate({
                ...form,
                [e.target.value]: e.target.value,
            })
        );
    }


    function post() {
        let gamesRepetion = allGames.filter((n) => n.name === form.name);
        if (gamesRepetion.length !== 0) {
            alert("Please choose another name, it already exists");
        } else {
            if (
                Object.keys(error).length !== 0 ||
                !form.genres?.length ||
                !form.platforms?.length
            ) {
                alert("All fields must be completed");
            } else {
                if (Object.keys(error).length === 0 && form.genres.length > 0) {
                    postGame(form);
                    alert("Videogame successfully created");
                    // setForm({
                    //     name: "",
                    //     image: "",
                    //     description: "",
                    //     released: "",
                    //     rating: "",
                    //     platforms: [],
                    //     genres: [],
                    // });

                }
            }
        }
    }


    return (
        <div>
            <div className="divContainer-general">
                <div className="create-container__header">
                    <button className="createButton" onClick={() => navigate("/home")} >Volver</button>
                    <h1 className="h1">Create the new VideoGame</h1>
                </div>

                <div className="formContainer">
                    <div className="create-container__info">

                        <div className="containerNI">
                            <Input name="name" value={form?.name} label="Name" onChange={handleChange} error={error.name} />

                            <Input name="background_image" value={form?.background_image} label="Image" onChange={handleChange} error={error.background_image} />
                        </div>

                        <div className="containerDR">
                            <Input type="date" name="released" value={form?.released} label="Released" onChange={handleChange} error={error.released} />
                            <Input name="rating" value={form?.rating} label="Rating" onChange={handleChange} error={error.rating} />
                        </div>

                        <div className="containerD">
                            <Input name="description" value={form?.description} label="Description" onChange={handleChange} error={error.description} />
                        </div>

                        <div className="containerPG">

                            <div className="containerP">

                                <h2>PLATFORMS:</h2>
                                {allPlatforms?.map((plat, index) => (
                                    <Input key={index} type="checkbox" name="platform" value={plat} label={plat} onChange={handleChange} />
                                ))}
                            </div>

                            <div className="containerG">
                                <h2>GENRES:</h2>
                                {genresMap?.map((gen, index) => (
                                    <Input key={index} type="checkbox" name="genres" value={gen} label={gen} onChange={handleChange} />
                                ))}
                            </div>

                        </div>
                        <div className="createButtonContainer">

                            <button disabled={Object.keys(error).length !== 0} className="button-submit" type="button" onClick={post} >Create</button>
                            {/* <button disabled={Object.keys(error).length !== 0} className="button-submit" type="button" onClick={() => postGame(form) && window.alert("Se creo el juego correctamente")} >Create</button> */}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
export default Create;
