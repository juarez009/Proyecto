import React from "react";
import './Login.css'
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="background-login">
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }} data-bs-theme="dark">
                <div className="container-md w-auto" data-bs-theme="dark">
                    <div className="text-center border border-light p-4 bg-black text-white" style={{ borderRadius: "15px", boxShadow: "10px 8px 30px 0px black" }} data-bs-theme="dark">
                        <form className="" data-bs-theme="dark">
                        <img style={{ width: "80px" }} id="profile-picture" src="../img/register-profile-picture.png" alt="Profile picture" /><br />
                            <label htmlFor="email" className="form-label">Correo electrónico:</label>
                            <input type="email" id="email" className="form-control form-control-sm mb-3" required />
                            <label htmlFor="contra" className="form-label">Contraseña:</label>
                            <input type="password" id="contra" className="form-control form-control-sm mb-3" required />
                            <label htmlFor="cod" className="form-label">Codigo de 6 digitos:</label>
                            <input type="text" id="cod" className="form-control form-control-sm mb-3" required />
                            <button type="submit" className="btn btn-outline-light btn-block btn-sm">
                               
                               
                               <Link to="/inicio" className="link-light">Iniciar sesión </Link> 


                            </button>



                        </form>
                        <br />
                        <p className="fst-italic">Sin cuenta <Link to="/Register" className="link-light">Registrese</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
