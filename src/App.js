import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lauout from "./frontPages/hoc/Lauout";
import Header from "./frontPages/hoc/Header";
import styles from './frontPages/Styled/styles.css'
import Home from "./frontPages/Pages/Home";
import TimeLine from "./frontPages/Pages/TimeLine";

function App() {
    return (
        <>
            <Header>

            </Header>
            <Lauout>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={
                            <Home/>
                        }/>
                        <Route path='/Timeline' element={
                            <TimeLine/>
                        }/>
                    </Routes>
                </BrowserRouter>
            </Lauout>
        </>
    );
}

export default App;
