import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lauout from "./frontPages/hoc/Lauout";
import Header from "./frontPages/hoc/Header";
import styles from './frontPages/Styled/styles.css'
import Home from "./frontPages/Pages/Home";
import Profile from "./frontPages/Pages/Profile";
import Register from "./frontPages/Pages/Register";
import LogIn from "./frontPages/Pages/LogIn";

function App() {
    return (
        <BrowserRouter>
            <Header>
            </Header>
            <Lauout>
                <Routes>
                    <Route path='/' exact element={
                        <Home/>
                    }/>
                    <Route path='/profile' element={
                        <Profile/>
                    }/>
                    <Route path={'/register'} element={
                        <Register/>
                    }/>
                    <Route path={'/logIn'} element={
                        <LogIn/>
                    }/>
                </Routes>
            </Lauout>
        </BrowserRouter>
    );
}

export default App;
