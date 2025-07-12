export class TarjetaCredito {
    id?: string;
    titular: string;
    numDeTarjeta: string;
    cvv: number;
    fechaCreacion: Date;
    fechaActualizacion: Date;

    constructor(titular: string, numDeTarjeta: string, cvv: number)
    {
        this.titular = titular,
        this.numDeTarjeta = numDeTarjeta,
        this.cvv = cvv,
        this.fechaCreacion = new Date(),
        this.fechaActualizacion = new Date()
    }
}
