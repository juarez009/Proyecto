const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blockchains",
});


app.post("/create", (req, res) => {
  const nombre = req.body.nombre;
  const descripcion = req.body.descripcion;
  const precio = req.body.precio;
  const stock = req.body.stock;

  db.query(
    "INSERT INTO producto(nombre,descripcion,precio,stock)VALUES(?,?,?,?)",
    [nombre, descripcion, precio, stock],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Registro Exitoso!!!");
      }
    }
  );
});

app.get("/producto", (req, res) => {
  db.query("SELECT * FROM producto", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });

});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const descripcion = req.body.descripcion;
  const precio = req.body.precio;
  const stock = req.body.stock;

  db.query(
    "UPDATE producto SET nombre=?,descripcion=?,precio=?,stock=? WHERE id=?",
    [nombre, descripcion, precio, stock, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Registro ACTUALIZADO!!!");
      }
    }
  );
    
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const nombre = req.body.nombre;
  const descripcion = req.body.descripcion;
  const precio = req.body.precio;
  const stock = req.body.stock;

  db.query("DELETE FROM producto WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Registro Eliminado con exito!!!");
    }
  });
 
});

app.listen(3001, () => {
  console.log("Corriendo en el puerto 3001");
});

process.on('SIGINT', () => {
  db.end((err) => {
    if (err) {
      console.error("Error al cerrar la conexión:", err);
    } else {
      console.log("Conexión cerrada correctamente.");
    }
    process.exit(); // Salir de la aplicación
  });
});

