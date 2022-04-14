import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lauout from "./frontPages/hoc/Lauout";
import Header from "./frontPages/hoc/Header";
import styles from './frontPages/Styled/styles.css';
import Home from "./frontPages/Pages/Home";
import Profile from "./frontPages/Pages/Profile";
import Register from "./frontPages/Pages/Register";
import LogIn from "./frontPages/Pages/LogIn";
import CounterContext from "./frontPages/Context/CounterContext/CounterContext";
import AuthContext, {useAuth} from "./frontPages/Context/authContext/AuthContext";
import AdminPanel from "./frontPages/Pages/AdminPanel";
import Hoc from "./frontPages/hoc/Hoc";


function App() {
    const auth = useAuth()

    return (
        <AuthContext>
            <CounterContext>
                <Hoc>
                    {auth
                        ? <BrowserRouter>
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
                                    <Route path={'/AdminPanel'} element={
                                        <AdminPanel/>
                                    }/>

                                </Routes>
                            </Lauout>
                        </BrowserRouter>
                        : <BrowserRouter>
                                <Routes>
                                    <Route path={'/logIn'} element={
                                        <LogIn/>
                                    }/>
                                    <Route path={'/register'} element={
                                        <Register/>
                                    }/>
                                </Routes>
                        </BrowserRouter>
                    }
                </Hoc>
            </CounterContext>
        </AuthContext>
    );
}

export default App;

