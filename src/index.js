import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContext from "./frontPages/Context/authContext/AuthContext";
import {Provider} from "react-redux";
import {store} from "./frontPages/store/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthContext>
                <App/>
            </AuthContext>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
