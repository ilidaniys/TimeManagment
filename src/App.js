import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lauout from "./frontPages/hoc/Lauout";
import Header from "./frontPages/hoc/Header";
import styles from './frontPages/Styled/styles.css';
import Home from "./frontPages/Pages/Home";
import Profile from "./frontPages/Pages/Profile";
import Register from "./frontPages/Pages/Register";
import LogIn from "./frontPages/Pages/LogIn";
import AdminPanel from "./frontPages/Pages/AdminPanel";
import Hoc from "./frontPages/hoc/Hoc";
import {useSelector} from "react-redux";


function App() {
    const auth = useSelector(state => state.authReducer.token)
    const adminStatus = useSelector(state => state.authReducer.adminStatus)
    return (
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
                                    <Route exact={true} path={'/profile/:id'} element={
                                        <Profile/>
                                    }/>
                                    {adminStatus
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
    );
}

export default App;

