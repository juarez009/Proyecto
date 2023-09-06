import React from "react";
import './Ventas.css'

const Ventas = () => {
    return (
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
                                <li className="lista-carrito">Producto... x1 $35.00 <br /></li>
                            </ul>
                        </div>
                        <hr />
                        <p className="pt-3">Descuento: $10.00</p>
                        <p className="pb-3">Impuestos: $5.00</p>
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
    );
}

export default Ventas;
