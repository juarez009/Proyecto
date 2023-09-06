import React from "react";
import './Register.css'
import { Link } from "react-router-dom"

const Register = () => {

    //Función al momento de subir una imagen, se intercambie como foto de perfil

    function handleImageChange(event) {
        const profilePicture = document.getElementById('profile-picture');
        const selectedImage = event.target.files[0];
      
        if (selectedImage) {
          const imageURL = URL.createObjectURL(selectedImage);
          profilePicture.src = imageURL;
        } else {
          profilePicture.src = 'img/register-profile-picture.png';
        }
    }

    return (
        <div className="background-register">
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }} data-bs-theme="dark">
                <div className="container-md w-auto" data-bs-theme="dark">
                    <div className="text-center border border-light p-4 bg-black text-white" style={{ borderRadius: "15px", boxShadow: "10px 8px 30px 0px black" }} data-bs-theme="dark">
                        <form id="registro-form" data-bs-theme="dark">
                            <img style={{ width: "80px" }} id="profile-picture" src="../img/register-profile-picture.png" alt="Profile picture" /><br />
                            <input className="mb-2 mt-2" style={{ backgroundColor: "rgb(118, 118, 118)" }} type="file" name="imagen" onChange={handleImageChange} /><br />
                            <label htmlFor="user" className="form-label">Nombre de usuario:</label>
                            <input type="text" id="user" className="form-control form-control-sm mb-3" required />
                            <label htmlFor="email" className="form-label">Correo electrónico:</label>
                            <input type="email" id="email" className="form-control form-control-sm mb-3" required />
                            <label htmlFor="contra" className="form-label">Contraseña:</label>
                            <input type="password" id="contra" className="form-control form-control-sm mb-3" required />
                            <label htmlFor="confirm-contra" className="form-label">Confirmar contraseña:</label>
                            <input type="password" id="confirm-contra" className="form-control form-control-sm mb-3" required />
                            <label htmlFor="cod" className="form-label">Ingresar Codigo de 6 digitos:</label>
                            <input type="password" id="cod" className="form-control form-control-sm mb-3" required />
                            <button type="submit" className="btn btn-outline-light btn-block btn-sm">Registrarse</button>
                        </form>
                        <br />
                        <p className="fst-italic">Con cuenta <Link to="/" className="link-light">Iniciar sesión</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
