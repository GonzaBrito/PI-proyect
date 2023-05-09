import Cards from "../../components/cards/Cards";
import Navbar from "../../components/navbar/Navbar";
import Filter from "../../components/filter/Filter";
import "./home.css";


const Home = () => {
    return(
        <div className="home-title">
            <Navbar/>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div>
                    <Filter/>
                </div>
                <Cards />
            </div>
        </div>
    )
}

export default Home;