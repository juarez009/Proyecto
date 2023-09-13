import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Register = () => {
  const [nombre, setNombreusuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasenia, setPass] = useState("");
  const [codigo, setCod] = useState("");
  //const [imagen, setImg] = useState("");
  const [confirmContrasenia, setConfirmContrasenia] = useState("");
  const [error, setError] = useState("");

  const agregarusuario = () => {
    // Verificar si al menos uno de los campos obligatorios contiene datos
    if (!nombre || !correo || !contrasenia || !codigo) {
      setError("Todos los campos son obligatorios");
      return; // Detener la función si algún campo está vacío
    }

    if (contrasenia === confirmContrasenia) {
      Axios.post("http://localhost:3001/create2", {
        nombre: nombre,
        correo: correo,
        contrasenia_hash: contrasenia,
        codigo: codigo,
      }).then(() => {
        limpiarCampos();

        MySwal.fire({
          title: <strong>Registro Exitoso!!!</strong>,
          html: <i>El usuario "{nombre}" fue registrado con éxito!</i>,
          icon: "success",
        });
      });
    } else {
      setError("Las contraseñas no coinciden");
    }
  };

  const limpiarCampos = () => {
    setNombreusuario("");
    setCorreo("");
    setPass("");
    setCod("");
    setConfirmContrasenia("");
    //setImg("")
  };

  function handleImageChange(event) {
    const profilePicture = document.getElementById("profile-picture");
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const imageURL = URL.createObjectURL(selectedImage);
      profilePicture.src = imageURL;
    } else {
      profilePicture.src = "../img/user.png";
    }
  }

  return (
    <div className="background-register">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container-md w-auto">
          <div
            className="text-center border border-light p-4 bg-black text-white"
            style={{
              borderRadius: "15px",
              boxShadow: "10px 8px 30px 0px black",
            }}
          >
            <form id="registro-form">
              <img
                style={{ width: "80px" }}
                id="profile-picture"
                src="../img/user.png"
                alt="Profile picture"
              />
              <br />
              <input
                className="mb-2 mt-2"
                style={{ backgroundColor: "rgb(118, 118, 118)" }}
                type="file"
                name="imagen"
                accept="image/*"
                onChange={handleImageChange}
              />
              <br />
              <label htmlFor="user" className="form-label">
                Nombre de usuario:
              </label>
              <input
                id="user"
                className="form-control form-control-sm mb-3"
                required
                value={nombre}
                onChange={(event) => {
                  setNombreusuario(event.target.value);
                }}
                type="text"
              />

              <label htmlFor="email" className="form-label">
                Correo electrónico:
              </label>
              <input
                type="email"
                id="email"
                className="form-control form-control-sm mb-3"
                required
                value={correo}
                onChange={(event) => {
                  setCorreo(event.target.value);
                }}
              />

              <label htmlFor="contra" className="form-label">
                Contraseña:
              </label>
              <input
                type="password"
                id="contra"
                className="form-control form-control-sm mb-3"
                required
                value={contrasenia}
                onChange={(event) => {
                  setPass(event.target.value);
                }}
              />

              <label htmlFor="confirm-contra" className="form-label">
                Confirmar contraseña:
              </label>
              <input
                type="password"
                id="confirm-contra"
                className="form-control form-control-sm mb-3"
                required
                value={confirmContrasenia}
                onChange={(event) => {
                  setConfirmContrasenia(event.target.value);
                }}
              />

              {error && <p className="text-danger">{error}</p>}

              <label htmlFor="cod" className="form-label">
                Ingresar Codigo de 6 digitos:
              </label>
              <input
                type="password"
                id="cod"
                className="form-control form-control-sm mb-3"
                required
                value={codigo}
                onChange={(event) => {
                  setCod(event.target.value);
                }}
              />

              <button
                type="button"
                className="btn btn-outline-light btn-block btn-sm"
                onClick={agregarusuario}
              >
                Registrarse
              </button>
            </form>
            <br />
            <p className="fst-italic">
              Con cuenta{" "}
              <Link to="/" className="link-light">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

