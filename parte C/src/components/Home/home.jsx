import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css"
import blockchain from "./Img/blockChain.png"

export default function Home() {

    const [theme, setTheme] = useState (
        localStorage.getItem("light-mode") === "true" ? "light" : "dark"
    );

    const handleCerrarSesion = () => {     
        // Elimina el token de autenticación del almacenamiento local
        localStorage.removeItem("authToken");  
        // Redirige al usuario a la página de inicio de sesión      window.location.href = "/"; // Cambia "/login" a la URL de tu página de inicio de sesión
        };

    useEffect(() => {
        const body = document.body;
        body.setAttribute("data-bs-theme", theme);
        localStorage.setItem("light-mode", theme === "light" ? "true" : "false");
    })

    return (
        <div className="container-fluid">
            <div class="row flex-nowrap">
                <div class="col-auto px-0 me-auto">
                    <div id="sidebar" class="collapse collapse-horizontal show">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="75"
                            height="75"
                            fill="currentColor"
                            class="bi bi-cash-coin ms-3 mt-3"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
                            />
                            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                        </svg>
                        <div
                            id="sidebar-nav"
                            class="list-group border-0 rounded-0 text-sm-start" /* Eliminación de min-vh-100 en class ya que generaba una barra lateral sin necesitarlo */
                        >
                            <a
                                href="#"
                                class="list-group-item border-0 d-inline-block text-truncate"
                                data-bs-parent="#sidebar"
                            >
                                <Link to="/wallet" class="list-sidebar">
                                <i class="bi bi-wallet-fill"></i> <br></br>
                                Billetera</Link>
                            </a>
                            <a
                                href="#"
                                class="list-group-item border-0 d-inline-block text-truncate"
                                data-bs-parent="#sidebar">
                                <Link to="/Productos" className="list-sidebar">
                                    <i class="bi bi-file-earmark-spreadsheet"></i>
                                    <br></br>Administrar Productos
                                </Link></a>
                            <a
                                href="#"
                                class="list-group-item border-0 d-inline-block text-truncate"
                                data-bs-parent="#sidebar"
                            >
                                <Link to="/ventas" className="list-sidebar" >
                                    <i class="bi bi-safe2" style={{ paddingTop: "15px" }}></i>
                                    <br></br>Administrar ventas
                                </Link>
                            </a>
                            <a
                                href="#"
                                class="list-group-item border-0 d-inline-block text-truncate"
                                data-bs-parent="#sidebar"
                            >
                                <i class="bi bi-file-check-fill"></i> <br></br>
                                <span>Transacciones</span>
                            </a>
                        </div>
                    </div>
                </div>

                <main class="col ps-md-2 pt-2">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <button
                                class="btn"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#sidebar"
                                aria-expanded="false"
                                aria-controls="collapseWidthExample"
                            >
                                <i class="fa-solid fa-bars fa-xl"></i>
                            </button>

                            <ul class="nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item ">
                                    <a class="nav-link navbar-link-top" aria-current="page" href="#">
                                        <Link to="/inicio" className="navbar-link-top">
                                        <i class="fa-solid fa-house fa-xl"></i></Link>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link navbar-link-top" href="#">
                                        <i class="fa-solid fa-calendar-days fa-xl"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link navbar-link-top" href="#">
                                        <i class="fa-solid fa-bell fa-xl navbar-link-top"></i>
                                    </a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link dropdown-toggle navbar-link-top"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i class="fa-solid fa-user fa-xl"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-lg-end">
                                        <li>
                                            <a class="dropdown-item" href="#" data-bs-target="#myModal" data-bs-toggle="modal">
                                                Configuración
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Ayuda
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" onClick={handleCerrarSesion} href="/">
                                                Cerrar sesión
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <div className="pt-1 ps-2">
                                <button className={`switch-boton ${theme === "dark" ? "active" : ""}`} id="switch-boton" onClick={() => {
                                    setTheme(theme === "dark" ? "light" : "dark");
                                }}>
                                    <span>
                                    <i class="fa-solid fa-sun"></i>
                                    </span>
                                    <span>
                                    <i class="fa-solid fa-moon"></i>
                                    </span>
                                </button>
                                </div>
                            </ul>
                        </div>
                    </nav>
                    <div class="container-fluid text-center">
                    <img src={blockchain} alt="" />    
                    <h2 className="neon-text">Bienvenidos a la plataforma de administracion V1.2</h2>

                    
                    </div> 
                </main>
            </div>
        </div>
    )
}
