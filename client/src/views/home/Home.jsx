import Cards from "../../components/cards/Cards";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";


const Home = () => {
    return(
        <div className="home-title">
            <Navbar/>
            <Cards />
        </div>
    )
}

export default Home;