import React from "react";
import Assets from "./Assets";




const Main = () => {


    return (

        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="nav-item" href="#">HOME</a>
                    <a className="nav-item" href="#">MAQUINAS</a>
                    <a className="nav-item" href="#">SAIR</a>
                </div>    
            </nav>
            <div>
                <Assets />
            </div>
        </div>
    );
};

export default Main;