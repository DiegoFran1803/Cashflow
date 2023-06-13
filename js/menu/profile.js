if(localStorage['user']) {
//Traer los datos
let user = getData('user');

//Pintar imagenes segun la profession
if(user.profession == 'Gerente') paintImage('.perfil-photo', './img/porky.jpg');
else if(user.profession == 'Ingeniero') paintImage('.perfil-photo', './img/fujimori.jpg'); 
else if(user.profession == 'Mecanico') paintImage('.perfil-photo', './img/vizcarra.jpg'); 
else if(user.profession == 'Medico') paintImage('.perfil-photo', './img/acuna.jpg'); 
else if(user.profession == 'Secretaria') paintImage('.perfil-photo', './img/dina.jpg'); 
else if(user.profession == 'Profesor') paintImage('.perfil-photo', './img/castillo.jpg'); 
else if(user.profession == 'Camionero') paintImage('.perfil-photo', './img/ppk.jpg'); 
else if(user.profession == 'Conserje') paintImage('.perfil-photo', './img/antauro.jpg'); 
else if(user.profession == 'Abogado') paintImage('.perfil-photo', './img/rata.jpg'); 
else if(user.profession == 'Enfermera') paintImage('.perfil-photo', './img/keiko.jpg'); 
else if(user.profession == 'Policia') paintImage('.perfil-photo', './img/humala.jpg'); 
else if(user.profession == 'Piloto') paintImage('.perfil-photo', './img/toledo.jpg'); 

//Pintar imagen segun name especiale
if(user.name == 'Jonh Wick') paintImage('.perfil-photo', './img/jonh.jpg');
else if(user.name == 'Batman') paintImage('.perfil-photo', './img/batman.jpg');
else if(user.name == 'CR7' || user.name == 'Cristiano Ronaldo') paintImage('.perfil-photo', './img/cr7.jpg');
else if(user.name == 'D10S' || user.name == 'Lionel Messi' || user.name == 'Messi') paintImage('.perfil-photo', './img/messi.jpg');
else if(user.name == 'Ronaldinho') paintImage('.perfil-photo', './img/ronaldinho.jpg');
else if(user.name == 'Jesus') paintImage('.perfil-photo', './img/jesus.jpg');
else if(user.name == 'Pepa' || user.name == 'Pepa Pig') paintImage('.perfil-photo', './img/pepa.jpg');
}