import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contrasenia_hash, setContrasenia] = useState("");
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Función que se ejecuta al enviar el formulario de inicio de sesión
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizamos una solicitud POST al servidor local en el puerto 3001 para iniciar sesión
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Establecemos el tipo de contenido como JSON
        },
        body: JSON.stringify({ correo, contrasenia_hash, codigo }), // Enviamos el email, contraseña y el código de 6 dígitos como datos JSON
      });

      // Si la respuesta del servidor es exitosa (código de estado 200), redirigimos a la página de inicio
      if (response.ok) {
        console.log("Inicio de sesión exitoso");
        navigate("/inicio");
      } else {
        // Si la respuesta es un error, mostramos el mensaje de error recibido del servidor
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      // Manejamos cualquier error que ocurra durante la solicitud
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <div className="background-login" style={{background:"#212529"}}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
        data-bs-theme="dark"
      >
        <div className="container-md w-auto" data-bs-theme="dark">
          <div
            className="text-center border border-light p-4 bg-black text-white"
            style={{
              borderRadius: "15px",
              boxShadow: "10px 8px 30px 0px black",
            }}
            data-bs-theme="dark"
          >
            <form
              action="auth"
              method="POST"
              className=""
              data-bs-theme="dark"
              onSubmit={handleSubmit}
            >
              <img
                style={{ width: "80px" }}
                id="profile-picture"
                src="./img/user.png"
                alt="Profile picture"
              />
              <br />

              <label htmlFor="email" className="form-label">
                Correo electrónico:
              </label>
              <input
                type="email"
                id="correo"
                className="form-control form-control-sm mb-3"
                required
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
              <label htmlFor="contra" className="form-label">
                Contraseña:
              </label>
              <input
                type="password"
                id="contra"
                className="form-control form-control-sm mb-3"
                required
                value={contrasenia_hash}
                onChange={(e) => setContrasenia(e.target.value)}
              />
              <label htmlFor="cod" className="form-label">
                Codigo de 6 dígitos:
              </label>
              <input
                type="text"
                id="cod"
                className="form-control form-control-sm mb-3"
                required
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
              {error && <p className="text-danger">{error}</p>}
              <button
                type="submit"
                className="btn btn-outline-light btn-block btn-sm"
              >
                Iniciar sesión
              </button>
            </form>
            <br />
            <p className="fst-italic">
              Sin cuenta{" "}
              <Link to="/Register" className="link-light">
                Regístrese
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
