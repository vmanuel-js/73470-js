// IMPORTAR FUNCIONES A OTRO ARCHIVO

// commonJS -- YA NO ES MUY USADO
const funcionesScript = require("./script");

// ESMODULES
// poner type module en los scripts del HTML
// export en cada función a exportar
import { crearAlumno } from "./script";
crearAlumno();
