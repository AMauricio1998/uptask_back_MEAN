import express  from "express";
import { registrar, auth, confirmar, olvidePassword, nuevoPassword, comprobarToken, perfil } from "../controllers/usersController.js";
import checkAuth from "../middleware/checkAuth.js";
const router = express.Router();

router.post("/", registrar);
router.post("/login", auth);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);
router.get("/perfil", checkAuth, perfil);    

export default router;