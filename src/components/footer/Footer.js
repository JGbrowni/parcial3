import React from "react";
import { Link } from "react-router-dom";

const Footer =() =>{
    return(
        <div>
            <footer className="text-white py-4 bg-dark">
                <div className="container">
                    <nav className="row">
                        <Link to='/' className="col-12 col-md-3 d-flex align-item-center justify-content-center">
                            <img src='./Logodelfin.png' className="mx-2" />
                        </Link>

                    </nav>
                </div>

            </footer>
            
        </div>
    )
}

export default Footer