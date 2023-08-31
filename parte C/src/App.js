import Barra from "./components/navbar/navbar";
import Web3 from "web3";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Products from "./components/productos/productos";

function App() {
  const [Metamask, setMetamask] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [balance, setbalance] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [balanceEth, setBalanceEth] = useState(null);
  const conectarWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      try {
        await window.ethereum.enable();
        const accounts = await web3Instance.eth.getAccounts();
        console.log(accounts[0]);
        setAccounts(accounts[0]);
        const balanceWei = await web3Instance.eth.getBalance(accounts[0]);
        const balanceEth = web3Instance.utils.fromWei(balanceWei, "ether");
        console.log(balanceEth);
        setBalanceEth(balanceEth);
        var btnsub = document.getElementById("btnSub");
        if (btnsub.innerHTML == "Conectar Wallet") {
          btnsub.innerHTML = "Desconectar Wallet";
        } else {
          btnsub.innerHTML = "Conectar Wallet";
        }
      } catch (error) {
        console.error("No se pudo conectar a la wallet, error");
      }
    } else {
      setMetamask(false);
    }
    console.log("Conectando wallet");
  };
  useEffect(() => {
    async function Wallet() {
      if (typeof window.ethereum !== "undefined") {
        console.log("si tenemos wallet");
        setMetamask(true);
      } else {
        console.log("No tenemos wallet");
      }
    }
    Wallet();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/inicio"
            element={
              Metamask ? (
                <>
                  <Barra
                    conectarWallet={conectarWallet}
                    Accounts={accounts}
                    Balance={balanceEth}
                  ></Barra>
                </>
              ) : (
                <h3 className="text-center">
                  Por favor instale una billetera{" "}
                </h3>
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
