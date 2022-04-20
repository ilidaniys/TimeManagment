import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lauout from "./frontPages/hoc/Lauout";
import Header from "./frontPages/hoc/Header";
import styles from './frontPages/Styled/styles.css';
import Home from "./frontPages/Pages/Home";
import Profile from "./frontPages/Pages/Profile";
import Register from "./frontPages/Pages/Register";
import LogIn from "./frontPages/Pages/LogIn";
import CounterContext from "./frontPages/Context/CounterContext/CounterContext";
import {useAuth} from "./frontPages/Context/authContext/AuthContext";
import AdminPanel from "./frontPages/Pages/AdminPanel";
import Hoc from "./frontPages/hoc/Hoc";


function App() {
    const auth = useAuth()

    return (
        <CounterContext>
            <Hoc>
                {auth?.auth
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
                                <Route path={'/profile/:id'} element={
                                    <Profile/>
                                }/>
                                {auth?.adminStatus
                                    ? <Route path={'/AdminPanel'} element={
                                        <AdminPanel/>
                                    }/>
                                    : null
                                }

                                <Route path={'*'} element={<Home/>}/>

                            </Routes>
                        </Lauout>
                    </BrowserRouter>
                    : <BrowserRouter>
                        <Routes>
                            <Route path={'*'} element={
                                <LogIn/>
                            }/>
                            <Route path={'/login'} element={
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
    );
}

export default App;

