const { validationResult } = require('express-validator');
//const { json } = require('express/lib/response');
const fs = require("fs");
const path = require("path");
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, "../data/user-data.json");
const userData = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

module.exports={
    register:(req, res) => {
        console.log(req.body);
		return res.render('register');
	},
    processRegister: (req, res) => {
		const resultValidation = validationResult(req);
		console.log(req.body);
		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

        let passEncriptada = bcrypt.hashSync('password', 10);
       
        const lastIndex = userData.length - 1;
        const lastUser = userData[lastIndex];
        const biggestId = lastUser ? lastUser.id : 0;
        const newId = biggestId + 1;

        const user = {
            //...req.body,           
            id: newId,
            nombre:req.body.nombre,
            email:req.body.email,
            telefono:req.body.telefono,
            password:passEncriptada,
        };

          userData.push(user);

          const jsonTxt = JSON.stringify(userData, null, 2);
          fs.writeFileSync(usersFilePath, jsonTxt, "utf-8");
      
          res.redirect("/");  
	},

    index:(req,res)=>{
        
          const userDataFile=fs.readFileSync(usersFilePath,  "utf-8");
          const userData=JSON.parse(userDataFile);
        res.render("users-list", {
            userData
        })
    },
       
}