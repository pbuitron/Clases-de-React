export class Empleados {
    constructor(nombre, apellido, dni, sueldo){
        this.nombre=nombre
        this.apellido=apellido
        this.dni=dni
        this.sueldo =sueldo
        this.proyectosAsignados = [] 
        }
        asignarProyecto (nuevoproyecto){
            this.proyectosAsignados.push(nuevoproyecto)
        }
}
/**/
export class Proyectos {
    constructor(nombre, fi, ff, costo, tipo){
        this.nombre=nombre
        this.fi=fi
        this.ff=ff
        this.costo=costo
        this.tipo=tipo
    }
}

/* Caso de solo exportar una sola clase, agregar export al final del código, sin export en la clase.
export default Empleados*/
