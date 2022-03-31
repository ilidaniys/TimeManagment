import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lauout from "./frontPages/hoc/Lauout";
import Header from "./frontPages/hoc/Header";
import styles from './frontPages/Styled/styles.css'
import Home from "./frontPages/Pages/Home";
import TimeLine from "./frontPages/Pages/TimeLine";
import Register from "./frontPages/Pages/Register";

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
                    <Route path='/timeline' element={
                        <TimeLine/>
                    }/>
                    <Route path={'/Register'} element={
                        <Register/>
                    }/>
                </Routes>
            </Lauout>
        </BrowserRouter>
    );
}

export default App;
