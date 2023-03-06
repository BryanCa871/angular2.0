export class Alumno {
    id: number;
    nombre: string;
    edad: number;
    telefono: string;
    fk_pais: number;

    constructor(){
        this.id = 0;
        this.nombre = "";
        this.edad = 0;
        this.telefono = "";
        this.fk_pais = 0;
    }
}
