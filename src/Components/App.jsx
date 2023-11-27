
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from "./NavbarTop";
import "./App.css"
import {GlobalStyle} from "../Styled-Components/Global";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Devices from "./Devices";
import {BrowserRouter} from "react-router-dom";
import Pools from "./Pool/Pools";





function App() {
    return (
        <BrowserRouter>
        <div className="main-div">
            <GlobalStyle/>
            <NavbarTop/>
            <Pools/>
            {/*<Devices/>*/}



        </div>
        </BrowserRouter>
    );
}

export default App;
