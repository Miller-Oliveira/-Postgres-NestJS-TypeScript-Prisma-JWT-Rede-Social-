/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateSeguidoreDto {

  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
