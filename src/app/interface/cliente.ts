export class Cliente {
    id: number;
    Nombre: string;
    Ap_paterno: string;
    Ap_materno: string;
    Correo: string;
    Numero: number;
    Status: number;
    

    constructor(){
        this.id = 0;
        this.Nombre = "";
        this.Ap_paterno = "";
        this.Ap_materno = "";
        this.Correo="";
        this.Numero=0;
        this.Status=0;
    }
}
