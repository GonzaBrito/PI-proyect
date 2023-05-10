import Cards from "../../components/cards/Cards";
import Navbar from "../../components/navbar/Navbar";
import Filter from "../../components/filter/Filter";
import "./home.css";


const Home = () => {
    return (
        <div >
            <Navbar />
            <div className="home-title">
                <Filter />
                <Cards />
            </div>
        </div>
    )
}

export default Home;