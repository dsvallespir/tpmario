const { body } = require("express-validator");

module.exports=[

	body('nombre')
		.notEmpty().withMessage('Tienes que escribir un nombre'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('telefono')
		.notEmpty().withMessage('Tienes que anotar un numero de telefono'),
    body('password')
		.notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('passwordConfirmation')	
		.notEmpty().withMessage('Tienes que confirmar la contraseña'),	
];
//.equals(bcrypt.hashSync('password', 10)).equals(bcrypt.hashSync('password1', 10))			
			//.withMessage('Tienes que confirmar la contraseña'),