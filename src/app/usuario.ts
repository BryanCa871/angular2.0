export class Usuario {
    id: number;
    name: string;
    email: string;
    phone: number;
    rol_id: number;
    active: number;
    CodeTemporal: number;
    password: string;

    constructor(){
        this.id=0;
        this.name="";
        this.email="";
        this.phone=0;
        this.rol_id=0;
        this.active=0;
        this.CodeTemporal=0;
        this.password="";
    }
}
