import React from "react";
import { Link } from "react-router-dom";

export default function Wallet(props) {
    return (
        <div className="content-fluid d-flex flex-column align-items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                fill="currentColor"
                class="bi bi-wallet"
                viewBox="0 0 16 16"
            >
                <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />
            </svg>
            <h3>Informacion de la cuenta vínculada:</h3>
            <hr></hr>
            <p class="light user-select-none">
                Direccion de la cuenta: &ensp;{props.Accounts}
            </p>
            <p class="light">Fondos: &ensp;{props.Balance}&nbsp;ETH</p>
            <div class="row text-center">
                <div class="col-md">
                    <button className="btn btn-light" id="btnSub" onClick={props.conectarWallet}><i class="bi bi-link-45deg"></i></button>
                    <label>Desconectar Wallet</label>
                </div>
                <div class="col-md">
                    <button class="btn btn-light" >
                        <i class="bi bi-send-fill"></i>
                    </button>
                    <br></br>
                    <label>Enviar a...</label>
                </div>
                <div class="col-md">
                    <button class="btn btn-light">
                        <i class="bi bi-currency-exchange"></i>
                    </button>
                    <br></br>
                    <label >Intercambiar</label>
                </div>
            </div>
            <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Configuracion</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="container px-4 text-center">
                                <div class="row gx-5">
                                    <div class="col">
                                        <div class="p-3"><button className="btn text-light">Agregar direcciones</button></div>
                                    </div>
                                    <div class="col">
                                        <div class="p-3">
                                            <form>
                                                <label id="direccion">Ingrese su direccion nueva</label>
                                                <br></br>
                                                <input type="text" for="direccion"></input>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>)
}