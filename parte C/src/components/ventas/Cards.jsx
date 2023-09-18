import React from "react";
import './Ventas.css';
import pantalon from './img/pantalon.jpg'

const Cards = () => {
    return(
        <div class="card rounded" style={{width: "200px", height: "200px"}}>
            <img class="card-img-top" src={pantalon} alt="Card image" />
            <div class="d-flex flex-column justify-content-between card-img-overlay text-center">
                <h4 class="card-title text-dark">Producto</h4>
                <a href="#" class="btn btn-secondary hover-button"></a>
            </div>
        </div>
    )
}

export default Cards;