//const { Router } = require("express");
//const { route } = require("express/lib/application");

const express=require("express");
const userRouter = express.Router();
//const router = Router();

const userController = require("../controllers/users-controller");
const validator = require("../middleware/user-validation");

//rutas users	
userRouter.get("/", userController.register);//nuevo		u.
userRouter.post("/", validator, userController.processRegister);

userRouter.get("/", userController.index);//listar

userRouter.get("/:id", userController.edit);//borrar
userRouter.delete("/:id", userController.remove);

userRouter.get("/:id", userController.edit);//modificar
userRouter.put("/:id", validator, userController.update);



module.exports = userRouter;