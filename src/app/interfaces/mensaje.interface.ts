export interface Mensaje{
    nombre:string;
    telefono?:number;
    correo:string;
    mensaje:string;
    fecha:Date;
    visto:boolean;
    key$?:string;
}
