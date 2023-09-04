import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import usuariosRoutes from "./routes/userRoutes.js";
import proyectoRoutes from "./routes/proyectoRoutes.js";
import tareasRoutes from "./routes/tareasRoutes.js";

const app = express();

app.use(express.json());

dotenv.config();

conectarDB();

// Routing
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/tareas", tareasRoutes);

const PORT = process.env.PORT || 4000;

app.listen(4000, () => {
    console.log(`Conectado en el purto ${PORT}`)
})