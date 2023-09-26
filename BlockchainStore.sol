// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract myBlockChainStore{
        
        constructor() {
            propietario=msg.sender;
          
        }

        //Direccion del propietario del contrato
        address public propietario;
   

        //Estructura donde se almacenara la informacion de la transaccion
        struct Factura{
            uint idFact;
            address Wallet;
            uint totalFact;
        }

         event estadoEnvio(bool);

        //Funcion ALmacena la transaccion de la wallet
        function almacenarFact(uint idFact, address Wallet, uint totalFact) public {
             Facturas[Wallet] = Factura(idFact, Wallet, totalFact);
        }

        //Consulta de Factura por medio de el numero de la Wallet
        mapping (address => Factura) public Facturas;

        function pagoFactura(address payable direccion, uint totalFact) public payable{
             bool resultado = direccion.send(totalFact);
            // El metodo send nos devolvera un false o true si ha sido enviado correctamente
            require(msg.value >= totalFact, "Fondos insuficientes");

              emit estadoEnvio(resultado);
             require(resultado == true, "El envio ha fallado.");

        }

}


    









