//instalar npm install bcrypt

const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blockchains",
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos: " + err);
    return;
  }
  console.log("Conexión a la base de datos exitosa");
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

//Para el registro cifrando una contraseña
app.post("/create2", (req, res) => {
  const nombre = req.body.nombre;
  const correo = req.body.correo;
  const contrasenia_hash = req.body.contrasenia_hash;
  const codigo = req.body.codigo;
  const imagen = req.body.imagen;

  // Generar un hash de la contraseña
  bcrypt.hash(contrasenia_hash, 10, (err, contrasenia_hash) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error en el registro");
    } else {
      // Ahora puedes almacenar el contrasenia_hash en la base de datos
      db.query(
        "INSERT INTO usuarios(nombre, correo, contrasenia_hash, codigo, imagen) VALUES (?, ?, ?, ?, ?)",
        [nombre, correo, contrasenia_hash, codigo, imagen],
        (err, result) => {
          if (err) {
            console.error(err);
            res.status(500).send("Error en el registro");
          } else {
            res.status(200).send("Registro Exitoso!!!");
          }
        }
      );
    }
  });
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

// usuarios
app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, result) => {
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

app.post("/login", async (req, res) => {
  const { correo, contrasenia_hash, codigo } = req.body;

  db.query(
    "SELECT * FROM usuarios WHERE correo = ?",
    [correo],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Error en el servidor" });
        return;
      }

      if (results.length === 0) {
        res.status(401).json({ message: "Credenciales incorrectas" });
        return;
      }

      const user = results[0];

      bcrypt.compare(
        contrasenia_hash,
        user.contrasenia_hash,
        (bcryptErr, bcryptResult) => {
          if (bcryptErr || !bcryptResult) {
            res.status(401).json({ message: "Credenciales incorrectas" });
            return;
          }

          console.log(
            "Inicio de sesión exitoso por correo electrónico y contraseña."
          );
          res
            .status(200)
            .json({
              message:
                "Inicio de sesión exitoso por correo electrónico y contraseña",
            });
        }
      );
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


// Ruta para actualizar el stock de un producto por su ID
app.post("/api/productos/:id/actualizarStock", (req, res) => {
  const productoId = req.params.id;
  const nuevoStock = req.body.nuevoStock; // Debes enviar el nuevo stock en el cuerpo de la solicitud

  const sql = "UPDATE producto SET stock = ? WHERE id = ?";

  db.query(sql, [nuevoStock, productoId], (err, result) => {
    if (err) {
      console.error("Error al actualizar el stock en la base de datos:", err);
      res.status(500).json({ error: "Error al actualizar el stock" });
    } else {
      console.log("Stock actualizado en la base de datos");
      res.status(200).json({ message: "Stock actualizado correctamente" });
    }
  });
});

// Definir una ruta para manejar solicitudes GET a '/api/productos'
app.get("/api/productos", (req, res) => {
  // Realiza la lógica para obtener los productos desde la base de datos aquí

  const sql = "SELECT * FROM producto"; // Ejemplo de consulta SQL para obtener productos

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error al obtener productos desde la base de datos:", err);
      res.status(500).json({ error: "Error al obtener productos" });
    } else {
      res.status(200).json(result);
    }
  });
});


app.listen(3001, () => {
  console.log("Corriendo Los BlockChainxd en el puerto 3001");
});

process.on("SIGINT", () => {
  db.end((err) => {
    if (err) {
      console.error("Error al cerrar la conexión:", err);
    } else {
      console.log("Conexión cerrada correctamente.");
    }
    process.exit(); // Salir de la aplicación
  });
});


