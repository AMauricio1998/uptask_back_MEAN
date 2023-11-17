import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import usuariosRoutes from "./routes/userRoutes.js";
import proyectoRoutes from "./routes/proyectoRoutes.js";
import tareasRoutes from "./routes/tareasRoutes.js";

const app = express();

app.use(express.json());

dotenv.config();

conectarDB();

//Configurar cors
const whiteList = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: function(origin, callback) {
        if (whiteList.includes(origin)) {
            //Puede consultar la api
            callback(null, true);
        } else {
            callback(new Error("Error de Cors"))
        }
    }
};

app.use(cors(corsOptions));

// Routing
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/tareas", tareasRoutes);

const PORT = process.env.PORT || 4000;

app.listen(4000, () => {
    console.log(`Conectado en el purto ${PORT}`)
})