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
import ProfileContext from "./frontPages/Context/ProfileContext/ProfileContext";


function App() {
    const auth = useAuth()

    return (
        <CounterContext>
            <ProfileContext>
                <Hoc>
                    {auth.auth
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
                                    <Route exact={true} path={'/profile/:id'} element={
                                        <Profile/>
                                    }/>
                                    {auth.adminStatus
                                        ? <Route path={'/AdminPanel'} element={
                                            <AdminPanel/>
                                        }/>
                                        : null}
                                    <Route path={'*'} element={<Home/>}/>
                                </Routes>
                            </Lauout>
                        </BrowserRouter>
                        : <BrowserRouter>
                            <Routes>
                                <Route path={'/login'} element={
                                    <LogIn/>
                                }/>
                                <Route path={'/register'} element={
                                    <Register/>
                                }/>
                                <Route path={'*'} element={
                                    <LogIn/>
                                }/>
                            </Routes>
                        </BrowserRouter>
                    }
                </Hoc>
            </ProfileContext>
        </CounterContext>
    );
}

export default App;

