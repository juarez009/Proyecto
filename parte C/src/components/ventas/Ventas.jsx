import React from "react";
import './Ventas.css'
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";

const Ventas = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap"><div class="col-auto px-0 me-auto">
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
              class="list-group border-0 rounded-0 text-sm-start min-vh-100"
            >
              <a
                href="#"
                class="list-group-item border-0 d-inline-block text-truncate"
                data-bs-parent="#sidebar"
              >
                <i class="bi bi-wallet-fill"></i> <br></br>
                <span>Billetera</span>{" "}
              </a>
              <a
                href="#"
                class="list-group-item border-0 d-inline-block text-truncate"
                data-bs-parent="#sidebar">
                <Link to="/Productos" className="text-light">
                  <i class="bi bi-file-earmark-spreadsheet"></i>
                  <br></br>Administrar Productos
                </Link></a>
              <a
                href="#"
                class="list-group-item border-0 d-inline-block text-truncate"
                data-bs-parent="#sidebar"
              >
                <Link to="/ventas" className="text-light" >
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
        </div>
        <main class="col ps-md-2 pt-2">
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
              <button
                class="btn btn-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebar"
                aria-expanded="false"
                aria-controls="collapseWidthExample"
              >
                <i class="fa-solid fa-bars fa-xl"></i>
              </button>
            </div>
          </nav>
          <div className="container-fluid background-venta">
            <div className="row">
                <div className="col-md-9 ps-4">
                    <div className="row">
                        <div className="productos row">
                            <div className="row">
                                <div className="product-card">
                                    <h6>Producto</h6>
                                    <button type="button" class="btn btn-secondary">Agregar</button>
                                </div>
                                <div className="product-card">
                                    <h6>Producto</h6>
                                    <button type="button" class="btn btn-secondary">Agregar</button>
                                </div>
                                <div className="product-card">
                                    <h6>Producto</h6>
                                    <button type="button" class="btn btn-secondary">Agregar</button>
                                </div>
                                <div className="product-card">
                                    <h6>Producto</h6>
                                    <button type="button" class="btn btn-secondary">Agregar</button>
                                </div>
                                <div className="product-card">
                                    <h6>Producto</h6>
                                    <button type="button" class="btn btn-secondary">Agregar</button>
                                </div>                  
                            </div>
                            <div className="row">
                                <div className="product-card">
                                    <h6>Producto</h6>
                                    <button type="button" class="btn btn-secondary">Agregar</button>
                                </div>
                                <div className="product-card">
                                    <h6>Producto</h6>
                                    <button type="button" class="btn btn-secondary">Agregar</button>
                                </div>
                                <div className="product-card">
                                    <h6>Producto</h6>
                                    <button type="button" class="btn btn-secondary">Agregar</button>
                                </div>
                                <div className="product-card">
                                    <h6>Producto</h6>
                                    <button type="button" class="btn btn-secondary">Agregar</button>
                                </div>
                                <div className="product-card">
                                    <h6>Producto</h6>
                                    <button type="button" class="btn btn-secondary">Agregar</button>
                                </div>      
                            </div>
                            <div className="row">
                                <div className="product-card">
                                    <h6>Producto</h6>
                                    <button type="button" class="btn btn-secondary">Agregar</button>
                                </div>
                                <div className="product-card">
                                    <h6>Producto</h6>
                                    <button type="button" class="btn btn-secondary">Agregar</button>
                                </div>
                                <div className="product-card">
                                    <h6>Producto</h6>
                                    <button type="button" class="btn btn-secondary">Agregar</button>
                                </div>
                                <div className="product-card">
                                    <h6>Producto</h6>
                                    <button type="button" class="btn btn-secondary">Agregar</button>
                                </div>
                                <div className="product-card">
                                    <h6>Producto</h6>
                                    <button type="button" class="btn btn-secondary">Agregar</button>
                                </div>      
                            </div>
                        </div>
                    </div>
                    <div className="nav-tabs-container">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Producto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Producto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Producto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Producto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Producto</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 pe-3">
                    <div className="cart">
                        <h2>Ticket</h2>
                        <hr className="hr1"/>
                        <div className="productos-carrito">
                            <ul>
                                <li className="lista-carrito">Producto... x1 $35.00 <br /> XL / Rojo oscuro</li>
                                <li className="lista-carrito">Producto... x1 $35.00 <br /> XL / Rojo oscuro</li>
                                <li className="lista-carrito">Producto... x1 $35.00 <br /> XL / Rojo oscuro</li>
                                <li className="lista-carrito">Producto... x1 $36.00 <br /></li>
                            </ul>
                        </div>
                        <hr />
                        <p className="pt-3">Descuento: $10.00</p>
                        <p className="pb-3">Impuestos: $5.00</p>
                        /*<QRCode value='Total=$135' size={256}></QRCode>*/
                        <hr />
                        <p>Total: $135.00</p>
                        <div className="checkbox">
                            <div>
                                <input type="checkbox"/> <span className="text-checkbox">Obtener factura</span>
                            </div>
                            <div>
                                <input type="checkbox"/> <span className="text-checkbox me-3">Obtener ticket</span>
                            </div>
                        </div>
                        <div className="buttons-carrito">
                            <button className="btn btn-primary">Guardar</button>
                            <button className="btn btn-success ms-2">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    </div>
    );
}

export default Ventas;
/* */
