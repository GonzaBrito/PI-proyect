import './App.css';
import Create from './views/create/Create';
import Detail from './views/detail/Detail';
import Home from './views/home/Home';
import Landing from './views/landing/Landing';

import { Route, Routes, useLocation} from "react-router-dom";

function App() {


  const location = useLocation();


  return (
    <div className="App">
      {/* {(location.pathname !== "/" && <Navbar /> } */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/videogames/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
