import "./landing.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {

    const navigate = useNavigate();

    return(
        <div className="landing-container"> 
        <div className="buttonContainer">

            <button class="game-button" onClick={() =>navigate("/home")}>
               <span>Go to Home</span><i></i>
            </button>
            
        </div>
        </div>
    )
}

export default Landing;