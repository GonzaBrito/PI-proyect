import "./create.css";
import { postGame, getGenres } from "../../redux/actions/actions";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input/Input"

const Create = () => {

    const allGenres = useSelector((state) => state.genres)
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
    }, []);

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
    }


    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     if (Object.keys(error).length === 0) {
    //         postGame(input)
    //         alert("Esta todo correcto");
    //     }

    //     console.log("esto es form", form);
    // }


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
                            <Input name="name" value={form?.name} label="Name" onChange={handleChange} />
                            <Input name="image" value={form?.image} label="Image" onChange={handleChange} />
                        </div>

                        <div className="containerDR">
                            <Input type="date" name="released" value={form?.released} label="Released" onChange={handleChange} />
                            <Input name="rating" value={form?.rating} label="Rating" onChange={handleChange} />
                        </div>

                        <div className="containerD">
                            <Input name="description" value={form?.description} label="Description" onChange={handleChange} />
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

                        <button className="button-submit" type="button" onClick={() => postGame(form)} >Create</button>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
export default Create;
