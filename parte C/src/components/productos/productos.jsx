import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";


const MySwal = withReactContent(Swal);

function Products() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");



  const [editar, setEditar] = useState(false);
  const [id, setId] = useState(0);

  const [productList, setProducto] = useState([]);

  const agregar = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      stock: stock,
    }).then(() => {
      getProductos();
      //alert("Producto registrado");
      limpiarCampos();

      MySwal.fire({
        title: <strong>Registro Exitoso!!!</strong>,
        html: <i>El producto "{nombre}" fue registrado con exito!</i>,
        icon: "success",
      });
    });
  };

  const update = () => {
    Axios.put("http://localhost:3001/update", {
      id: id,
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      stock: stock,
    }).then(() => {
      getProductos();
      limpiarCampos();
      MySwal.fire({
        title: <strong>Modificación Exitosa!!!</strong>,
        html: <i>El producto "{nombre}" fue modificado con exito!</i>,
        icon: "success",
      });
    });
  };

  const deleteReg = (val) => {

    MySwal.fire({
      title: 'Seguro que quiere Eliminar!!!?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3001/delete/${val.id}`)
          .then(() => {
            getProductos();
            limpiarCampos();
            // El usuario confirmó la eliminación
            Swal.fire(
              'Eliminado!',
              'Registro eliminado.',
              'success',
            )
          });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // El usuario canceló la eliminación
        Swal.fire(
          'Cancelado',
          'La eliminación fue cancelada.',
          'info'
        );
      }
    });


  };


  const limpiarCampos = () => {
    setNombre("");
    setDescripcion("");
    setPrecio("");
    setStock("");
  };

  const editarProducto = (val) => {
    setEditar(true);
    setNombre(val.nombre);
    setDescripcion(val.descripcion);
    setPrecio(val.precio);
    setStock(val.stock);
    setId(val.id);
  };

  const getProductos = () => {
    Axios.get("http://localhost:3001/producto").then((response) => {
      setProducto(response.data); // llamada al API de la info
    });
  };

  // getProductos();


  const handleVolverAtras = () => {
    window.history.back();
  };

  
  return (
    <div className="container">

        <main class="col ps-md-2 pt-2">
          <br></br>
          <h1>Gestion de Productos</h1>
          
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  className="form-control"
                  value={nombre}
                  onChange={(event) => {
                    setNombre(event.target.value);
                  }}
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Descripcion:</label>
                <input
                  className="form-control"
                  value={descripcion}
                  onChange={(event) => {
                    setDescripcion(event.target.value);
                  }}
                  type="text"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Precio:</label>
                <input
                  className="form-control"
                  value={precio}
                  onChange={(event) => {
                    setPrecio(event.target.value);
                  }}
                  type="number"
                />
              </div>
              <div className="form-group">
                <label>Stock:</label>
                <input
                  className="form-control"
                  value={stock}
                  onChange={(event) => {
                    setStock(event.target.value);
                  }}
                  type="number"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-end h-100">
                {editar ? (
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-warning m-2"
                      onClick={update}
                    >
                      Actualizar
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-info m-2"
                      onClick={limpiarCampos}
                    >
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={agregar}
                  >
                    Registrar
                  </button>
                )}
              </div>
            </div>
            <div>
              <br></br>
            </div>
          </div>

          <div className="Lista">
            <button onClick={getProductos}>Lista de Productos</button>
            {
              productList.map((val, key) => {
                return <div className=""></div>
              })
            }
          </div>


          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {productList.map((val) => (
                <tr key={val.id}>
                  <th>{val.id}</th>
                  <td>{val.nombre}</td>
                  <td>{val.descripcion}</td>
                  <td>
                    {typeof val.precio === "number"
                      ? `$ ${val.precio.toFixed(2)}`
                      : "Invalid Price"}
                  </td>
                  <td>{val.stock}</td>

                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic mixed styles example"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          editarProducto(val);
                        }}
                        className="btn btn-info"
                      >
                        Editar
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          deleteReg(val);
                        }}
                        className="btn btn-success"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      <button onClick={handleVolverAtras}>Volver Atrás</button>
    </div>
  );
}

export default Products;
/**/ 
