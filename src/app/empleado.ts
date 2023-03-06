export class Empleado {
    id : number;
    Nombre : string;
    Ap_paterno : string;
    Ap_materno : string;
    Edad : number;
    Correo : string;
    Numero : string;
    Status : number;

    constructor(){
        this.id = 0;
        this.Nombre = "";
        this.Ap_materno = "";
        this.Ap_paterno = "";
        this.Edad = 0;
        this.Correo = "";
        this.Numero = "";
        this.Status = 0;        
    }
}
