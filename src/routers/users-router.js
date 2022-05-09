//const { Router } = require("express");
//const { route } = require("express/lib/application");

const express=require("express");
const userRouter = express.Router();
//const router = Router();

const userController = require("../controllers/users-controller");
const validator = require("../middleware/user-validation");

//rutas users		
userRouter.get("/user", userController.register);//nuevo		
userRouter.post("/user", validator, userController.processRegister);

//userRouter.get("/user/:id", userController.remove);//borrar
//userRouter.get("/user/:id", userController.update);//modificar
userRouter.get("/user", userController.index);//listar



module.exports = userRouter;