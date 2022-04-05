import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lauout from "./frontPages/hoc/Lauout";
import Header from "./frontPages/hoc/Header";
import Home, {StartDateContext} from "./frontPages/Pages/Home";
import TimeLine from "./frontPages/Pages/TimeLine";
import Register from "./frontPages/Pages/Register";
import LogIn from "./frontPages/Pages/LogIn";


function App() {
    return (
        <BrowserRouter>
            <StartDateContext>
                <Header>
                </Header>
                <Lauout>
                    <Routes>
                        <Route path='/' exact element={
                            <Home/>
                        }/>
                        <Route path='/timeline' element={
                            <TimeLine/>
                        }/>
                        <Route path={'/register'} element={
                            <Register/>
                        }/>
                        <Route path={'/logIn'} element={
                            <LogIn/>
                        }/>
                    </Routes>
                </Lauout>
            </StartDateContext>
        </BrowserRouter>
    );
}

export default App;
