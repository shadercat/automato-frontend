import React from "react";
import logo from "../logo.svg";
import '../App.css';


function Loader() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>loading...</div>
            </div>
        </div>
    )
}
export default Loader;