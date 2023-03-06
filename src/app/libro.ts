export class Libro {
    id: number;
    nombre: string;
    fecha_de_publicacion: string;
    numero_de_paginas: string;
    fk_editorial: number;
    fk_autor: number;
    fk_pais: number;
    status: number;

    constructor(){
        this.nombre = "";
        this.id = 0;
        this.status = 0;
        this.fecha_de_publicacion = "";
        this.numero_de_paginas = "";
        this.fk_editorial = 0;
        this.fk_autor = 0;
        this.fk_pais = 0;
        
    }
}