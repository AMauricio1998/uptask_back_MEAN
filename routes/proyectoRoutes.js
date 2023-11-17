import express  from "express";
import checkAuth from "../middleware/checkAuth.js";
import {
    obtenerProyectos,
    obtenerProyecto,
    nuevoProyecto,
    editarProyecto,
    eliminarProyecto,
    agregarColaborador,
    eliminarColaborador,
} from "../controllers/proyectosController.js"

const router = express.Router();

router
    .route("/")
    .get(checkAuth, obtenerProyectos)
    .post(checkAuth, nuevoProyecto);

router
    .route("/:id")
    .get(checkAuth, obtenerProyecto)
    .get(checkAuth, editarProyecto)
    .get(checkAuth, eliminarProyecto);

router.get("/agregar-colaborador/:id", checkAuth, agregarColaborador);
router.get("/eliminar-colaborador/:id", checkAuth, eliminarColaborador);

export default router;