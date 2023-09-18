import Barra from "./components/navbar/navbar";
import Web3 from "web3";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Products from "./components/productos/productos";
import Ventas from "./components/ventas/Ventas";
import Home from "./components/Home/home";

function App() {
  const [Metamask, setMetamask] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [balance, setbalance] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [balanceEth, setBalanceEth] = useState(null);

  // Function to connect the wallet
  const conectarWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);
          setMetamask(true);
          // Guardar la información de la cuenta en localStorage
          localStorage.setItem("walletConnected", "true");
        } catch (error) {
          console.error("No se pudo conectar a la wallet, error");
        }
      } else {
        setMetamask(false);
      }}
      useEffect(() => {
        async function checkWalletConnection() {
          if (typeof window.ethereum !== "undefined") {
            const accounts = await window.ethereum.request({
              method: "eth_accounts",
            });
            const isConnected = accounts.length > 0;
    
            if (isConnected) {
              const web3Instance = new Web3(window.ethereum);
              setWeb3(web3Instance);
              setAccounts(accounts[0]); // Establecer la dirección de la cuenta
              setMetamask(true);
              updateBalance(web3Instance, accounts[0]); // Actualizar el balance
            }
          }
        }
    
        checkWalletConnection();
      }, []);
    
      const updateBalance = async (web3Instance, account) => {
        const balanceWei = await web3Instance.eth.getBalance(account);
        const balanceEth = web3Instance.utils.fromWei(balanceWei, "ether");
        setBalanceEth(balanceEth);
      };
    
      const handleConnectWallet = async () => {
        if (!Metamask) {
          try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const web3Instance = new Web3(window.ethereum);
            const accounts = await web3Instance.eth.getAccounts();
            setWeb3(web3Instance);
            setAccounts(accounts[0]);
            setMetamask(true);
            updateBalance(web3Instance, accounts[0]);
          } catch (error) {
            console.error("No se pudo conectar a la wallet, error");
          }
        } else {
          // Desconectar la billetera
          setMetamask(false);
          setAccounts(null);
          setBalanceEth(null);
        }
      };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ventas" element={<Ventas/>}/>
          <Route path="/wallet" element={<Barra
                    conectarWallet={handleConnectWallet}
                    Accounts={accounts}
                    Balance={balanceEth}
                  ></Barra>}/>
          <Route
            path="/inicio"
            element={
              Metamask ? (
                <>
                  <Home></Home>
                </>
              ) : (
                <div className="text-center">
                  <h3 className="text-center">
                  Por favor instale una billetera o conecte su billetera perteneciente a su cuenta
                </h3>
                <button className="btn btn-light " onClick={handleConnectWallet}>Conectar Wallet</button>
                </div>
                
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
