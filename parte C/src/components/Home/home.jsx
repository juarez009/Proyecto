import React from "react";
import { Link } from "react-router-dom";
import blockchain from "./Img/blockChain.png";
import "./home.css"

export default function Home() {
    const handleCerrarSesion = () => {     
        // Elimina el token de autenticación del almacenamiento local
        localStorage.removeItem("authToken");  
        // Redirige al usuario a la página de inicio de sesión      window.location.href = "/"; // Cambia "/login" a la URL de tu página de inicio de sesión
        };
    return (
                    <div class="container-fluid text-center"style={{marginTop:"75px"}}>
                    <img src={blockchain} alt="" />    
                    <h2 className="animate-charcter">Bienvenidos a la plataforma de administracion V1.2</h2>
                    </div> 
    )
}