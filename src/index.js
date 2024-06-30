import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js'; //se importa el archivo index.js de la carpeta routes

const app = express(); //se asigna una constante con las propiedades de express
const __dirname = dirname(fileURLToPath(import.meta.url)); //se asigna una constante con la ruta del directorio actual

app.set('views', join(__dirname, 'views')); //se indica que se usará el directorio views para las plantillas
app.set('view engine', 'ejs'); //se indica que se usará el motor de plantillas ejs
app.use(express.static(join(__dirname, 'public'))); //se indica que se usará el directorio public para los archivos estáticos
app.use(bodyParser.urlencoded({ extended: true })); //se indica que se usará el body parser
app.use(session({ //se establecen las propiedades de la sesión
    secret: 'secret', 
    resave: false, 
    saveUninitialized: true 
}));
app.use(indexRouter); //se usa el archivo index.js de la carpeta routes

const users = {
    user1: 'password1',
    user2: 'password2'
};

app.listen(3000, () => { //se establece el puerto en el que se escuchará el servidor
    console.log('Server on port 3000 http://localhost:3000/');
});