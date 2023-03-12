// Generated by https://quicktype.io

export interface IOrdenador {
    nombre:          string;
    marca:           string;
    cantidad:        number;
    descripcion:     string;
    caracteristicas: ICaracteristicas;
    precio:          IPrecio;
    Imagen:          any[];
    valoraciones:    IValoraciones;
}

export interface ICaracteristicas {
    procesador: string;
    Ram:        string;
    HDD:        string;
}

export interface IPrecio {
    Preal:  number;
    dto:    number;
    oferta: boolean;
}

export interface IValoraciones {
    positivas: number;
    negativas: number;
}
