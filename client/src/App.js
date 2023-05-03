import './App.css';
import Navbar from './components/navbar/Navbar';
import Create from './views/create/Create';
import Detail from './views/detail/Detail';
import Home from './views/home/Home';
import Landing from './views/landing/Landing';

//el Route se itiliza para definir las rutas de cada views
//el Switch se utiliza para que se renderize una ruta a la vez
import { Route, Routes, useLocation} from "react-router-dom";

function App() {

  const location = useLocation();


  return (
    <div className="App">
      {location.pathname !== "/"  && <Navbar /> }
      <Routes>
  {/* el exact path se utiliza para que si o si solo matchee con lo que se le asigna entre "" */}

        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
