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
              class="list-group border-0 rounded-0 text-sm-start min-vh-100"
            >
              <a
                href="#"
                class="list-group-item border-0 d-inline-block text-truncate"
                data-bs-parent="#sidebar"
              ><Link to="/inicio" className="list-sidebar">
                <i class="bi bi-wallet-fill"></i> <br></br>
                <span>Billetera</span>{" "}</Link>
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
            </div>
          </nav>

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
      </div>
      <button onClick={handleVolverAtras}>Volver Atrás</button>
    </div>
  );
}

export default Products;
/**/ 
