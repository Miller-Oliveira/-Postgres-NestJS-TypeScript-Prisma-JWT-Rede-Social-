/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateSeguindoDto {

  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
