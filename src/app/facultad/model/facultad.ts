/**
 * Modelo de datos para los facultads
 */
export class Facultad {
  public codigo_facu!: number;
  public nombre_facu!: string;
  public decano!: string;
  private modalidad!: string;
  public proyec_invest_facu!: string;
  public descripcion!: string;
  public fecha_crea!: Date;
  public telefono!: number;
  public correo!: string;
  public prog_academico!: string;
  public calendar_academico!: string;
}
