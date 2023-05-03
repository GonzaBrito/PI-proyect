import "./landing.css";
import { useNavigate } from "react-router-dom";




const Landing = () => {

    const navigate = useNavigate();

    const home = () => {
        navigate("/home");
    }


    return(
        <div className="landing-container"> 
            {/* <button className="button">Home</button> */}
            <button class="game-button" onClick={home}>
                <svg class="play-icon" viewBox="0 0 40 40">
                    <path d="M 10,10 L 30,20 L 10,30 z"></path>
                </svg>
                Play Now
            </button>
        </div>
    )
}

export default Landing;