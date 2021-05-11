
export interface Instalacion {
  id?        : string;
  nContrato  : string;
  identidad  : string;
  cliente    : string;
  direccionIP: string;
  direccion  : string;
  departamento: string;
  telefono   : string;
  estado     : string;
  equipos_asignados: string;
  comentarios: string;
 // creado     : string;
  fecha_creado: Date;
}
