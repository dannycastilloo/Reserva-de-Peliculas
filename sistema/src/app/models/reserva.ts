export class Reserva {

    _id?: string;
    titulo: string;
    genero: string;
    director: string;
    actor: string;
    fecha: string;

    constructor(titulo:string, genero:string, director: string, actor: string, fecha: string){
        this.titulo = titulo;
        this.genero = genero;
        this.director = director;
        this.actor = actor;
        this.fecha = fecha;
    }

}