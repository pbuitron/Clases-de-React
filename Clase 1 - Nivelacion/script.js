
/*en el caso de importar mas de una clase*/
import { Empleados,Proyectos } from "./clases.js"

/*En el caso de importar una sola clase:
 import Empleados from "./clases.js"*/

/*Recordar que hay que agregar en la etiqueta script del HTML el atributo type="module" */


const empleado1 = new Empleados (`Paul`,`Buitron`, 42639931, 5000 )
const empleado2 = new Empleados (`Matias`,`Buitron`, 77990479, 2000 )
const empleado3 = new Empleados (`Sebas`,`Zarate`, 71255425, 1000 )
const empleado4 = new Empleados (`Kendra`,`Shapiama`, 78451201, 500 )
/**/
const proyecto1 = new Proyectos (`Patitas Suaves`, "15/12/2022", `25/01/2023`, 4500, `Generacion de aplicativo movil`)
const proyecto2 = new Proyectos (`Verde Esmeralda`, "15/11/2022", `25/02/2023`, 4500, `Optimización de página`)
const proyecto3 = new Proyectos (`Garrita Feliz`, "15/12/2022", `15/01/2023`, 4500, `Generación de BBDD`)
const proyecto4 = new Proyectos (`Patitas Suaves`, "15/12/2022", `25/01/2023`, 4500, `ABM de clientes`)

empleado1.asignarProyecto(proyecto1)
empleado1.asignarProyecto(proyecto2)
empleado2.asignarProyecto(proyecto1)
empleado2.asignarProyecto(proyecto3)
empleado2.asignarProyecto(proyecto4)
empleado3.asignarProyecto(proyecto3)
empleado3.asignarProyecto(proyecto4)
empleado4.asignarProyecto(proyecto1)
empleado4.asignarProyecto(proyecto3)
empleado4.asignarProyecto(proyecto4)

console.log(empleado1)
console.log(empleado2)
console.log(empleado3)
console.log(empleado4)


