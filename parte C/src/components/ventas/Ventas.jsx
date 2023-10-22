import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Web3 from 'web3';
import EthereumQRCode from './EthereumQRCode';

export default function Ventas(props) {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [totalVenta, setTotalVenta] = useState(0);
  const [direccionWallet, setDireccionWallet] = useState("");
  const [showQRDialog, setShowQRDialog] = useState(false); // Agrega la dirección de la wallet aquí
  const value = Web3.utils.toWei(totalVenta.toString(), 'ether');
  useEffect(() => {
    // Realizar una solicitud GET al servidor backend para obtener los productos
    axios
      .get("http://localhost:3001/api/productos")
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });

    // Establecer la dirección de la wallet (reemplaza 'WALLET' con la dirección correcta)
    setDireccionWallet("0x94B61F40c0C48a8E78D6EAa134D728DC5a47564C");
  }, []);

  // Función para agregar un producto al carrito y actualizar el stock en la base de datos
  const agregarAlCarrito = (producto) => {
    // Buscar el producto en la lista de productos
    const productoEnStock = productos.find((item) => item.id === producto.id);

    if (productoEnStock && productoEnStock.stock > 0) {
      // Verificar si hay suficiente stock disponible
      const productoEnCarrito = carrito.find((item) => item.id === producto.id);

      if (productoEnCarrito) {
        // Si el producto ya está en el carrito, incrementar la cantidad
        const nuevoCarrito = carrito.map((item) => {
          if (item.id === producto.id) {
            return { ...item, cantidad: item.cantidad + 1 };
          }
          return item;
        });
        setCarrito(nuevoCarrito);
      } else {
        // Si el producto no está en el carrito, agregarlo con cantidad 1
        setCarrito([...carrito, { ...producto, cantidad: 1 }]);
      }

      // Reducir el stock en uno
      productoEnStock.stock -= 1;

      // Actualizar la lista de productos en el estado (esto es importante para mostrar "Producto Agotado")
      setProductos([...productos]);

      // Actualizar el stock en la base de datos
      axios
        .post(
          `http://localhost:3001/api/productos/${producto.id}/actualizarStock`,
          {
            nuevoStock: productoEnStock.stock,
          }
        )
        .then((response) => {
          console.log("Stock actualizado en la base de datos");
        })
        .catch((error) => {
          console.error(
            "Error al actualizar el stock en la base de datos:",
            error
          );
        });

      setTotalVenta(totalVenta + producto.precio);
    } else {
      // Producto agotado o sin stock
      alert("Producto Agotado");
    }
  };

  const desagregarDelCarrito = (producto) => {
    // Buscar el producto en el carrito
    const productoEnCarrito = carrito.find((item) => item.id === producto.id);

    if (productoEnCarrito) {
      if (productoEnCarrito.cantidad === 1) {
        // Si la cantidad es 1, eliminar el producto del carrito
        eliminarDelCarrito(producto);
      } else {
        // Si la cantidad es mayor que 1, reducir la cantidad en uno
        const nuevoCarrito = carrito.map((item) => {
          if (item.id === producto.id) {
            return { ...item, cantidad: item.cantidad - 1 };
          }
          return item;
        });
        setCarrito(nuevoCarrito);

        // Aumentar el stock en uno
        const productoEnStock = productos.find(
          (item) => item.id === producto.id
        );
        productoEnStock.stock += 1;

        // Actualizar la lista de productos en el estado
        setProductos([...productos]);

        // Actualizar el stock en la base de datos
        axios
          .post(
            `http://localhost:3001/api/productos/${producto.id}/actualizarStock`,
            {
              nuevoStock: productoEnStock.stock,
            }
          )
          .then((response) => {
            console.log("Stock actualizado en la base de datos");
          })
          .catch((error) => {
            console.error(
              "Error al actualizar el stock en la base de datos:",
              error
            );
          });

        // Reducir el total de venta en el precio del producto
        setTotalVenta(totalVenta - producto.precio);
      }
    }
  };
  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (producto) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== producto.id);
    setCarrito(nuevoCarrito);
    setTotalVenta(totalVenta - producto.precio * producto.cantidad);

    // Devolver el stock al producto en la base de datos
    const productoEnStock = productos.find((item) => item.id === producto.id);
    productoEnStock.stock += producto.cantidad;

    // Actualizar la lista de productos en el estado (esto es importante para mostrar el stock actualizado)
    setProductos([...productos]);

    // Actualizar el stock en la base de datos
    axios
      .post(
        `http://localhost:3001/api/productos/${producto.id}/actualizarStock`,
        {
          nuevoStock: productoEnStock.stock,
        }
      )
      .then((response) => {
        console.log("Stock actualizado en la base de datos");
      })
      .catch((error) => {
        console.error(
          "Error al actualizar el stock en la base de datos:",
          error
        );
      });
  };

  const cambiarCantidad = (producto, nuevaCantidad) => {
    const nuevoCarrito = carrito.map((item) => {
      if (item.id === producto.id) {
        return { ...item, cantidad: nuevaCantidad };
      }
      return item;
    });
    setCarrito(nuevoCarrito);
    calcularTotalVenta(nuevoCarrito);
  };

  // Función para calcular el total de la venta
  const calcularTotalVenta = (nuevoCarrito) => {
    let nuevoTotal = 0;
    nuevoCarrito.forEach((item) => {
      nuevoTotal += item.precio * item.cantidad;
    });
    setTotalVenta(nuevoTotal);
  };

  const realizarPago = async (e) => {
    e.preventDefault();
    // Verificar si hay productos en el carrito y el total de compra es mayor que cero
    if (carrito.length === 0 || totalVenta === 0) {
      Swal.fire({
        title: "No hay productos en el carrito",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
console.log(props.Accounts)

      try{
        const approve= await props.contrato.methods.pagoFactura(
          props.Accounts,
          value
        ).send(setShowQRDialog(true));
        
      }
      catch(error){
        console.log(error);
      }
      // Generar el contenido del código QR y mostrarlo;
      
      
      
    }
  };

  const manejarPago = async () => {
    try {
      // Verificar si MetaMask está instalado
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);

        // Comprobar si el usuario está conectado
        const accounts = await web3.eth.getAccounts();
        if (accounts.length === 0) {
          throw new Error("No se ha detectado una billetera Ethereum.");
        }

        // Crear una transacción para enviar el pago a la dirección de la billetera
        const transaction = {
          to: direccionWallet, // Dirección de destino
          value: web3.utils.toWei(totalVenta.toString(), "ether"), // Monto en Wei
        };

        // Enviar la transacción a través de MetaMask
        await web3.eth.sendTransaction(transaction);

        // Transacción exitosa, mostrar un mensaje
        Swal.fire({
          title: "Pago exitoso",
          icon: "success",
          text: `Se ha realizado un pago de ${totalVenta} Ether a la dirección ${direccionWallet}.`,
          confirmButtonText: "Ok",
        });

        // Cerrar el cuadro de diálogo QR y reiniciar el estado
        setShowQRDialog(false);
        setCarrito([]);
        setTotalVenta(0);
      } else {
        throw new Error("MetaMask no está instalado o no está disponible.");
      }
    } catch (error) {
      // Manejar errores, por ejemplo, si el usuario rechaza la transacción en MetaMask
      Swal.fire({
        title: "Error en el pago",
        icon: "error",
        text: "Se produjo un error al procesar el pago.",
        confirmButtonText: "Ok",
      });
    }
  };
  const handleVolverAtras = () => {
    window.history.back();
  };
  
  
  return (
    <div className="container">
      <h1>Productos en Venta</h1>
      <button onClick={handleVolverAtras}>Volver Atrás</button>
      <br></br>
      <br></br>
      <div className="row">
        <div
          className="col-md-9"
          style={{ maxHeight: "600px", overflowY: "scroll" }}
        >
          <div className="row">
            {productos.map((producto) => (
              <div className="col-md-4 mb-4" key={producto.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <p className="card-text">Precio: {producto.precio}</p>
                    {producto.stock > 0 ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => agregarAlCarrito(producto)}
                      >
                        Agregar
                      </button>
                    ) : (
                      <p className="text-danger">Producto Agotado</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="mt-2"
            style={{ maxHeight: "500px", overflowY: "scroll" }}
          >
            <h2>Ticket</h2>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((item, index) => (
                  <tr key={index}>
                    <td>{item.nombre}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        className="form-control"
                        value={item.cantidad}
                        onChange={(e) =>
                          cambiarCantidad(item, parseInt(e.target.value))
                        }
                      />
                    </td>
                    <td>{(item.precio * item.cantidad).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => agregarAlCarrito(item)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => desagregarDelCarrito(item)}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => eliminarDelCarrito(item)}
                      >
                        Quitar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="total-venta">
            Total de Venta: <strong>{totalVenta.toFixed(2)}</strong>
          </p>
          {carrito.length > 0 && (
            <button className="btn btn-success" onClick={realizarPago} >
              Pago
            </button>
          )}
          {showQRDialog && (
        <div className="qr-dialog">
          <h2>Escanee el código QR para realizar el pago</h2>
          <EthereumQRCode address={direccionWallet} amount={value} />
          <p>Total de Venta: <strong>{totalVenta.toFixed(2)}</strong></p>
          <button
            className="btn btn-primary"
            onClick={manejarPago}
          >
            Realizar Pago
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setShowQRDialog(false)}
          >
            Cancelar
          </button>
        </div>
      )}
        </div>
      </div>
    </div>
  );
}

