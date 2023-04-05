export class Sensor {
    _id: string;
    nombre: string;
    tipo: string;
    ubicacion: string;
    descripcion: string;
    fecha_creacion: string;
    pines: string;
    type: string;
    value: string;
    unidad: string;

    constructor() {
        this._id = '';
        this.nombre = '';
        this.tipo = '';
        this.ubicacion = '';
        this.descripcion = '';
        this.fecha_creacion = '';
        this.pines = '';
        this.type = '';
        this.value = '';
        this.unidad = '';
    }
}
